import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { pathsConfig } from "./constants/configConstants";

export function buildPlugins(isDev: boolean): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: pathsConfig.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      chunkFilename: "css/[name].[contenthash:8].css",
      filename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
}
