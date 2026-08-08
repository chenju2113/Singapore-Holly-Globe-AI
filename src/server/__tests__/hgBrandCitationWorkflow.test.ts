import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { runHgBrandCitationWorkflow } from '../hgBrandCitationWorkflow';
import type { SiteCheck } from '../siteReadiness';

// Run dirs go to the OS temp dir, never into the repo fixtures folder.
let workDir: string;

const siteChecks: SiteCheck[] = [
  { label: 'robots.txt', status: 'found', detail: 'Reachable with a Sitemap directive' },
  { label: 'sitemap.xml', status: 'found', detail: 'Valid sitemap with 12 <loc> entries' },
  { label: 'Homepage structured data', status: 'weak', detail: 'Organization entity present but declares no sameAs links' },
];

beforeAll(async () => {
  workDir = await fs.mkdtemp(path.join(os.tmpdir(), 'hg-citation-test-'));
});

afterAll(async () => {
  await fs.rm(workDir, { recursive: true, force: true });
});

describe('runHgBrandCitationWorkflow', () => {
  it('parses the fake workflow fixture and returns parsed summary + audit JSON', async () => {
    const result = await runHgBrandCitationWorkflow(
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
        scriptPath: path.join(process.cwd(), 'src/server/__fixtures__/hg-brand-citation/fake-hg-brand-citation.py'),
        workDir,
        timeoutMs: 10_000,
        runSiteChecks: async () => siteChecks,
      },
    );

    expect(result.summary.status).toBe('ok');
    expect(result.audit.checked).toBe(true);
    expect(result.auditPath.endsWith('perplexity-citations.json')).toBe(true);
    // The adapter must pin audit_output_name, otherwise the real workflow writes
    // to {brand-slug}-{date}-citations.json and the adapter cannot find it.
    expect(result.request.audit_output_name).toBe('perplexity-citations.json');
  });

  it('passes real site check results into the workflow request instead of hardcoded defaults', async () => {
    const result = await runHgBrandCitationWorkflow(
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
        scriptPath: path.join(process.cwd(), 'src/server/__fixtures__/hg-brand-citation/fake-hg-brand-citation.py'),
        workDir,
        timeoutMs: 10_000,
        runSiteChecks: async () => [
          { label: 'robots.txt', status: 'missing', detail: 'HTTP 404' },
          { label: 'sitemap.xml', status: 'missing', detail: 'HTTP 404' },
          { label: 'Homepage structured data', status: 'missing', detail: 'No JSON-LD schema block found on the homepage' },
        ],
      },
    );

    expect(result.request.site_checks).toEqual([
      { label: 'robots.txt', status: 'missing', detail: 'HTTP 404' },
      { label: 'sitemap.xml', status: 'missing', detail: 'HTTP 404' },
      { label: 'Homepage structured data', status: 'missing', detail: 'No JSON-LD schema block found on the homepage' },
    ]);
    // Recommendations must be grounded in the failed checks.
    const actions = result.request.recommended_actions as Array<{ title: string }>;
    expect(actions.map((action) => action.title)).toEqual([
      'P0: Align brand entity markup',
      'P0: Open crawler access',
      'P1: Publish a valid sitemap',
    ]);
  });

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
});
