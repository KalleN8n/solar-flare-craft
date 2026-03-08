import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

const BASE_URL = "https://www.datametrix.ch";
const DEFAULT_OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3c626516-b571-4265-a3c4-50d9a718d1ca/id-preview-8adf4d7b--80db5339-f245-44b0-9bc5-bf4f8631f70b.lovable.app-1772967802330.png";

const SEOHead = ({ title, description, canonical, ogImage, jsonLd }: SEOHeadProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta tags
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:image", ogImage || DEFAULT_OG_IMAGE, "property");
    setMeta("og:url", canonical ? `${BASE_URL}${canonical}` : BASE_URL, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage || DEFAULT_OG_IMAGE);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical ? `${BASE_URL}${canonical}` : BASE_URL);

    // JSON-LD
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach((s) => s.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      const scripts = document.querySelectorAll('script[data-seo-jsonld]');
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, canonical, ogImage, jsonLd]);

  return null;
};

export default SEOHead;
