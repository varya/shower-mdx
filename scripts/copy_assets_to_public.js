// Source: https://github.com/vercel/next.js/issues/10059#issuecomment-653013076

const fs = require("fs");
const path = require("path");

const output_dir = "../public/";
const assets = [
  /* here you can add any assets which need to be copied from node-modules into public folder before the build */
  "../node_modules/@shower/core/dist/shower.js",
];

assets.forEach((asset_path) => {
  const filename = path.basename(asset_path);
  fs.createReadStream(path.resolve(__dirname, asset_path)).pipe(
    fs.createWriteStream(path.resolve(__dirname, output_dir, filename))
  );
});
