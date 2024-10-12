const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@scss": "src/scss",
    "@pages": "src/pages",
    "@constants": "src/constants",
    "@assets": "src/assets",
    "@hooks": "src/hooks",
    "@utils": "src/utils",
    "@type": "src/type",
    "@api": "src/api",
    "@routes": "src/routes",
  })(config);

  return config;
};
