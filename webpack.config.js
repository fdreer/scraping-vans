const path = require("path")
const nodeExternals = require("webpack-node-externals")

module.exports = {
  entry: {
    index: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "build"),
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  externals: [nodeExternals()],
}
