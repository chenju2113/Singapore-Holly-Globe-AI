// Test markdown parsing
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const testFile = path.join(process.cwd(), 'content/blog/2026-08-11-geo-look-demo.md');

console.log('🧪 Testing markdown parsing...\n');

const raw = fs.readFileSync(testFile, 'utf-8');
const { data, content } = matter(raw);

console.log('📋 Frontmatter:');
console.log(JSON.stringify(data, null, 2));

console.log('\n📝 Content preview (first 200 chars):');
console.log(content.substring(0, 200));

console.log('\n🎨 HTML output preview (first 300 chars):');
const html = marked.parse(content) as string;
console.log(html.substring(0, 300));

console.log('\n✅ Parsing successful!');
