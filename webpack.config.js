var webpack = require("webpack")
var path = require("path")

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080/",
    "webpack/hot/dev-server",
    "./src/index.tsx"
  ],
  output: {
    filename: "bundle.js",
    publicPath: "/dist/",
    path: path.resolve(__dirname, "dist")
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, use: "awesome-typescript-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, enforce: "pre", use: "source-map-loader" }
    ]
  }
}
