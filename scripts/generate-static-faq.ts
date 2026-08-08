import fs from 'fs';
import path from 'path';
import { transformHtmlForFaq } from '../src/server/seoHtmlTransformer';

function buildStaticFaqHtml() {
  const distDir = path.join(process.cwd(), 'dist');
  const indexHtmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.warn('[STATIC FAQ GENERATOR] dist/index.html not found. Skipping static FAQ generation.');
    return;
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  const faqHtml = transformHtmlForFaq(baseHtml);

  const faqDir = path.join(distDir, 'faq');
  if (!fs.existsSync(faqDir)) {
    fs.mkdirSync(faqDir, { recursive: true });
  }

  fs.writeFileSync(path.join(faqDir, 'index.html'), faqHtml, 'utf-8');
  console.log('[STATIC FAQ GENERATOR] Successfully created dist/faq/index.html with initial FAQ metadata.');
}

buildStaticFaqHtml();
