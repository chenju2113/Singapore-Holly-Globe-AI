import { describe, expect, it, vi } from 'vitest';
import { generateCitationSnapshot } from '../citationSnapshotService';

describe('generateCitationSnapshot', () => {
  it('falls back to AI citation analyzer when the workflow script fails', async () => {
    const report = await generateCitationSnapshot(
      {
        brandName: 'X',
        website: 'https://x.com',
        industry: '',
        targetMarket: '',
        competitors: '',
        targetLanguage: 'en',
        queryFocus: '',
      },
      {
        runWorkflow: vi.fn(async () => {
          throw new Error('boom');
        }) as any,
        mapResult: vi.fn() as any,
        config: { scriptPath: 'x', workDir: 'y', timeoutMs: 1 },
      },
    );

    expect(report.brand).toBe('X');
    expect(report.status).toBe('completed');
    expect(report.metrics.queries_run).toBeGreaterThan(0);
  });

  it('returns a China AI snapshot directly when pasted platform results are provided', async () => {
    const runWorkflow = vi.fn();

    const report = await generateCitationSnapshot(
      {
        brandName: 'X',
        website: 'https://x.com',
        industry: 'Technology, SaaS & Digital Services',
        targetMarket: 'Greater China (China, HK, TW)',
        competitors: '',
        targetLanguage: 'zh',
        queryFocus: '',
        chinaPlatformResults: `平台：豆包
关键词：品牌推荐
结论：推荐
品牌提及：是
官网引用：是
来源：x.com
摘要：豆包推荐了该品牌。`,
      },
      {
        runWorkflow: runWorkflow as any,
        mapResult: vi.fn() as any,
        config: { scriptPath: 'x', workDir: 'y', timeoutMs: 1 },
      },
    );

    expect(runWorkflow).not.toHaveBeenCalled();
    expect(report.platform_recommendation_stats[0].platform).toBe('Doubao');
    expect(report.metrics.recommendation_rate).toBe(100);
  });
});
