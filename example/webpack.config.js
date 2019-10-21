const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
	publicPath: "/"
  },
  devServer: {
    contentBase: "./dist",
    https: true,
	historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
        exclude: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, "dist")
		]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
	alias: {
		"styled-components": path.resolve("node_modules", "styled-components"),
		"react": path.resolve("node_modules", "react"),
		"react-dom": path.resolve("node_modules", "react-dom")
	}
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve("public/index.html"),
      favicon: "public/favicon.png"
    })
  ]
};
