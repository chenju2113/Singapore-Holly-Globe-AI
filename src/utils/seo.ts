import { useEffect } from 'react';

export interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
}

export function useSeoMetadata({ title, description, canonical, ogType = 'website' }: SeoProps) {
  useEffect(() => {
    // Document Title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (selector: string, attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Helper to set or create link tag
    const setLinkTag = (rel: string, hrefVal: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', hrefVal);
    };

    // Description & Canonical
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setLinkTag('canonical', canonical);

    // OpenGraph
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonical);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'HollyGlobe Singapore');

    // Twitter
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);

  }, [title, description, canonical, ogType]);
}
