import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CitationSnapshotView } from '../CitationSnapshotView';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('CitationSnapshotView', () => {
  it('shows an error state instead of rendering a fallback report when the API fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({ error: 'server exploded' }),
      }),
    );

    render(<CitationSnapshotView onOpenConsultation={vi.fn()} onOpenGeoAudit={vi.fn()} />);

    fireEvent.change(screen.getByLabelText(/品牌 \/ 企业名称/i), { target: { value: 'HollyGlobe Singapore' } });
    fireEvent.change(screen.getByLabelText(/官方网站 URL/i), { target: { value: 'https://sghollyglobe.com' } });
    fireEvent.click(screen.getByRole('button', { name: /生成 AI 引用切片报告/i }));

    await waitFor(() => expect(screen.getByText(/server exploded/i)).toBeInTheDocument());
    expect(screen.queryByText(/AI Brand Mention Rate/i)).not.toBeInTheDocument();
  });
});
