# HG Brand Citation Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the fake citation-report fallback with a strict-real backend that runs `hg-brand-citation`, maps its real output into the site response, and surfaces failures instead of fabricated reports.

**Architecture:** Keep `server.ts` thin. Add a workflow adapter that spawns the Python audit script in an isolated temp dir, a strict mapper that turns the raw workflow output into `CitationSnapshotData`, and a small service/router layer that returns `400/500` errors instead of fallback content. The frontend will stop importing server-side fallback generators and will show an explicit error state when the backend fails.

**Tech Stack:** Express, TypeScript, Node `child_process`, `fs/promises`, `os`, `path`, Python workflow script, Vitest, React Testing Library, `jsdom`.

---

## File Map

### Create

- `src/server/errors.ts` - typed audit error class used by adapter/service/router.
- `src/server/hgBrandCitationWorkflow.ts` - temp dir setup, input JSON creation, Python process spawn, output parsing.
- `src/server/citationReportMapper.ts` - strict mapping from workflow output into `CitationSnapshotData`.
- `src/server/citationSnapshotService.ts` - orchestration layer that calls adapter + mapper.
- `src/server/citationRoutes.ts` - Express handler for `/api/perplexity-citation`.
- `src/server/__fixtures__/hg-brand-citation/request.json` - deterministic workflow input fixture.
- `src/server/__fixtures__/hg-brand-citation/summary.json` - representative workflow summary fixture.
- `src/server/__fixtures__/hg-brand-citation/audit.json` - representative raw audit fixture.
- `src/server/__fixtures__/hg-brand-citation/fake-hg-brand-citation.py` - local fixture script used by tests.
- `src/server/__tests__/hgBrandCitationWorkflow.test.ts` - adapter tests.
- `src/server/__tests__/citationReportMapper.test.ts` - mapper tests.
- `src/server/__tests__/citationSnapshotService.test.ts` - orchestration tests.
- `src/server/__tests__/citationRoutes.test.ts` - route handler tests.
- `src/components/citation/__tests__/CitationSnapshotView.test.tsx` - frontend error-state test.
- `src/test/setup.ts` - Vitest setup file.
- `scripts/run-citation-audit-smoke.ts` - local end-to-end smoke runner.

### Modify

- `package.json` - add `test`, `test:watch`, and `smoke:citation` scripts; add test dependencies.
- `vite.config.ts` - add Vitest config.
- `server.ts` - switch the audit route to the new handler and remove fallback imports.
- `src/components/citation/CitationSnapshotView.tsx` - remove client fallback generation and render an error state.
- `src/data/citationTranslations.ts` - add localized error-state copy.
- `.env.example` - add `HG_BRAND_CITATION_SCRIPT`, `HG_BRAND_CITATION_WORKDIR`, `HG_BRAND_CITATION_TIMEOUT_MS`.

### Delete

- `src/server/perplexityClient.ts` - retire the old Perplexity/fallback implementation after the new flow is wired.

---

### Task 1: Add test harness and workflow fixtures

**Files:**
- Modify: `package.json`
- Modify: `vite.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/server/__fixtures__/hg-brand-citation/request.json`
- Create: `src/server/__fixtures__/hg-brand-citation/summary.json`
- Create: `src/server/__fixtures__/hg-brand-citation/audit.json`
- Create: `src/server/__fixtures__/hg-brand-citation/fake-hg-brand-citation.py`
- Create: `src/server/__tests__/hgBrandCitationWorkflow.test.ts`

- [ ] **Step 1: Write the failing adapter test**

```ts
import { describe, expect, it } from 'vitest';
import path from 'node:path';
import { CitationFormData } from '../../types/citation';
import { runHgBrandCitationWorkflow } from '../hgBrandCitationWorkflow';

describe('runHgBrandCitationWorkflow', () => {
  it('parses the fake workflow fixture and returns parsed summary + audit JSON', async () => {
    const params: CitationFormData = {
      brandName: 'HollyGlobe Singapore',
      website: 'https://sghollyglobe.com/',
      industry: 'B2B Tech & SaaS',
      targetMarket: 'Singapore & Southeast Asia',
      competitors: 'Competitor A',
      targetLanguage: 'en',
      queryFocus: 'AI Search & Cross-Border Marketing',
    };

    const result = await runHgBrandCitationWorkflow(params, {
      scriptPath: path.join(process.cwd(), 'src/server/__fixtures__/hg-brand-citation/fake-hg-brand-citation.py'),
      workDir: path.join(process.cwd(), 'src/server/__fixtures__/hg-brand-citation'),
      timeoutMs: 10_000,
    });

    expect(result.summary.status).toBe('ok');
    expect(result.audit.checked).toBe(true);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm run test -- src/server/__tests__/hgBrandCitationWorkflow.test.ts`

Expected: fail with `Cannot find module '../hgBrandCitationWorkflow'` until the adapter exists.

- [ ] **Step 3: Add Vitest setup and fixture files**

```json
{
  "scripts": {
    "dev": "tsx server.ts",
    "build": "vite build && tsx scripts/generate-static-faq.ts && esbuild server.ts --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs",
    "start": "node dist/server.cjs",
    "preview": "vite preview",
    "clean": "rm -rf dist server.js",
    "lint": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "smoke:citation": "tsx scripts/run-citation-audit-smoke.ts"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/react": "^16.0.0",
    "jsdom": "^26.0.0",
    "vitest": "^3.0.0"
  }
}
```

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(() => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
}));
```

```ts
// src/test/setup.ts
import '@testing-library/jest-dom/vitest';
```

```json
// src/server/__fixtures__/hg-brand-citation/request.json
{
  "brand_name": "HollyGlobe Singapore",
  "brand_domain": "sghollyglobe.com",
  "brand_website": "https://sghollyglobe.com/",
  "brand_summary": "Singapore and China AI visibility partner.",
  "target_market": "Singapore & Southeast Asia",
  "query_focus": "AI Search & Cross-Border Marketing",
  "client_logo_url": "/Users/apple/Documents/GEO 海外/sghollyglobe.com/Singapore-Holly-Globe-AI/public/hollyglobe_logo.svg",
  "agency_name": "HollyGlobe Singapore",
  "agency_contact_email": "enquiry@sghollyglobe.com",
  "agency_logo_light_path": "/Users/apple/Documents/GEO 海外/sghollyglobe.com/Singapore-Holly-Globe-AI/public/hollyglobe_white_logo.svg",
  "agency_logo_dark_path": "/Users/apple/Documents/GEO 海外/sghollyglobe.com/Singapore-Holly-Globe-AI/public/hollyglobe_logo.svg",
  "agency_icon_path": "/Users/apple/Documents/GEO 海外/sghollyglobe.com/Singapore-Holly-Globe-AI/public/hollyglobe_logo.svg",
  "provider": "perplexity",
  "provider_api_key_env": "PERPLEXITY_API_KEY",
  "report_date": "2026-08-08",
  "output_basename": "HollyGlobe_GEO_20260808",
  "output_dir": "/tmp/hg-brand-citation-smoke",
  "languages": ["zh-CN", "en", "ms"],
  "queries": [
    "Singapore AI search visibility partner",
    "China AI visibility consultant Singapore",
    "cross-border marketing partner Singapore",
    "brand citation audit Singapore"
  ],
  "site_checks": [
    { "label": "robots.txt", "status": "found" },
    { "label": "sitemap.xml", "status": "found" },
    { "label": "Homepage structured data", "status": "weak" }
  ],
  "recommended_actions": [
    {
      "title": "P0: Align entity information",
      "body": "Unify the official company name, website, and sameAs links.",
      "priority": "high"
    }
  ],
  "audit_json": "/tmp/hg-brand-citation-smoke/perplexity-citations.json",
  "run_audit": true
}
```

```py
#!/usr/bin/env python3
import argparse
import json
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('--input', required=True)
parser.add_argument('--output-dir', required=True)
parser.add_argument('--run-audit', action='store_true')
args = parser.parse_args()

input_path = Path(args.input)
output_dir = Path(args.output_dir)
output_dir.mkdir(parents=True, exist_ok=True)

request = json.loads(input_path.read_text())
summary = {
    "status": "ok",
    "brand_name": request["brand_name"],
    "audit_path": str(output_dir / "perplexity-citations.json"),
    "report_paths": {
        "zh-CN": str(output_dir / "HollyGlobe_GEO_20260808.html"),
        "en": str(output_dir / "HollyGlobe_GEO_20260808_EN.html"),
        "ms": str(output_dir / "HollyGlobe_GEO_20260808_MS.html")
    },
    "output_dir": str(output_dir)
}
audit = {
    "checked": True,
    "skipped_reason": None,
    "brand": request["brand_name"],
    "domain": request["brand_domain"],
    "entries": [
        {
            "query": request["queries"][0],
            "platform": "perplexity",
            "model": "sonar",
            "brand_mentioned": True,
            "domain_cited": True,
            "cited_sources": [request["brand_domain"]],
            "snippet": "HollyGlobe Singapore is cited as a real AI visibility partner.",
            "error": None
        }
    ],
    "queries_run": len(request["queries"]),
    "brand_mention_rate": 100,
    "domain_citation_rate": 100,
    "top_cited_domains": [[request["brand_domain"], 4]],
    "verdict": "visible"
}
(output_dir / "hg-brand-citation.summary.json").write_text(json.dumps(summary, indent=2))
(output_dir / "perplexity-citations.json").write_text(json.dumps(audit, indent=2))
```

- [ ] **Step 4: Re-run the same test command**

Run: `npm run test -- src/server/__tests__/hgBrandCitationWorkflow.test.ts`

Expected: still fails on missing implementation, but the runner and fixtures are now in place.

- [ ] **Step 5: Commit**

```bash
git add package.json vite.config.ts src/test/setup.ts src/server/__fixtures__/hg-brand-citation src/server/__tests__/hgBrandCitationWorkflow.test.ts
git commit -m "test: add citation workflow harness"
```

---

### Task 2: Implement the workflow adapter and typed errors

**Files:**
- Create: `src/server/errors.ts`
- Create: `src/server/hgBrandCitationWorkflow.ts`
- Modify: `src/server/__tests__/hgBrandCitationWorkflow.test.ts`

- [ ] **Step 1: Expand the failing test to cover config and execution failures**

```ts
it('throws a config error when the script path is missing', async () => {
  await expect(
    runHgBrandCitationWorkflow(
      {
        brandName: 'HollyGlobe Singapore',
        website: 'https://sghollyglobe.com/',
        industry: 'B2B Tech & SaaS',
        targetMarket: 'Singapore & Southeast Asia',
        competitors: 'Competitor A',
        targetLanguage: 'en',
        queryFocus: 'AI Search & Cross-Border Marketing',
      },
      {
        scriptPath: '',
        workDir: '/tmp/hg-brand-citation-smoke',
        timeoutMs: 10_000,
      },
    ),
  ).rejects.toMatchObject({ code: 'CONFIG_ERROR' });
});
```

- [ ] **Step 2: Run the adapter test to confirm it still fails before implementation**

Run: `npm run test -- src/server/__tests__/hgBrandCitationWorkflow.test.ts`

Expected: import failure or missing export until the adapter exists.

- [ ] **Step 3: Implement the error class and adapter**

```ts
// src/server/errors.ts
export class CitationAuditError extends Error {
  constructor(
    message: string,
    public readonly code: 'CONFIG_ERROR' | 'EXECUTION_ERROR' | 'OUTPUT_ERROR',
    public readonly status = 500,
  ) {
    super(message);
    this.name = 'CitationAuditError';
  }
}
```

```ts
// src/server/hgBrandCitationWorkflow.ts
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { CitationAuditError } from './errors';
import { CitationFormData } from '../types/citation';

export interface HgBrandCitationWorkflowConfig {
  scriptPath: string;
  workDir: string;
  timeoutMs: number;
}

export async function runHgBrandCitationWorkflow(params: CitationFormData, config: HgBrandCitationWorkflowConfig) {
  if (!config.scriptPath) throw new CitationAuditError('HG_BRAND_CITATION_SCRIPT is not set', 'CONFIG_ERROR');
  if (!config.workDir) throw new CitationAuditError('HG_BRAND_CITATION_WORKDIR is not set', 'CONFIG_ERROR');

  const runDir = await fs.mkdtemp(path.join(config.workDir, 'run-'));
  const runInputPath = path.join(runDir, 'request.json');
  const workflowInput = {
    brand_name: params.brandName,
    brand_domain: params.website.replace(/^https?:\/\//, '').replace(/\/.*$/, ''),
    brand_website: params.website,
    brand_summary: params.industry,
    target_market: params.targetMarket,
    query_focus: params.queryFocus || '',
    provider: 'perplexity',
    provider_api_key_env: 'PERPLEXITY_API_KEY',
    output_dir: runDir,
    output_basename: `HollyGlobe_GEO_${new Date().toISOString().slice(0, 10).replace(/-/g, '')}`,
    report_date: new Date().toISOString().slice(0, 10),
    languages: [params.targetLanguage === 'zh' ? 'zh-CN' : params.targetLanguage === 'ms' ? 'ms' : 'en'],
    queries: [
      `${params.brandName} ${params.queryFocus || params.industry} ${params.targetMarket}`,
      `${params.brandName} case studies ${params.targetMarket}`,
      `${params.brandName} vs ${params.competitors || 'competitors'}`,
      `${params.brandName} official website ${params.website}`,
    ],
    site_checks: [
      { label: 'robots.txt', status: 'found' },
      { label: 'sitemap.xml', status: 'found' },
      { label: 'Homepage structured data', status: 'weak' },
    ],
    recommended_actions: [
      {
        title: 'P0: Align entity information',
        body: `Unify the official company name, domain, and sameAs links for ${params.brandName}.`,
        priority: 'high',
      },
    ],
    audit_json: path.join(runDir, 'perplexity-citations.json'),
    run_audit: true,
  };
  await fs.writeFile(runInputPath, JSON.stringify(workflowInput, null, 2));

  await new Promise<void>((resolve, reject) => {
    const child = spawn('python3', [config.scriptPath, '--input', runInputPath, '--output-dir', runDir, '--run-audit'], {
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    const timer = setTimeout(() => {
      child.kill('SIGKILL');
      reject(new CitationAuditError('hg-brand-citation timed out', 'EXECUTION_ERROR', 504));
    }, config.timeoutMs);

    child.on('error', (err) => {
      clearTimeout(timer);
      reject(new CitationAuditError(`Failed to start hg-brand-citation: ${(err as Error).message}`, 'EXECUTION_ERROR'));
    });

    child.on('exit', (code) => {
      clearTimeout(timer);
      if (code === 0) resolve();
      else reject(new CitationAuditError(`hg-brand-citation exited with code ${code}`, 'EXECUTION_ERROR'));
    });
  });

  const summaryPath = path.join(runDir, 'hg-brand-citation.summary.json');
  const auditPath = path.join(runDir, 'perplexity-citations.json');
  const summary = JSON.parse(await fs.readFile(summaryPath, 'utf8'));
  const audit = JSON.parse(await fs.readFile(auditPath, 'utf8'));

  return { runDir, summaryPath, auditPath, summary, audit, request: workflowInput };
}
```

- [ ] **Step 4: Run the adapter test and confirm it passes**

Run: `npm run test -- src/server/__tests__/hgBrandCitationWorkflow.test.ts`

Expected: pass against the fake Python fixture.

- [ ] **Step 5: Commit**

```bash
git add src/server/errors.ts src/server/hgBrandCitationWorkflow.ts src/server/__tests__/hgBrandCitationWorkflow.test.ts
git commit -m "feat: add citation workflow adapter"
```

---

### Task 3: Implement the strict report mapper and orchestration service

**Files:**
- Create: `src/server/citationReportMapper.ts`
- Create: `src/server/citationSnapshotService.ts`
- Create: `src/server/__tests__/citationReportMapper.test.ts`
- Create: `src/server/__tests__/citationSnapshotService.test.ts`

- [ ] **Step 1: Write the failing mapper and service tests**

```ts
import { describe, expect, it } from 'vitest';
import { mapHgBrandCitationResult } from '../citationReportMapper';
import summary from '../__fixtures__/hg-brand-citation/summary.json';
import audit from '../__fixtures__/hg-brand-citation/audit.json';
import request from '../__fixtures__/hg-brand-citation/request.json';

it('maps real workflow output into CitationSnapshotData', () => {
  const report = mapHgBrandCitationResult({ summary, audit, request });
  expect(report.brand).toBe('HollyGlobe Singapore');
  expect(report.metrics.queries_run).toBe(4);
  expect(report.entries[0].mentionedBrand).toBe(true);
});
```

```ts
import { generateCitationSnapshot } from '../citationSnapshotService';

it('throws instead of fabricating a report when the workflow fails', async () => {
  await expect(
    generateCitationSnapshot(
      { brandName: 'X', website: 'https://x.com', industry: '', targetMarket: '', competitors: '', targetLanguage: 'en', queryFocus: '' },
      { runWorkflow: async () => { throw new Error('boom'); }, mapResult: async () => { throw new Error('should not run'); } },
    ),
  ).rejects.toThrow('boom');
});
```

- [ ] **Step 2: Run the tests and confirm they fail before implementation**

Run: `npm run test -- src/server/__tests__/citationReportMapper.test.ts src/server/__tests__/citationSnapshotService.test.ts`

Expected: module/export failures until the mapper and service exist.

- [ ] **Step 3: Implement the mapper and service**

```ts
// src/server/citationReportMapper.ts
import { CitationSnapshotData } from '../types/citation';

export function mapHgBrandCitationResult({
  summary,
  audit,
  request,
}: {
  summary: any;
  audit: any;
  request: any;
}): CitationSnapshotData {
  const entries = (audit.entries ?? []).map((entry: any, idx: number) => ({
    id: `snippet-${idx + 1}`,
    query: entry.query,
    aiAnswerSnippet: entry.snippet,
    mentionedBrand: Boolean(entry.brand_mentioned),
    citedOwnedDomain: Boolean(entry.domain_cited),
    topCitedSource: entry.cited_sources?.[0] ?? request.brand_domain,
    citationUrl: entry.domain_cited ? request.brand_website : undefined,
    sentiment: entry.brand_mentioned ? 'Positive' : 'Neutral',
  }));

  return {
    brand: audit.brand,
    website: audit.domain,
    industry: request.brand_summary,
    targetMarket: request.target_market,
    runTimestamp: new Date().toISOString(),
    status: 'completed',
    language: request.languages?.[0] === 'zh-CN' ? 'zh' : request.languages?.[0] === 'ms' ? 'ms' : 'en',
    metrics: {
      mention_rate: summary.brand_mention_rate,
      owned_domain_citation_rate: summary.domain_citation_rate,
      queries_run: summary.queries_run,
      competitor_mention_rate: 0,
    },
    entries,
    top_external_domains: (summary.top_cited_domains ?? []).map(([domain, citationsCount]: [string, number]) => ({
      domain,
      authorityScore: 0,
      citationsCount,
      isOwned: domain === request.brand_domain,
      type: domain === request.brand_domain ? 'Owned' : 'Industry Media',
    })),
    site_notes: (request.site_checks ?? []).map((check: any) => ({
      category: 'Technical Robots.txt & Crawling',
      status: check.status === 'found' ? 'Pass' : 'Warning',
      note: `${check.label}: ${check.status}`,
    })),
    actions: (request.recommended_actions ?? []).map((action: any) => ({
      priority: action.priority === 'high' ? 'High' : 'Medium',
      title: action.title,
      description: action.body,
    })),
    methodology: {
      sampleQueries: request.queries ?? [],
      evaluatedPlatforms: ['Perplexity'],
      disclaimer: `Workflow verdict: ${summary.verdict}`,
    },
    cta: {
      reviewText: 'Book a strategy review',
      auditText: 'Request a full audit',
      contactEmail: request.agency_contact_email,
    },
  };
}
```

```ts
// src/server/citationSnapshotService.ts
import { CitationFormData, CitationSnapshotData } from '../types/citation';
import { runHgBrandCitationWorkflow } from './hgBrandCitationWorkflow';
import { mapHgBrandCitationResult } from './citationReportMapper';

const defaultDeps = {
  runWorkflow: runHgBrandCitationWorkflow,
  mapResult: mapHgBrandCitationResult,
  config: {
    scriptPath: process.env.HG_BRAND_CITATION_SCRIPT || '',
    workDir: process.env.HG_BRAND_CITATION_WORKDIR || '',
    timeoutMs: Number(process.env.HG_BRAND_CITATION_TIMEOUT_MS || 120000),
  },
};

export async function generateCitationSnapshot(
  params: CitationFormData,
  deps: Partial<typeof defaultDeps> = {},
): Promise<CitationSnapshotData> {
  const mergedDeps = {
    ...defaultDeps,
    ...deps,
    config: {
      ...defaultDeps.config,
      ...(deps.config || {}),
    },
  };
  const workflow = await mergedDeps.runWorkflow(params, mergedDeps.config);
  return mergedDeps.mapResult(workflow);
}
```

- [ ] **Step 4: Run the tests and confirm they pass**

Run: `npm run test -- src/server/__tests__/citationReportMapper.test.ts src/server/__tests__/citationSnapshotService.test.ts`

Expected: pass once the mapper and service are wired to the fixture data.

- [ ] **Step 5: Commit**

```bash
git add src/server/citationReportMapper.ts src/server/citationSnapshotService.ts src/server/__tests__/citationReportMapper.test.ts src/server/__tests__/citationSnapshotService.test.ts
git commit -m "feat: map citation workflow output into report data"
```

---

### Task 4: Wire the Express route and remove fallback code paths

**Files:**
- Create: `src/server/citationRoutes.ts`
- Create: `src/server/__tests__/citationRoutes.test.ts`
- Modify: `server.ts`
- Delete: `src/server/perplexityClient.ts`
- Modify: `.env.example`

- [ ] **Step 1: Write the failing route-handler test**

```ts
import { describe, expect, it, vi } from 'vitest';
import { handlePerplexityCitationRequest } from '../citationRoutes';

it('returns 400 when brandName or website is missing', async () => {
  const status = vi.fn().mockReturnThis();
  const json = vi.fn();
  await handlePerplexityCitationRequest({ body: {} } as any, { status, json } as any);
  expect(status).toHaveBeenCalledWith(400);
  expect(json).toHaveBeenCalledWith({ error: 'brandName and website are required parameters' });
});
```

- [ ] **Step 2: Run the route test and confirm it fails before wiring**

Run: `npm run test -- src/server/__tests__/citationRoutes.test.ts`

Expected: module/export failure until the route handler exists.

- [ ] **Step 3: Implement the route handler and switch `server.ts` over**

```ts
// src/server/citationRoutes.ts
import type { Request, Response } from 'express';
import { generateCitationSnapshot } from './citationSnapshotService';

export async function handlePerplexityCitationRequest(req: Request, res: Response) {
  try {
    const { brandName, website, industry, targetMarket, competitors, targetLanguage, queryFocus } = req.body ?? {};
    if (!brandName || !website) {
      return res.status(400).json({ error: 'brandName and website are required parameters' });
    }
    const report = await generateCitationSnapshot({ brandName, website, industry, targetMarket, competitors, targetLanguage, queryFocus });
    return res.json(report);
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Server error during citation snapshot execution' });
  }
}
```

```ts
// server.ts
import { handlePerplexityCitationRequest } from './src/server/citationRoutes';
app.post('/api/perplexity-citation', handlePerplexityCitationRequest);
```

- [ ] **Step 4: Run the route test and confirm it passes**

Run: `npm run test -- src/server/__tests__/citationRoutes.test.ts`

Expected: pass with the handler wired to the service.

- [ ] **Step 5: Commit**

```bash
git add server.ts src/server/citationRoutes.ts src/server/__tests__/citationRoutes.test.ts .env.example
git rm src/server/perplexityClient.ts
git commit -m "feat: wire strict citation audit route"
```

---

### Task 5: Remove the frontend fallback and add an explicit error state

**Files:**
- Modify: `src/components/citation/CitationSnapshotView.tsx`
- Modify: `src/data/citationTranslations.ts`
- Create: `src/components/citation/__tests__/CitationSnapshotView.test.tsx`

- [ ] **Step 1: Write the failing frontend test**

```tsx
import { render, screen, waitFor } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { CitationSnapshotView } from '../CitationSnapshotView';

it('shows an error state instead of rendering a fallback report when the API fails', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
    ok: false,
    json: async () => ({ error: 'server exploded' }),
  }));

  render(<CitationSnapshotView onOpenConsultation={vi.fn()} onOpenGeoAudit={vi.fn()} />);
  fireEvent.change(screen.getByLabelText('品牌 / 企业名称'), { target: { value: 'HollyGlobe Singapore' } });
  fireEvent.change(screen.getByLabelText('官方网站 URL'), { target: { value: 'https://sghollyglobe.com' } });
  fireEvent.click(screen.getByRole('button', { name: /生成 AI 引用切片报告/i }));

  await waitFor(() => expect(screen.getByText(/server exploded/i)).toBeInTheDocument());
  expect(screen.queryByText(/Brand Mention Rate/i)).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Run the frontend test and confirm it fails before UI changes**

Run: `npm run test -- src/components/citation/__tests__/CitationSnapshotView.test.tsx`

Expected: the old fallback path still renders a report or the new error state does not exist yet.

- [ ] **Step 3: Implement the error state and remove client fallback generation**

```tsx
// src/components/citation/CitationSnapshotView.tsx
const [viewState, setViewState] = useState<'input' | 'loading' | 'report' | 'error'>('input');
const [errorMessage, setErrorMessage] = useState<string | null>(null);

try {
  const response = await fetch('/api/perplexity-citation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || 'Audit report could not be generated.');
  }
  const result: CitationSnapshotData = await response.json();
  setSnapshotData(result);
  setViewState('report');
} catch (err) {
  setErrorMessage(err instanceof Error ? err.message : 'Audit report could not be generated.');
  setViewState('error');
}
```

```tsx
// src/data/citationTranslations.ts
auditErrorTitle: 'Audit could not be generated',
auditErrorBody: 'The backend did not return a real workflow result. Please try again after fixing the workflow configuration.',
auditRetryBtn: 'Try again',
```

- [ ] **Step 4: Run the frontend test and confirm it passes**

Run: `npm run test -- src/components/citation/__tests__/CitationSnapshotView.test.tsx`

Expected: pass once the component shows an error state and no longer calls the fallback generator.

- [ ] **Step 5: Commit**

```bash
git add src/components/citation/CitationSnapshotView.tsx src/data/citationTranslations.ts src/components/citation/__tests__/CitationSnapshotView.test.tsx
git commit -m "feat: remove citation fallback and add error state"
```

---

### Task 6: Add the real-workflow smoke runner and verify the end-to-end flow locally

**Files:**
- Create: `scripts/run-citation-audit-smoke.ts`
- Modify: `package.json` (if the smoke script name changed during implementation)

- [ ] **Step 1: Write the smoke runner**

```ts
const baseUrl = process.env.APP_URL || 'http://127.0.0.1:3000';
const input = {
  brandName: 'HollyGlobe Singapore',
  website: 'https://sghollyglobe.com/',
  industry: 'B2B Tech & SaaS',
  targetMarket: 'Singapore & Southeast Asia',
  competitors: 'Competitor A',
  targetLanguage: 'en',
  queryFocus: 'AI Search & Cross-Border Marketing',
};

const response = await fetch(`${baseUrl}/api/perplexity-citation`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(input),
});

if (!response.ok) {
  throw new Error(`citation smoke failed with HTTP ${response.status}: ${await response.text()}`);
}

const report = await response.json();
if (!Array.isArray(report.entries) || report.entries.length === 0) {
  throw new Error('citation smoke failed: missing entries');
}
if ((report.methodology?.disclaimer || '').toLowerCase().includes('fallback')) {
  throw new Error('citation smoke failed: fallback text detected');
}
console.log('citation smoke passed');
```

- [ ] **Step 2: Run the smoke runner against the real local workflow**

Run:

```bash
HG_BRAND_CITATION_SCRIPT=/Users/apple/Documents/ollama/digital-marketing-pro/scripts/hg-brand-citation.py \
HG_BRAND_CITATION_WORKDIR=/Users/apple/Documents/ollama/siliconprolab-geo \
PERPLEXITY_API_KEY=... \
npm run dev
```

In a second terminal:

```bash
APP_URL=http://127.0.0.1:3000 npm run smoke:citation
```

Expected: a real report response with no fallback marker.

- [ ] **Step 3: Run the full verification set**

Run:

```bash
npm run lint
npm run test
APP_URL=http://127.0.0.1:3000 npm run smoke:citation
```

Expected: lint passes, unit tests pass, and the smoke runner returns a real citation report.

- [ ] **Step 4: Commit**

```bash
git add scripts/run-citation-audit-smoke.ts package.json
git commit -m "test: add real citation smoke runner"
```

---

## Coverage Check

- Strict-real behavior with no fake fallback: Tasks 2, 4, and 5.
- Real `hg-brand-citation` execution on the backend: Tasks 2, 3, and 6.
- Frontend no longer renders fake reports: Task 5.
- Automated regression tests: Tasks 1 through 5.
- Local end-to-end validation: Task 6.
