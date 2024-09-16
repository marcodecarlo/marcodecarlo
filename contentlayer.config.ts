import { makeSource } from 'contentlayer/source-files';
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import {Post} from './content/index';
import { HEADING_LINK_ANCHOR } from './lib';

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Post],
    mdx: {
      esbuildOptions(options) {
        options.target = "esnext"
        return options
      },
      rehypePlugins: [
        [rehypeSlug, rehypePrettyCode],    
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: {
              className: [HEADING_LINK_ANCHOR],
            },
          },
        ],
      ],
    },
  })