import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { stringifyJsonLd } from "../../lib/storeIdentity";
import { ARTICLE_BODY } from "./body";
import styles from "./page.module.css";

const CANONICAL = "https://www.firstnationsmokez.com/resources/pre-rolls-explained-toronto";
const DESCRIPTION =
  "If you're shopping pre-rolls Toronto-side and want to know what you're actually holding, this is the plain version.";
const PUBLISHED = "2026-10-27";
const PUBLISHER = "First Nation Smoke Cannabis Dispensary Toronto";

type HeadingBlock = { type: "h1" | "h2"; text: string };
type ParagraphBlock = { type: "p"; text: string };
type ListBlock = { type: "ul" | "ol"; items: string[] };
type TableBlock = { type: "table"; headers: string[]; rows: string[][] };
type Block = HeadingBlock | ParagraphBlock | ListBlock | TableBlock;

function tableCells(row: string): string[] {
  return row.replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function isTableRule(row: string): boolean {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(row);
}

function parseArticle(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let index = 0;

  while (index < lines.length) {
    const trimmed = lines[index].trim();
    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("|")) {
      const rows: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        const row = lines[index].trim();
        if (!isTableRule(row)) rows.push(row);
        index += 1;
      }
      const parsed = rows.map(tableCells);
      if (parsed.length > 0) {
        blocks.push({ type: "table", headers: parsed[0], rows: parsed.slice(1) });
      }
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    const heading = /^(#{1,2})\s+(.+)$/.exec(trimmed);
    if (heading) {
      blocks.push({ type: heading[1].length === 1 ? "h1" : "h2", text: heading[2] });
      index += 1;
      continue;
    }

    blocks.push({ type: "p", text: trimmed });
    index += 1;
  }

  return blocks;
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
    .filter((part) => part.length > 0)
    .map((part, index) => {
      const key = `${keyPrefix}-${index}`;
      const strong = /^\*\*([^*]+)\*\*$/.exec(part);
      if (strong) return <strong key={key}>{strong[1]}</strong>;
      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
      if (link) {
        if (link[2] === "/visit") {
          return (
            <Link key={key} href="/visit">
              {link[1]}
            </Link>
          );
        }
        return <Fragment key={key}>{link[1]}</Fragment>;
      }
      return <Fragment key={key}>{part}</Fragment>;
    });
}

const BLOCKS = parseArticle(ARTICLE_BODY);
const titleBlock = BLOCKS.find((block): block is HeadingBlock => block.type === "h1");
if (!titleBlock) {
  throw new Error("Pre-rolls article is missing its heading");
}

const TITLE = titleBlock.text;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL,
  },
  url: CANONICAL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Organization",
    name: PUBLISHER,
  },
  publisher: {
    "@type": "Organization",
    name: PUBLISHER,
  },
};

function ArticleBlock({ block, index }: { block: Block; index: number }) {
  if (block.type === "h1") {
    return <h1>{block.text}</h1>;
  }
  if (block.type === "h2") {
    return <h2>{block.text}</h2>;
  }
  if (block.type === "p") {
    return (
      <p className={block.text.startsWith("Last checked:") ? styles.checked : undefined}>
        {renderInline(block.text, `p-${index}`)}
      </p>
    );
  }
  if (block.type === "ul" || block.type === "ol") {
    const ListTag = block.type;
    return (
      <ListTag>
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex}>{renderInline(item, `${block.type}-${index}-${itemIndex}`)}</li>
        ))}
      </ListTag>
    );
  }
  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>
            {block.headers.map((cell, cellIndex) => (
              <th key={cellIndex} scope="col">
                {renderInline(cell, `th-${index}-${cellIndex}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{renderInline(cell, `td-${index}-${rowIndex}-${cellIndex}`)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PreRollsExplainedTorontoPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(articleJsonLd) }} />
      <Navbar />
      <article className={styles.article}>
        {BLOCKS.map((block, index) => (
          <ArticleBlock key={index} block={block} index={index} />
        ))}
      </article>
      <Footer />
    </main>
  );
}
