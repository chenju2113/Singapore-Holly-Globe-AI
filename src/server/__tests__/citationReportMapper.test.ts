import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { mapHgBrandCitationResult } from '../citationReportMapper';

function readFixture(name: string) {
  return JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'src/server/__fixtures__/hg-brand-citation', name), 'utf8'),
  );
}

describe('mapHgBrandCitationResult', () => {
  it('maps real workflow output into CitationSnapshotData', () => {
    const report = mapHgBrandCitationResult({
      summary: readFixture('summary.json'),
      audit: readFixture('audit.json'),
      request: readFixture('request.json'),
    });

    expect(report.brand).toBe('HollyGlobe Singapore');
    expect(report.metrics.queries_run).toBe(4);
    expect(report.entries).toHaveLength(4);
    expect(report.keyword_platform_stats).toHaveLength(4);
    expect(report.platform_recommendation_stats[0].platform).toBe('Perplexity');
    expect(report.brand_search_indicators).toHaveLength(4);
    expect(report.entries[0].mentionedBrand).toBe(true);
    expect(report.entries[1].sentiment).toBe('Absent');
    expect(report.website).toBe('sghollyglobe.com');
  });

  it('normalizes fractional rates from the real workflow', () => {
    const report = mapHgBrandCitationResult({
      summary: readFixture('summary.json'),
      audit: {
        ...readFixture('audit.json'),
        brand_mention_rate: 0.5,
        domain_citation_rate: 0.25,
      },
      request: {
        ...readFixture('request.json'),
        industry: 'Technology, SaaS & Digital Services',
      },
    });

    expect(report.metrics.mention_rate).toBe(50);
    expect(report.metrics.owned_domain_citation_rate).toBe(25);
    expect(report.metrics.recommendation_rate).toBe(25);
  });

  it('derives citation share from real counts and classifies domains by evidence', () => {
    const report = mapHgBrandCitationResult({
      summary: readFixture('summary.json'),
      audit: readFixture('audit.json'),
      request: readFixture('request.json'),
    });

    // 4 + 3 + 2 + 1 = 10 total citations.
    expect(report.top_external_domains).toEqual([
      { domain: 'sghollyglobe.com', citationShare: 40, citationsCount: 4, isOwned: true, type: 'Owned' },
      { domain: 'en.wikipedia.org', citationShare: 30, citationsCount: 3, isOwned: false, type: 'Wikipedia/Wiki' },
      { domain: 'clutch.co', citationShare: 20, citationsCount: 2, isOwned: false, type: 'Directory' },
      { domain: 'techinasia.com', citationShare: 10, citationsCount: 1, isOwned: false, type: 'Industry Media' },
    ]);
  });

  it('maps real site check statuses without turning an unfinished check into a pass', () => {
    const report = mapHgBrandCitationResult({
      summary: readFixture('summary.json'),
      audit: readFixture('audit.json'),
      request: {
        ...readFixture('request.json'),
        site_checks: [
          { label: 'robots.txt', status: 'found', detail: 'Reachable with a Sitemap directive' },
          { label: 'sitemap.xml', status: 'missing', detail: 'HTTP 404' },
          { label: 'Homepage structured data', status: 'unknown', detail: 'Request failed or timed out' },
        ],
      },
    });

    expect(report.site_notes).toEqual([
      {
        category: 'Technical Robots.txt & Crawling',
        status: 'Pass',
        note: 'robots.txt: Reachable with a Sitemap directive',
      },
      { category: 'Technical Robots.txt & Crawling', status: 'Needs Attention', note: 'sitemap.xml: HTTP 404' },
      {
        category: 'Brand Entity Markup',
        status: 'Warning',
        note: 'Homepage structured data: Request failed or timed out',
      },
    ]);
  });
});
