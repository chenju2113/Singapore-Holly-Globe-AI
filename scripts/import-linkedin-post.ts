#!/usr/bin/env node
/**
 * Import LinkedIn post to markdown blog post
 * Usage: npx tsx scripts/import-linkedin-post.ts <linkedin-url> [output-filename]
 */

import fs from 'fs';
import path from 'path';

interface PostData {
  title: string;
  content: string;
  excerpt: string;
  linkedinUrl: string;
  tags: string[];
}

function extractPostContent(markdown: string): PostData | null {
  // Extract the main post text (after "followers" and before social buttons or transcript)
  const postTextMatch = markdown.match(/\d+\s+followers?\s+.*?\n\n([\s\S]*?)(?:\n\n.*?\[Like\]|\n\n.*?Transcript|$)/);
  let postText = postTextMatch ? postTextMatch[1].trim() : '';

  // Remove unwanted elements from post text
  postText = postText
    .replace(/\*\s+\[Report this post\][\s\S]*?\n\n/g, '')  // Remove report link
    .trim();

  // Extract transcript if available
  const transcriptMatch = markdown.match(/##### \*\*Transcript\*\*\s+([\s\S]*?)(?:\n\nTo view or add a comment|$)/);
  const transcript = transcriptMatch ? transcriptMatch[1].trim() : '';

  // Use transcript as main content if post text is too short
  let content = '';
  if (postText.length > 50) {
    content = postText;
    if (transcript && transcript.length > 200) {
      content += '\n\n## Video Transcript\n\n' + transcript;
    }
  } else if (transcript) {
    // Post text is too short, use transcript as main content
    content = transcript;
  }

  // Clean up content
  content = content
    .replace(/\[#(\w+)\]\([^\)]+\)/g, '#$1')  // Convert hashtag links to plain hashtags
    .replace(/\s+…more\s*$/gm, '')             // Remove "...more" buttons
    .replace(/\n{3,}/g, '\n\n')                // Normalize line breaks
    .trim();

  if (!content || content.length < 50) {
    return null;
  }

  // Extract title from first meaningful sentence
  let title = '';
  const lines = postText.split('\n').filter(l => l.trim().length > 0);
  for (const line of lines) {
    const cleaned = line.replace(/[#\[\]\*]/g, '').trim();
    if (cleaned.length > 20 && !cleaned.startsWith('http')) {
      title = cleaned.substring(0, 80);
      break;
    }
  }

  // Fallback to markdown title or generic
  if (!title) {
    const titleMatch = markdown.match(/^Title: (.+)$/m);
    title = titleMatch
      ? titleMatch[1].replace(/[#\|\[\]]/g, '').trim().substring(0, 80)
      : 'LinkedIn Post';
  }

  // Extract hashtags as tags
  const hashtags = Array.from(postText.matchAll(/#(\w+)/g), m => m[1]);
  const uniqueTags = Array.from(new Set(hashtags));

  // Generate excerpt (first 150 chars of main content)
  const excerptSource = postText.length > 50 ? postText : content;
  const excerpt = excerptSource
    .replace(/#\w+/g, '')
    .replace(/\n/g, ' ')
    .substring(0, 150)
    .trim() + '...';

  return {
    title,
    content,
    excerpt,
    linkedinUrl: '',
    tags: uniqueTags.slice(0, 6)
  };
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 60);
}

function generateFrontmatter(data: PostData, linkedinUrl: string): string {
  const today = new Date().toISOString().split('T')[0];
  const tagsYaml = data.tags.length > 0
    ? `[${data.tags.map(t => `"${t}"`).join(', ')}]`
    : '[]';

  return `---
title: "${data.title.replace(/"/g, '\\"')}"
date: ${today}
linkedinUrl: ${linkedinUrl}
excerpt: "${data.excerpt.replace(/"/g, '\\"')}"
tags: ${tagsYaml}
---

`;
}

async function importLinkedInPost(linkedinUrl: string, outputFilename?: string) {
  console.log(`\n📥 Importing LinkedIn post: ${linkedinUrl}\n`);

  try {
    // Fetch via Jina Reader
    const jinaUrl = `https://r.jina.ai/${linkedinUrl}`;
    const response = await fetch(jinaUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; HollyGlobe/1.0)',
      }
    });

    if (!response.ok) {
      console.error(`❌ Jina Reader returned ${response.status}: ${response.statusText}`);
      process.exit(1);
    }

    const markdown = await response.text();

    // Extract content
    const postData = extractPostContent(markdown);
    if (!postData) {
      console.error('❌ Could not extract meaningful content from LinkedIn post');
      console.log('\nRaw markdown saved to tmp/linkedin-raw.md for debugging');
      fs.mkdirSync('tmp', { recursive: true });
      fs.writeFileSync('tmp/linkedin-raw.md', markdown, 'utf-8');
      process.exit(1);
    }

    postData.linkedinUrl = linkedinUrl;

    // Generate filename
    const today = new Date().toISOString().split('T')[0];
    const slug = outputFilename || generateSlug(postData.title);
    const filename = `${today}-${slug}.md`;
    const contentDir = path.join(process.cwd(), 'content', 'blog');
    const outputPath = path.join(contentDir, filename);

    // Create content directory if not exists
    fs.mkdirSync(contentDir, { recursive: true });

    // Generate markdown file
    const frontmatter = generateFrontmatter(postData, linkedinUrl);
    const fullContent = frontmatter + postData.content;

    fs.writeFileSync(outputPath, fullContent, 'utf-8');

    console.log('✅ Successfully imported LinkedIn post\n');
    console.log(`📄 File: ${path.relative(process.cwd(), outputPath)}`);
    console.log(`📝 Title: ${postData.title}`);
    console.log(`🏷️  Tags: ${postData.tags.join(', ')}`);
    console.log(`📊 Content length: ${postData.content.length} chars\n`);
    console.log('⚠️  Please review and edit the file before publishing.');

  } catch (error: any) {
    console.error(`❌ Import failed: ${error.message}`);
    process.exit(1);
  }
}

// CLI
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: npx tsx scripts/import-linkedin-post.ts <linkedin-url> [output-filename]');
  console.log('Example: npx tsx scripts/import-linkedin-post.ts https://lnkd.in/gBmzU-S9 geo-visibility-guide');
  process.exit(1);
}

const linkedinUrl = args[0];
const outputFilename = args[1];

importLinkedInPost(linkedinUrl, outputFilename);
