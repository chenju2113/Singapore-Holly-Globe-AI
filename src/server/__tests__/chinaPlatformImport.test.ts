import { describe, expect, it } from 'vitest';
import { generateChinaPlatformSnapshot } from '../chinaPlatformImport';

describe('generateChinaPlatformSnapshot', () => {
  it('builds keyword and platform stats from pasted China AI results', () => {
    const report = generateChinaPlatformSnapshot({
      brandName: 'HollyGlobe Singapore',
      website: 'https://sghollyglobe.com',
      industry: 'Professional Services & Consulting',
      targetMarket: 'Greater China (China, HK, TW)',
      competitors: 'Agency A, Agency B',
      targetLanguage: 'zh',
      queryFocus: 'AI Search & GEO',
      chinaPlatformResults: `平台：豆包
关键词：新加坡 AI 营销公司推荐
结论：推荐
品牌提及：是
官网引用：是
来源：sghollyglobe.com
摘要：豆包把 HollyGlobe 列为值得考虑的新加坡 AI 营销服务商。

平台：元宝
关键词：best GEO agency singapore
结论：弱
品牌提及：否
官网引用：否
来源：baike.baidu.com
摘要：元宝主要回答国际营销公司，没有明确提及目标品牌。`,
    });

    expect(report.entries).toHaveLength(2);
    expect(report.metrics.mention_rate).toBe(50);
    expect(report.metrics.owned_domain_citation_rate).toBe(50);
    expect(report.metrics.recommendation_rate).toBe(50);
    expect(report.platform_recommendation_stats).toHaveLength(2);
    expect(report.platform_recommendation_stats.map((item) => item.platform)).toEqual(['Doubao', 'Yuanbao']);
    expect(report.keyword_platform_stats[0].platform).toBe('Doubao');
    expect(report.methodology.evaluatedPlatforms).toEqual(['Doubao', 'Yuanbao']);
  });
});
