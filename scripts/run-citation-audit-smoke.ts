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
