export class CitationAuditError extends Error {
  constructor(
    message: string,
    public readonly code: 'CONFIG_ERROR' | 'AUTH_ERROR' | 'EXECUTION_ERROR' | 'OUTPUT_ERROR',
    public readonly status = 500,
  ) {
    super(message);
    this.name = 'CitationAuditError';
  }
}
