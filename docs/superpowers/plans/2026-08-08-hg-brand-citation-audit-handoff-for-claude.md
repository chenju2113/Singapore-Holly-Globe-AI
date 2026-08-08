# HG Brand Citation Audit Handoff for Claude

> Scope: this document applies only to `/Users/apple/Documents/GEO 海外/sghollyglobe.com/Singapore-Holly-Globe-AI`.

This note is the continuation brief for the rebuilt citation/report flow in the `sghollyglobe.com` web app. The goal is to let Claude pick up from the current state without redoing the rebuilt pieces.

## What Has Already Been Rebuilt

- The `/api/perplexity-citation` path is wired through `src/server/citationRoutes.ts`.
- Workflow execution lives in `src/server/hgBrandCitationWorkflow.ts`.
- Response shaping lives in `src/server/citationReportMapper.ts`.
- Orchestration is in `src/server/citationSnapshotService.ts`.
- Error typing is in `src/server/errors.ts`.
- The frontend citation flow now has an explicit error state in `src/components/citation/CitationSnapshotView.tsx`.
- Localized error copy was added to `src/data/citationTranslations.ts`.
- The strict workflow env vars were added to `.env.example`.
- A smoke script exists at `scripts/run-citation-audit-smoke.ts`.
- Test fixtures and server tests were added under `src/server/__fixtures__` and `src/server/__tests__`.
- **Real site readiness checks** replace hardcoded placeholders (`src/server/siteReadiness.ts`).
- **Citation share metric** (0-100%) replaces fabricated `authorityScore` (82/90 hardcoded values).
- **Domain classification** (Owned/Wikipedia/Directory/PR/Industry Media) is derived from domain patterns, not guessed.
- **Legacy fallback generator removed**: `src/server/citationGenerator.ts` deleted, `server.ts` import cleaned.
- **Audit filename contract fixed**: adapter now pins `audit_output_name` so the workflow and mapper agree on `perplexity-citations.json`.
- **Temp dir leakage fixed**: test runs now write to OS temp dirs, not into `src/server/__fixtures__`.
- **dotenv.config() timing fixed**: `server.ts` now calls `dotenv.config()` before importing modules that read `process.env`, and `citationSnapshotService.ts` lazily reads env at call time.

## What Claude Should Continue With

1. ~~Verify the strict-real citation path end to end with the real local workflow environment.~~ ✅ **Done: smoke test passes.**
2. ~~Confirm the Node server returns a real report only when the Python workflow succeeds.~~ ✅ **Done: no fabricated fallback.**
3. ~~Remove or archive any remaining legacy citation fallback paths that are no longer needed.~~ ✅ **Done: citationGenerator.ts removed.**
4. ~~Tighten any data mapping gaps exposed by real workflow output.~~ ✅ **Done: citationShare, domain classification, site_notes statuses.**
5. ~~Run the relevant tests and smoke checks, then update this handoff if the final contract changes.~~ ✅ **Done: 12 tests pass, smoke test passes.**

**Next:** If adding new queries or changing the workflow request schema, update the fixtures (`src/server/__fixtures__/hg-brand-citation/*.json`) and re-run tests.

## Final Contract (Adapter ↔ Workflow)

### Request (sent to `hg-brand-citation.py`)

- `brand_name`, `brand_domain`, `brand_website`: brand identity
- `brand_summary` or `industry`: industry classification
- `target_market`, `query_focus`: targeting params
- `queries`: array of search queries (4-10 recommended)
- `site_checks`: array of `{label, status, detail}` from real site readiness checks
- `recommended_actions`: array of `{title, body, priority}` derived from failed checks
- `audit_output_name`: `"perplexity-citations.json"` (pinned so adapter and workflow agree)
- `audit_json`: absolute path where the audit JSON will be written
- `run_audit`: `true` to enable citation checks
- `provider`, `provider_api_key_env`, `report_date`, `output_basename`, `output_dir`, `languages`: workflow config
- `client_logo_url` or `client_logo_path`, `agency_logo_light_path`, `agency_logo_dark_path`, `agency_icon_path`: report branding

### Response (from `hg-brand-citation.py`)

**Summary JSON** (`hg-brand-citation.summary.json`):
- `status`: `"ok"` | `"error"`
- `brand_name`, `audit_path`, `report_paths`, `output_dir`, `verdict`

**Audit JSON** (`perplexity-citations.json`):
- `checked`: `true` if audit ran
- `brand`, `domain`, `entries`: per-query citation results
- `queries_run`, `brand_mention_rate`, `domain_citation_rate`, `top_cited_domains`: aggregates
- `verdict`: `"visible"` | `"invisible"` | `"weak"`

**Mapped to CitationSnapshotData**:
- `top_external_domains`: `citationShare` (percentage of total citations), `citationsCount`, `isOwned`, `type` (classified by domain pattern)
- `site_notes`: `{category, status, note}` where `status` is `"Pass"` | `"Warning"` | `"Needs Attention"` based on real check results
- `actions`: `{priority, title, description}` recommendations tied to failed checks

## Execution Order

1. Check `git status` and confirm the current diff before touching anything else.
2. Set or confirm these environment variables in `.env`: `HG_BRAND_CITATION_SCRIPT`, `HG_BRAND_CITATION_WORKDIR`, `HG_BRAND_CITATION_TIMEOUT_MS`, `PERPLEXITY_API_KEY`.
3. Run `npm test` first to verify all unit tests pass (12 tests).
4. Execute `npm run dev` to start the server, then `APP_URL=http://127.0.0.1:3000 npm run smoke:citation` to verify end-to-end.
5. Validate the browser flow at `http://localhost:3000` and confirm the error state appears when the backend fails.

## Acceptance Criteria

- ✅ No fabricated citation report is returned when the workflow fails.
- ✅ `/api/perplexity-citation` returns a mapped real workflow result on success.
- ✅ The frontend shows loading, success, and error states correctly.
- ✅ The smoke script passes against the local workflow setup.
- ✅ The implementation remains inside this web app project only.
- ✅ Site readiness checks fetch real robots.txt, sitemap.xml, and structured data.
- ✅ Citation share and domain classification are computed from real audit data.

## Files To Watch

- `server.ts` — dotenv.config() must run before local imports
- `src/server/citationRoutes.ts`
- `src/server/citationSnapshotService.ts` — lazy env loading via getDefaultDeps()
- `src/server/hgBrandCitationWorkflow.ts` — adapter, buildRequest, buildRecommendedActions
- `src/server/citationReportMapper.ts` — citationShare, classifyDomain, toSiteStatus
- `src/server/siteReadiness.ts` — real site checks (robots.txt, sitemap.xml, structured data)
- `src/components/citation/CitationSnapshotView.tsx`
- `src/components/citation/ReportDashboard.tsx` — Citation Share column
- `src/data/citationTranslations.ts`
- `.env`, `.env.example`
- `scripts/run-citation-audit-smoke.ts`

## Notes For Handoff

- Keep the scope inside `sghollyglobe.com/Singapore-Holly-Globe-AI`.
- Do not reintroduce fake citation fallback behavior.
- If a mismatch appears between the Python workflow output and the TypeScript mapper, fix the mapper before relaxing the workflow contract.
- Site checks run against the live brand domain — an unreachable site yields `"unknown"` statuses, not a hard error.
- Citation share is `Math.round((count / totalCitations) * 100)` — a derived metric, not an authority score.
- Domain classification uses unambiguous patterns only; ambiguous domains stay `"Industry Media"` rather than guessing.
- The workflow writes audit files with the name specified in `audit_output_name`; do not assume a default filename.
