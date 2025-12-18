"use client";

import { useEffect, useRef } from "react";

interface LegalContentProps {
  content: string;
}

export default function LegalContent({ content }: LegalContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Parse markdown-like content and convert to proper HTML with IDs for anchors
  const parseContent = (text: string): string => {
    let html = text;

    // Helper function to create slug from text
    const createSlug = (text: string): string => {
      return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
    };

    // Convert headers with IDs for anchor links
    html = html.replace(/^# (.*)$/gim, (match, title) => {
      const slug = createSlug(title);
      return `<h1 id="${slug}" class="legal-h1 scroll-mt-24">${title}</h1>`;
    });
    html = html.replace(/^## (.*)$/gim, (match, title) => {
      const slug = createSlug(title);
      return `<h2 id="${slug}" class="legal-h2 scroll-mt-24">${title}</h2>`;
    });
    html = html.replace(/^### (.*)$/gim, (match, title) => {
      const slug = createSlug(title);
      return `<h3 id="${slug}" class="legal-h3 scroll-mt-24">${title}</h3>`;
    });

    // Convert bold text
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="legal-bold">$1</strong>');

    // Convert markdown links [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="legal-link">$1</a>');

    // Convert paragraphs (text between double line breaks)
    const paragraphs = html.split(/\n\n+/);
    html = paragraphs
      .map((para) => {
        if (
          para.trim().startsWith("<h") ||
          para.trim().startsWith("<ul") ||
          para.trim().startsWith("<li")
        ) {
          return para;
        }
        if (para.trim().startsWith("- ")) {
          // Handle list items
          const items = para.split(/\n(?=- )/).map((item) => item.replace(/^- /, ""));
          return `<ul class="legal-list">${items.map((item) => `<li class="legal-list-item">${item.trim()}</li>`).join("")}</ul>`;
        }
        if (para.trim()) {
          return `<p class="legal-paragraph">${para.trim()}</p>`;
        }
        return "";
      })
      .join("");

    // Convert single line breaks to <br />
    html = html.replace(/\n(?!<)/g, "<br />");

    return html;
  };

  // Extract headings for table of contents
  const extractHeadings = (text: string): Array<{ level: number; title: string; slug: string }> => {
    const headings: Array<{ level: number; title: string; slug: string }> = [];
    const lines = text.split("\n");

    const createSlug = (text: string): string => {
      return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
    };

    lines.forEach((line) => {
      const h1Match = line.match(/^# (.*)$/);
      const h2Match = line.match(/^## (.*)$/);
      const h3Match = line.match(/^### (.*)$/);

      if (h1Match) {
        headings.push({ level: 1, title: h1Match[1], slug: createSlug(h1Match[1]) });
      } else if (h2Match) {
        headings.push({ level: 2, title: h2Match[1], slug: createSlug(h2Match[1]) });
      } else if (h3Match) {
        headings.push({ level: 3, title: h3Match[1], slug: createSlug(h3Match[1]) });
      }
    });

    return headings;
  };

  const headings = extractHeadings(content);

  return (
    <div className="legal-content-wrapper">
      {headings.length > 0 && (
        <aside className="legal-toc">
          <div className="legal-toc-sticky">
            <h3 className="legal-toc-title">Table of Contents</h3>
            <nav className="legal-toc-nav">
              <ul className="legal-toc-list">
                {headings.map((heading, index) => (
                  <li key={index} className={`legal-toc-item legal-toc-item-${heading.level}`}>
                    <a
                      href={`#${heading.slug}`}
                      className="legal-toc-link"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(heading.slug);
                        if (element) {
                          const offset = 100;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;

                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      {heading.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      )}
      <div
        ref={contentRef}
        className="legal-content"
        dangerouslySetInnerHTML={{ __html: parseContent(content) }}
      />
    </div>
  );
}
