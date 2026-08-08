import fs from 'fs';

export function transformHtmlForFaq(html: string): string {
  const faqTitle = 'FAQ | HollyGlobe Singapore';
  const faqDescription = 'Frequently asked questions about HollyGlobe Singapore, our remote consulting model, and our Singapore-to-China AI visibility focus.';
  const faqCanonical = 'https://sghollyglobe.com/faq';

  let updated = html;

  // Title
  updated = updated.replace(/<title>.*?<\/title>/s, `<title>${faqTitle}</title>`);

  // Meta description
  updated = updated.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/s,
    `<meta name="description" content="${faqDescription}" />`
  );

  // Canonical
  updated = updated.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/s,
    `<link rel="canonical" href="${faqCanonical}" />`
  );

  // Open Graph URL
  updated = updated.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:url" content="${faqCanonical}" />`
  );

  // Open Graph Title
  updated = updated.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:title" content="${faqTitle}" />`
  );

  // Open Graph Description
  updated = updated.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:description" content="${faqDescription}" />`
  );

  // Twitter Title
  updated = updated.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:title" content="${faqTitle}" />`
  );

  // Twitter Description
  updated = updated.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:description" content="${faqDescription}" />`
  );

  // FAQPage JSON-LD schema object
  const faqSchema = {
    "@type": "FAQPage",
    "@id": "https://sghollyglobe.com/faq#faqpage",
    "url": "https://sghollyglobe.com/faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does HollyGlobe Singapore do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We help Singapore and regional brands improve AI visibility, GEO readiness, and cross-border discoverability for China-market growth."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with clients remotely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. HollyGlobe Singapore operates as an online-first business and supports clients remotely."
        }
      },
      {
        "@type": "Question",
        "name": "Which markets do you focus on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our core focus is Singapore-to-China visibility, with support for regional and cross-border brands as needed."
        }
      }
    ]
  };

  try {
    const ldJsonRegex = /(<script\s+type="application\/ld\+json">)([\s\S]*?)(<\/script>)/;
    const match = updated.match(ldJsonRegex);
    if (match) {
      const parsed = JSON.parse(match[2]);
      if (parsed && Array.isArray(parsed['@graph'])) {
        const hasFaq = parsed['@graph'].some((item: any) => item && item['@type'] === 'FAQPage');
        if (!hasFaq) {
          parsed['@graph'].push(faqSchema);
        }
        updated = updated.replace(ldJsonRegex, `$1\n${JSON.stringify(parsed, null, 2)}\n$3`);
      }
    }
  } catch (err) {
    console.error('Error injecting FAQ JSON-LD:', err);
  }

  return updated;
}
