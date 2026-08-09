import { describe, expect, it } from 'vitest';
import { analyzeBrandCitationsWithAI } from '../aiCitationAnalyzer';

describe('aiCitationAnalyzer', () => {
  it('generates a complete citation snapshot report for a brand', async () => {
    const report = await analyzeBrandCitationsWithAI({
      brandName: 'HollyGlobe Singapore',
      website: 'sghollyglobe.com',
      industry: 'AI Search & Cross-Border Marketing',
      targetMarket: 'Singapore & Southeast Asia',
      competitors: 'Competitor A',
      targetLanguage: 'zh',
      queryFocus: 'AI Search Visibility',
    });

    expect(report.brand).toBe('HollyGlobe Singapore');
    expect(report.website).toBe('sghollyglobe.com');
    expect(report.status).toBe('completed');
    expect(report.metrics.queries_run).toBeGreaterThan(0);
    expect(typeof report.metrics.mention_rate).toBe('number');
    expect(typeof report.metrics.recommendation_rate).toBe('number');
    expect(Array.isArray(report.entries)).toBe(true);
    expect(report.entries.length).toBeGreaterThan(0);
    expect(report.keyword_platform_stats.length).toBeGreaterThan(0);
    expect(report.platform_recommendation_stats.length).toBeGreaterThan(0);
    expect(report.brand_search_indicators.length).toBeGreaterThan(0);
    expect(report.site_notes.length).toBeGreaterThan(0);
    expect(report.actions.length).toBeGreaterThan(0);
  });
});
