import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/fetchPostBySlug";
import { sanitizeContent } from "@/lib/sanitizeContent";

export const revalidate = 3600;

/* ---------- STATIC PARAMS ---------- */
export async function generateStaticParams() {
  const [pagesRes, postsRes] = await Promise.all([
    fetch("https://campusify.io/wp-json/wp/v2/pages?per_page=10"),
    fetch("https://campusify.io/wp-json/wp/v2/posts?per_page=10"),
  ]);

  const pages = await pagesRes.json();
  const posts = await postsRes.json();

  return [...pages, ...posts].map((item: any) => ({
    slug: item.slug,
  }));
}

/* ---------- SEO METADATA ---------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = await getPageBySlug(slug);

  if (!page) {
    return { title: "Page Not Found" };
  }

  return {
    title: page.seo?.title ?? page.title,
    description: page.seo?.description ?? "",
    alternates: {
      canonical: `https://your-domain.com/${slug}`,
    },
    openGraph: {
      title: page.seo?.title ?? page.title,
      description: page.seo?.description ?? "",
      url: `https://your-domain.com/${slug}`,
      type: "article",
    },
  };
}

/* ---------- PAGE RENDER ---------- */
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = await getPageBySlug(slug);

  if (!page) return notFound();

  const cleanHTML = sanitizeContent(page.content ?? "");

  return (
    <article
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "24px",
        lineHeight: 1.7,
      }}
    >
      {/* Inline typography (safe for assessment) */}
      <style>{`
        h1 { font-size: 36px; margin-bottom: 16px; }
        h2 { margin-top: 32px; }
        p { margin: 12px 0; }
        ul { padding-left: 20px; }
        img { max-width: 100%; height: auto; }
        a { color: #2563eb; text-decoration: underline; }
      `}</style>

      <h1>{page.title}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: cleanHTML,
        }}
      />
    </article>
  );
}
