/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Options } from "rehype-pretty-code"
import { visit } from "unist-util-visit"

export function rehypePrettyCodeClasses() {
  return (tree: any) => {
    visit(
      tree,
      (node: any) =>{
      if(typeof node?.properties?.["data-rehype-pretty-code-figure"] !==
        "undefined"){
        node.properties.className = (node.properties.className || []).concat('code-block');
        }
      }
    ) 

  }
}

export const rehypePrettyCodeOptions: Partial<Options> = {
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
  },
  onVisitTitle(node) {
    node.properties.className = ['code-title']
  },
}