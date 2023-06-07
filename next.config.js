const path = require("path");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/websiteWithNextJs/" : "",
  images: {
    disableStaticImages: true,
  },
  devIndicators: {
    buildActivity: false
  },

  webpack: (config) => {
    config.resolve.alias["a"] = path.resolve(__dirname);
    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve("url-loader"),
      options: {
        limit: 25000,
        name: "static/media/[name].[hash:8].[ext]",
      },
    });
    return config;
  },

};
