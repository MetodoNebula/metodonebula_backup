import katex from "katex";
import { type ReactNode } from "react";
import "katex/dist/katex.min.css";

/**
 * Minimal Markdown renderer tuned for blog prose. It returns
 * styled React elements and supports the common
 * constructs used when writing posts: headings, paragraphs, bold/italic,
 * inline code, links, images, ordered/unordered lists, blockquotes, code
 * fences and horizontal rules.
 */

const INLINE_PATTERN =
  /(\\\([\s\S]+?\\\))|(\$[^$\n]+\$)|(!\[[^\]]*\]\([^)]+\))|(\[[^\]]+\]\([^)]+\))|(`[^`]+`)|(\*\*[^*]+\*\*)|(__[^_]+__)|(\*[^*]+\*)|(_[^_]+_)/g;

function renderKatex(tex: string, displayMode = false): string {
  return katex.renderToString(tex, {
    displayMode,
    throwOnError: false,
    strict: false,
    trust: false,
  });
}

function MathMarkup({ tex, displayMode = false }: { tex: string; displayMode?: boolean }) {
  const html = renderKatex(tex, displayMode);
  if (displayMode) {
    return (
      <div
        className="my-7 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      className="mx-0.5 whitespace-nowrap align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function isLatexGraph(src: string): boolean {
  return src.startsWith("/assets/latex/") && src.endsWith(".svg");
}

function MarkdownImage({ src, alt }: { src: string; alt: string }) {
  if (isLatexGraph(src)) {
    return (
      <figure
        data-graph="latex"
        className="mx-auto my-8 max-w-2xl rounded-2xl border border-white/10 bg-white p-4 shadow-[0_10px_40px_-10px_oklch(0.62_0.22_265/0.35)]"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="mx-auto max-h-[420px] w-full object-contain"
        />
        {alt && (
          <figcaption className="mt-3 text-center text-xs leading-relaxed text-slate-700">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="my-6 w-full rounded-2xl border border-white/10"
    />
  );
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let i = 0;
  let match: RegExpExecArray | null;

  while ((match = INLINE_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];

    if (token.startsWith("\\(")) {
      nodes.push(<MathMarkup key={i} tex={token.slice(2, -2)} />);
    } else if (token.startsWith("$")) {
      nodes.push(<MathMarkup key={i} tex={token.slice(1, -1)} />);
    } else if (token.startsWith("![")) {
      const parts = /!\[([^\]]*)\]\(([^)]+)\)/.exec(token)!;
      nodes.push(<MarkdownImage key={i} src={parts[2]} alt={parts[1]} />);
    } else if (token.startsWith("[")) {
      const parts = /\[([^\]]+)\]\(([^)]+)\)/.exec(token)!;
      const href = parts[2];
      const external = /^https?:\/\//.test(href);
      nodes.push(
        <a
          key={i}
          href={href}
          className="font-medium text-electric underline underline-offset-4 transition-colors hover:text-gold"
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {parts[1]}
        </a>,
      );
    } else if (token.startsWith("`")) {
      nodes.push(
        <code
          key={i}
          className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-electric"
        >
          {token.slice(1, -1)}
        </code>,
      );
    } else if (token.startsWith("**") || token.startsWith("__")) {
      nodes.push(
        <strong key={i} className="font-semibold text-foreground">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      nodes.push(<em key={i}>{token.slice(1, -1)}</em>);
    }

    lastIndex = INLINE_PATTERN.lastIndex;
    i++;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

const isBlank = (line: string) => line.trim() === "";
const isHeading = (line: string) => /^#{1,6}\s+/.test(line);
const isFence = (line: string) => line.trim().startsWith("```");
const isQuote = (line: string) => line.trim().startsWith(">");
const isUl = (line: string) => /^\s*[-*]\s+/.test(line);
const isOl = (line: string) => /^\s*\d+\.\s+/.test(line);
const isRule = (line: string) => /^(-{3,}|\*{3,}|_{3,})$/.test(line.trim());

function parseBlocks(md: string): ReactNode[] {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (isBlank(line)) {
      i++;
      continue;
    }

    if (line.trim().startsWith("$$") || line.trim().startsWith("\\[")) {
      const opener = line.trim().startsWith("$$") ? "$$" : "\\[";
      const closer = opener === "$$" ? "$$" : "\\]";
      const math: string[] = [];
      let current = line.trim().slice(opener.length);
      if (current.endsWith(closer) && current.length > closer.length) {
        math.push(current.slice(0, -closer.length));
        i++;
      } else {
        if (current) math.push(current);
        i++;
        while (i < lines.length) {
          current = lines[i].trim();
          if (current.endsWith(closer)) {
            math.push(current.slice(0, -closer.length));
            i++;
            break;
          }
          math.push(lines[i]);
          i++;
        }
      }
      out.push(<MathMarkup key={key++} tex={math.join("\n").trim()} displayMode />);
      continue;
    }

    const image = /^!\[([^\]]*)\]\(([^)]+)\)\s*$/.exec(line.trim());
    if (image) {
      out.push(<MarkdownImage key={key++} src={image[2]} alt={image[1]} />);
      i++;
      continue;
    }

    if (isFence(line)) {
      const code: string[] = [];
      i++;
      while (i < lines.length && !isFence(lines[i])) {
        code.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      out.push(
        <pre
          key={key++}
          className="my-6 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-5 text-sm"
        >
          <code className="font-mono text-foreground/90">{code.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const content = renderInline(heading[2].trim());
      if (level <= 2) {
        out.push(
          <h2 key={key++} className="mt-12 mb-4 font-display text-2xl font-semibold md:text-3xl">
            {content}
          </h2>,
        );
      } else if (level === 3) {
        out.push(
          <h3 key={key++} className="mt-10 mb-3 font-display text-xl font-semibold">
            {content}
          </h3>,
        );
      } else {
        out.push(
          <h4 key={key++} className="mt-8 mb-2 font-display text-lg font-semibold">
            {content}
          </h4>,
        );
      }
      i++;
      continue;
    }

    if (isRule(line)) {
      out.push(<hr key={key++} className="my-10 border-white/10" />);
      i++;
      continue;
    }

    if (isQuote(line)) {
      const quote: string[] = [];
      while (i < lines.length && isQuote(lines[i])) {
        quote.push(lines[i].replace(/^\s*>\s?/, ""));
        i++;
      }
      out.push(
        <blockquote
          key={key++}
          className="my-6 border-l-2 border-gold/60 bg-white/[0.02] py-2 pr-4 pl-5 text-foreground/80 italic"
        >
          {renderInline(quote.join(" "))}
        </blockquote>,
      );
      continue;
    }

    if (isUl(line)) {
      const items: string[] = [];
      while (i < lines.length && isUl(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ""));
        i++;
      }
      out.push(
        <ul key={key++} className="my-5 space-y-2 pl-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-foreground/85">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (isOl(line)) {
      const items: string[] = [];
      while (i < lines.length && isOl(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ""));
        i++;
      }
      out.push(
        <ol key={key++} className="my-5 space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-foreground/85">
              <span className="font-display text-sm font-semibold text-gold">{idx + 1}.</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    // Paragraph: gather consecutive lines until a blank line or a new block.
    const para: string[] = [];
    while (
      i < lines.length &&
      !isBlank(lines[i]) &&
      !isHeading(lines[i]) &&
      !isFence(lines[i]) &&
      !isQuote(lines[i]) &&
      !isUl(lines[i]) &&
      !isOl(lines[i]) &&
      !isRule(lines[i])
    ) {
      para.push(lines[i]);
      i++;
    }
    out.push(
      <p key={key++} className="my-5 leading-relaxed text-foreground/85">
        {renderInline(para.join(" "))}
      </p>,
    );
  }

  return out;
}

export function MarkdownContent({ markdown }: { markdown: string }) {
  return <>{parseBlocks(markdown)}</>;
}
