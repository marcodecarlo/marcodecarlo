import {
  Aside,
  Filesystem,
  Grid,
  H1,
  H2,
  H3,
  H4,
  H5,
  Anchor,
  Ordered,
  Unordered,
  Horizontal,
  Image,
  Blockquote,
  Deleted,
  Strong,
} from "@/components";

const MDXComponents = {
  Filesystem,
  Grid,
  Aside,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  hr: Horizontal,
  a: Anchor,
  ul: Unordered,
  ol: Ordered,
  strong: Strong,
  Img: Image,
  blockquote: Blockquote,
  del: Deleted,
};

export default MDXComponents;
