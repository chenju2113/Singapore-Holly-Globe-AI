import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  linkedinUrl: string;
  excerpt: string;
  tags: string[];
  content: string;
  htmlContent: string;
}

function getAllBlogPosts(): BlogPost[] {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    return [];
  }

  const blogDir = path.join(process.cwd(), 'content/blog');

  // Create directory if it doesn't exist
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

  const posts = files.map(filename => {
    const filePath = path.join(blogDir, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);

    // Extract slug from filename (remove date prefix and .md)
    const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');

    // Parse markdown to HTML
    const htmlContent = marked.parse(content) as string;

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date,
      linkedinUrl: data.linkedinUrl || '',
      excerpt: data.excerpt || content.substring(0, 150) + '...',
      tags: Array.isArray(data.tags) ? data.tags : [],
      content,
      htmlContent
    };
  });

  // Sort by date descending
  posts.sort((a, b) => b.date.localeCompare(a.date));

  return posts;
}

export const BLOG_POSTS = getAllBlogPosts();
