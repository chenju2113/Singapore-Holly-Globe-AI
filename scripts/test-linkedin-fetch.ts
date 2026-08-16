// Test script to verify Jina Reader can fetch LinkedIn posts
import fs from 'fs';
import path from 'path';

async function testLinkedInFetch(linkedinUrl: string) {
  console.log(`\n🔍 Testing Jina Reader with: ${linkedinUrl}\n`);

  try {
    const jinaUrl = `https://r.jina.ai/${linkedinUrl}`;
    const response = await fetch(jinaUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; HollyGlobe/1.0)',
      }
    });

    if (!response.ok) {
      console.error(`❌ Jina Reader returned ${response.status}: ${response.statusText}`);
      return;
    }

    const markdown = await response.text();

    console.log(`✅ Successfully fetched content (${markdown.length} chars)\n`);
    console.log('--- First 500 chars ---');
    console.log(markdown.substring(0, 500));
    console.log('\n--- Last 500 chars ---');
    console.log(markdown.substring(Math.max(0, markdown.length - 500)));

    // Save to tmp for inspection
    const tmpPath = path.join(process.cwd(), 'tmp', 'linkedin-test.md');
    fs.mkdirSync(path.dirname(tmpPath), { recursive: true });
    fs.writeFileSync(tmpPath, markdown, 'utf-8');
    console.log(`\n📄 Full content saved to: tmp/linkedin-test.md`);

  } catch (error: any) {
    console.error(`❌ Fetch failed: ${error.message}`);
  }
}

// Get URL from command line or use a test default
const testUrl = process.argv[2] || 'https://www.linkedin.com/posts/activity-7262075771817902080-abc';

testLinkedInFetch(testUrl);
