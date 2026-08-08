import { describe, expect, it, vi } from 'vitest';
import { handlePerplexityCitationRequest } from '../citationRoutes';

describe('handlePerplexityCitationRequest', () => {
  it('returns 400 when brandName or website is missing', async () => {
    const status = vi.fn().mockReturnThis();
    const json = vi.fn();

    await handlePerplexityCitationRequest({ body: {} } as any, { status, json } as any);

    expect(status).toHaveBeenCalledWith(400);
    expect(json).toHaveBeenCalledWith({ error: 'brandName and website are required parameters' });
  });
});
