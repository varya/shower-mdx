const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const getPath = () =>
  process.env.REPO_NAME ? `/${process.env.REPO_NAME}` : ``;

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  assetPrefix: getPath() + "/",
  basePath: getPath(),
});
