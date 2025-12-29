interface Props {
  content: string;
}

export default function BlogContent({ content }: Props) {
  return (
    <article
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
