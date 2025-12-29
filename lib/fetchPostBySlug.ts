export async function getPageBySlug(slug: string) {
  const endpoints = [
    `https://campusify.io/wp-json/wp/v2/pages?slug=${slug}`,
    `https://campusify.io/wp-json/wp/v2/posts?slug=${slug}`,
  ];

  for (const url of endpoints) {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data?.length) {
      const page = data[0];

      return {
        title: page.title?.rendered ?? "Campusify",
        slug: page.slug,
        content: page.content?.rendered ?? "",
        seo: {
          title:
            page.yoast_head_json?.title ??
            page.title?.rendered ??
            "Campusify",
          description:
            page.yoast_head_json?.description ??
            page.excerpt?.rendered?.replace(/<[^>]+>/g, "") ??
            "",
        },
      };
    }
  }

  return null;
}
