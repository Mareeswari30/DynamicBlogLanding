Dynamic Blog Landing Page

A production-ready, SEO-friendly, and performance-optimized blog landing page built with Next.js. This project dynamically fetches blog content from a WordPress API, sanitizes it, and renders responsive pages with clean, semantic HTML.

🚀 Features

Dynamic Content Fetching: Retrieves blog pages from https://campusify.io/wp-json/wp/v2/pages

Content Sanitization: Removes inline styles, <style> tags, and unnecessary CSS classes while preserving headings, paragraphs, lists, images, and links.

SEO-Optimized: Dynamic <title>, meta description, canonical URL, and Open Graph tags per blog.

Dynamic Routing: SEO-friendly URLs generated from page slugs, e.g.,
/data-driven-decisions-made-easy-with-campusify

Responsive Design: Fully responsive across mobile, tablet, laptop, and large screens.

Performance Optimized:

Lazy-loaded images

Minimized JavaScript blocking

Efficient API calls

SSR / SSG enabled for fast load times (< 3s on mobile)

🧹 Content Cleaning Logic

The WordPress API returns raw HTML with inline styles, <style> tags, and junk classes.
This project implements:

Style Removal: All <style> tags are stripped.

Inline Style Removal: style attributes removed from all elements.

Class Filtering: Unnecessary CSS classes are removed.

HTML Preservation: Meaningful tags (h1–h6, p, ul/ol, li, a, img) are retained.

Sanitization is performed using DOMPurify to prevent XSS attacks and maintain clean, semantic HTML.

🌐 SEO Implementation

Dynamic <title> and <meta name="description"> based on blog content.

Canonical URLs for each blog page.

Open Graph tags for social sharing: og:title, og:description, og:url.

Proper heading hierarchy for accessibility and SEO.

⚡ Performance Optimizations

Lazy Loading: All images are lazy-loaded for faster page rendering.

Optimized Assets: CSS and JS are minified and bundled efficiently.

SSR / SSG: Pages are pre-rendered for speed and SEO.

Page Load: Achieves < 3s on mobile devices.

🛠 Tech Stack

Frontend: Next.js, React.js, Tailwind CSS

Data Handling: Next.js API routes / Node.js

Sanitization: DOMPurify

Performance Auditing: Lighthouse

📁 Folder Structure
/components      # Reusable UI components
/pages           # Dynamic blog pages
/lib             # API handling & content cleaning utilities
/public          # Static assets
/styles          # Global & component-level styles

🚀 Getting Started

Clone the repo:

git clone <repo-url>
cd project


Install dependencies:

npm install


Run the development server:

npm run dev


Build for production:

npm run build
npm start
