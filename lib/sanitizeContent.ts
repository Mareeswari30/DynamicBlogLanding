export function sanitizeContent(html?: string): string {
  if (!html || typeof html !== "string") {
    return "";
  }

  let cleaned = html
    // Remove <style> tags
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")

    // Remove inline styles
    .replace(/ style="[^"]*"/gi, "")

    // Remove CSS classes
    .replace(/ class="[^"]*"/gi, "")

    // Remove internal H1s (SEO best practice)
    .replace(/<h1[^>]*>.*?<\/h1>/gi, "")

    // Add lazy loading to images
    .replace(/<img/g, '<img loading="lazy"');

  return cleaned;
}
