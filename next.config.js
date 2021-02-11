const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  publicRuntimeConfig: {
    basePath: "https://www.varya.me",
  },
});
