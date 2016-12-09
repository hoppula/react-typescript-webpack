var webpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("./webpack.config.js");

var server = new webpackDevServer(webpack(config), {
  hot: true,
  publicPath: "http://localhost:8080/dist/"
});

console.log("webpack-dev-server listening at localhost:8080");
server.listen(8080);