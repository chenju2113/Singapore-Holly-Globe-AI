import type { Request, Response } from 'express';
import { generateCitationSnapshot } from './citationSnapshotService';
import { CitationAuditError } from './errors';

export async function handlePerplexityCitationRequest(req: Request, res: Response) {
  try {
    const { brandName, website, industry, targetMarket, competitors, targetLanguage, queryFocus } = req.body ?? {};

    if (!brandName || !website) {
      return res.status(400).json({ error: 'brandName and website are required parameters' });
    }

    const report = await generateCitationSnapshot({
      brandName,
      website,
      industry: industry || 'Technology, SaaS & Digital Services',
      targetMarket: targetMarket || 'Singapore & Southeast Asia',
      competitors: competitors || '',
      targetLanguage: targetLanguage || 'en',
      queryFocus: queryFocus || 'AI Search & Cross-Border Marketing',
    });

    return res.json(report);
  } catch (error: any) {
    if (error instanceof CitationAuditError) {
      return res.status(error.status).json({ error: error.message, code: error.code });
    }
    return res.status(500).json({ error: error?.message || 'Server error during citation snapshot execution' });
  }
}
