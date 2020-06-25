const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
              "btn-height-base": "35px",
              "input-height-base": "35px",
              "border-radius-base": "6px",
              "font-size-base": "14px",
              "item-hover-bg": "#37b5a3",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
