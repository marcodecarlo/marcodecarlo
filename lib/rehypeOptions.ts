import { Options } from "rehype-pretty-code";
import { type Node } from "unist";
import { visit } from "unist-util-visit";

interface ElementNode extends Node {
  type: "element";
  tagName: string;
  properties?: {
    id?: string;
    className?: string[];
    [key: string]: unknown;
  };
  children: Node[];
}

interface TextNode extends Node {
  type: "text";
  value: string;
}

interface Heading {
  heading: number;
  text: string;
  slug: string;
}

export function rehypeExtractHeadings(headings: Heading[]) {
  return (tree: Node) => {
    visit(tree, "element", (node: ElementNode) => {
      if (/^h[1-6]$/.test(node.tagName)) {
        const headingLevel = parseInt(node.tagName[1], 10);
        const extractText = (children: Node[]): string =>
          children
            .map((child) => {
              if (child.type === "text") {
                return (child as TextNode).value;
              }
              if (child.type === "element") {
                return extractText((child as ElementNode).children);
              }
              return "";
            })
            .join("");

        const text = extractText(node.children);
        const slug = node.properties?.id;
        if (text && slug) {
          headings.push({ heading: headingLevel, text, slug });
        }
      }
    });
  };
}

export function rehypePrettyCodeClasses() {
  return (tree: Node) => {
    visit(tree, "element", (node: ElementNode) => {
      if (node.properties?.["data-rehype-pretty-code-figure"] !== undefined) {
        node.properties.className = (node.properties.className || []).concat(
          "code-block"
        );
      }
    });
  };
}

export const rehypePrettyCodeOptions: Partial<Options> = {
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitTitle(node) {
    if (node.children[0]?.type === "text") {
      node.properties["data-rehype-pretty-code-title"] = node.children[0].value;
    }
    node.properties.className = ["code-title"];
  },
  onVisitHighlightedLine(node) {
    node.properties.className = ["highlighted-line"];
  },
};
