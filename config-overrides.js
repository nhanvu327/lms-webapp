const { addBabelPlugin, override } = require("customize-cra");

module.exports = override(
  addBabelPlugin([
    "import",
    { libraryName: "antd", libraryDirectory: "es", style: "css" }
  ]),
  addBabelPlugin("babel-plugin-styled-components")
);
