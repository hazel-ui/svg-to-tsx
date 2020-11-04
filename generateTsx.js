const svgr = require("@svgr/core").default;

const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>
`;

svgr(svgCode, {
  icon: true,
  typescript: true,
  ext: "tsx",
  prettier: true,
  svgo: true,
  srcDir: "svg",
  outDir: "tsx",
  ignoreExisting: true,
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
}).then((jsCode) => {
  console.log(jsCode);
});
