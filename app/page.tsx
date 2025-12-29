export const revalidate = 3600;

export default async function Home() {
  const res = await fetch(
    "https://campusify.io/wp-json/wp/v2/pages?per_page=10"
  );
  const pages = await res.json();

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <h1>Campusify Blog Pages</h1>

      <ul>
        {pages.map((page: any) => (
          <li key={page.id} style={{ margin: "12px 0" }}>
            <a href={`/${page.slug}`}>{page.title.rendered}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

