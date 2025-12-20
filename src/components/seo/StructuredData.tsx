"use client";

interface StructuredDataProps {
  data: object | object[];
}

/**
 * Component to inject JSON-LD structured data into pages
 * This helps search engines understand the content better
 */
export default function StructuredData({ data }: StructuredDataProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
