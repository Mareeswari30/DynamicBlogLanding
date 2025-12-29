// lib/getPage.ts (server-only)
import { sanitizeContent } from "./sanitizeContent";

export async function getPageBySlug(slug: string) {
  const res = await fetch(
    `https://campusify.io/wp-json/wp/v2/pages?slug=${slug}`,
    {
      next: { revalidate: 3600 }, // ISR
    }
  );

  const data = await res.json();
  if (!data?.length) return null;

  const page = data[0];

  return {
    title: page.title.rendered,
    slug: page.slug,
    content: sanitizeContent(page.content.rendered),
    excerpt: page.excerpt?.rendered,
  };
}
