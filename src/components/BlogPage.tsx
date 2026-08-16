import { useState, useEffect } from 'react';
import { BlogPost } from '../data/blogData';
import '../styles/BlogPage.css';

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load blog posts:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Insights</h1>
        <p className="blog-subtitle">
          Perspectives on GEO, AI search visibility, and content strategy
        </p>
      </div>

      <div className="blog-posts">
        {loading ? (
          <p className="no-posts">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="no-posts">No posts yet. Check back soon.</p>
        ) : (
          posts.map(post => (
            <article key={post.slug} className="blog-card">
              <div className="blog-card-header">
                <time className="blog-date">{post.date}</time>
                {post.tags.length > 0 && (
                  <div className="blog-tags">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="blog-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>

              <div className="blog-card-footer">
                <a
                  href={post.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link"
                >
                  Read on LinkedIn →
                </a>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
