# HG Brand Citation Audit Integration Design

## Summary

This design replaces the current pseudo-random citation audit behavior with a strict real-data backend integration built on the existing `hg-brand-citation` workflow. The immediate target is the `/api/perplexity-citation` path used by the audit report UI. If the backend cannot produce a real workflow result, it must fail and return an error. It must never fabricate a report.

## Goals

- Generate audit reports from the existing local `hg-brand-citation` workflow.
- Preserve the current website request and response flow where practical.
- Return real audit data only.
- Make backend failures explicit and debuggable during local testing.
- Keep the implementation narrowly scoped to the citation report path first.

## Non-Goals

- Rebuild the `hg-brand-citation` logic in TypeScript.
- Refactor the separate `/api/geo-audit` flow in this phase.
- Add async job queues, databases, PDF export, or report history.
- Use Gemini as a fallback generator.

## Current Problem

The current audit experience can show plausible-looking reports even when the backend does not produce real evidence. That happens in two places:

1. The backend citation path can synthesize fallback content.
2. The frontend can still render a fallback report when the API fails.

This creates a trust problem. Users can receive a polished report that is not grounded in a real audit run.

## Decision

Use the existing Python-based `hg-brand-citation` workflow as the single source of truth for citation audit generation in local development. The system will follow a strict-real contract:

- Success: return only workflow-derived results.
- Failure: return an error and no report payload.

## Proposed Architecture

The backend will be split into three focused parts.

### 1. API Route Layer

`server.ts` will continue to expose `/api/perplexity-citation`. Its responsibilities will be:

- validate request payloads
- call the workflow adapter
- translate domain errors into HTTP responses
- return mapped JSON for successful runs

It will not assemble workflow files, spawn Python processes, or synthesize report content.

### 2. Workflow Adapter Layer

A new module, `src/server/hgBrandCitationWorkflow.ts`, will own workflow execution. Its responsibilities will be:

- derive a unique temporary run directory for each request
- transform request payloads into `hg-brand-citation` input JSON
- write the input file to disk
- execute `hg-brand-citation.py`
- enforce a timeout
- locate and read workflow output files
- return parsed raw workflow results or raise typed errors

This isolates all file system and process execution concerns from the route layer.

### 3. Response Mapping Layer

A new module, `src/server/citationReportMapper.ts`, will convert workflow output into the existing frontend report contract. Its responsibilities will be:

- normalize real workflow fields
- derive display-ready metrics from real results only
- map output into `CitationSnapshotData`
- reject incomplete output rather than fill gaps with invented values

## Request-to-Workflow Data Flow

For each `/api/perplexity-citation` request:

1. The route validates required inputs, especially `brandName` and `website`.
2. The route passes the normalized request into the workflow adapter.
3. The adapter creates a temporary working directory for that run.
4. The adapter builds an input JSON file for `hg-brand-citation`.
5. The adapter executes `hg-brand-citation.py --input <file> --run-audit`.
6. The workflow generates real citation output files.
7. The adapter reads the summary JSON and raw audit JSON.
8. The mapper converts those files into the website response structure.
9. The route returns the mapped payload to the frontend.

## Workflow Input Mapping

The adapter will map the current website form data into the workflow schema using these rules:

- `brandName` -> `brand_name`
- `website` -> `brand_website` and derived `brand_domain`
- `industry` -> `brand_summary` seed text if provided
- `targetLanguage` -> `languages`
- `queryFocus`, `industry`, `targetMarket`, `competitors` -> generated `queries`
- static defaults -> `site_checks` and `recommended_actions`
- runtime control -> `run_audit: true`

The adapter may use small deterministic templates to construct workflow inputs such as queries and site checks. Those templates are acceptable because they configure a real audit run. They are not acceptable as a substitute for missing audit results.

## Output Mapping

The mapper will read actual workflow outputs and derive frontend fields from them. The returned report may include:

- audited queries from workflow entries
- mention and citation rates from summary metrics
- cited domains from real source lists
- snippets only when present in workflow output
- recommendation sections only when grounded in audit evidence

If required fields are missing, the mapper will throw a parse error instead of inserting placeholder values.

## Error Handling

The system will fail hard on any missing prerequisite or broken run. Expected error classes include:

- configuration error
  - missing script path
  - missing work directory
  - missing required API keys used by the workflow
- execution error
  - Python process failed
  - workflow returned a non-zero exit code
  - workflow timed out
- output error
  - expected output files not found
  - output JSON malformed
  - output structure incomplete for mapping

HTTP behavior:

- `400` for invalid input
- `500` for configuration, execution, or output failures
- `504` may be used for timeout-specific failures if the existing server style makes that practical

Every failure path must return an error object and no synthetic report payload.

## Frontend Contract Change

The frontend citation report view must stop generating fallback report data on API failure. Instead:

- loading state remains while the request is in flight
- success state appears only after a valid API payload is returned
- error state appears when the API returns failure or malformed data

The UI copy can remain simple, but the behavior must reflect the strict-real contract:

- no successful report view without a successful workflow run

## Configuration

The implementation will introduce or standardize these environment variables:

- `HG_BRAND_CITATION_SCRIPT`
- `HG_BRAND_CITATION_WORKDIR`
- `HG_BRAND_CITATION_TIMEOUT_MS`
- `PERPLEXITY_API_KEY` if the workflow depends on it

The backend should validate required configuration at request time or startup and produce actionable errors.

## Local Testing Strategy

Testing will be done in three layers.

### 1. Workflow Smoke Test

Run `hg-brand-citation.py` manually with a fixed input JSON to verify:

- the script executes on the current machine
- the required credentials are available
- output files are written as expected

### 2. API Integration Test

Start the local Node server and send a POST request to `/api/perplexity-citation`. Verify:

- the route creates a real workflow run
- the response contains real data only
- failures are surfaced as errors

### 3. Frontend End-to-End Check

Submit the live form in local development. Verify:

- a successful run shows a real report
- a failed run shows an error state
- no pseudo-report is rendered

## Implementation Scope

This phase will implement only the minimum required changes:

1. Replace `/api/perplexity-citation` backend generation with `hg-brand-citation`.
2. Remove fallback fake-data behavior from that route path.
3. Remove frontend fallback rendering for that same report flow.
4. Run a local real-data test and keep a reproducible sample input for regression checks.

## Risks and Mitigations

### External Workflow Dependency

Risk: the Node app now depends on a local Python workflow and its environment.

Mitigation: isolate that dependency in the adapter layer and make configuration errors explicit.

### Output Contract Drift

Risk: workflow output shape may change and silently break the site mapping.

Mitigation: keep mapping strict, validate required fields, and fail loudly on schema mismatches.

### Long Running Requests

Risk: synchronous workflow execution may increase request latency.

Mitigation: enforce a timeout now and consider async job execution only in a later phase if needed.

## Acceptance Criteria

- Submitting the citation audit form triggers a real `hg-brand-citation` workflow run.
- A successful API response is based only on workflow output files.
- Any workflow failure returns an API error and no fallback report content.
- The frontend no longer renders generated fake citation reports after backend failure.
- A local end-to-end test demonstrates one successful real audit run.
