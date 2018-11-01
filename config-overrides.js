const {
  addBabelPlugin,
  override,
  addBundleVisualizer
} = require("customize-cra");
const rewireLess = require("react-app-rewire-less");

const addReWireLess = () => config => {
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#ff9900" },
    javascriptEnabled: true
  })(config, config.mode);
  return config;
};

module.exports = override(
  addBabelPlugin([
    "import",
    { libraryName: "antd", libraryDirectory: "es", style: true }
  ]),
  addBabelPlugin("styled-components"),
  addBundleVisualizer({
    openAnalyzer: false
  }),
  addReWireLess()
);
