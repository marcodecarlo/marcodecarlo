import { makeSource } from 'contentlayer/source-files';
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import {Post} from './content/index';
import { rehypePrettyCodeClasses, rehypePrettyCodeOptions } from './lib/rehyePrettyCode';
import { Pluggable } from 'unified';

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Post],
    mdx: {
      esbuildOptions(options) {
        options.target = "esnext"
        return options
      },
      rehypePlugins: [
        [rehypeSlug],
        [rehypePrettyCode, rehypePrettyCodeOptions] as unknown as Pluggable,
        [rehypePrettyCodeClasses],   
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap"
          },
        ],
      ],
    },
  })