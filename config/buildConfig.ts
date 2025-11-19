import { Configuration } from "webpack";
import { buildLoaders } from "../config/buildLoaders";
import { buildResolve } from "../config/buildResolve";
import { buildPlugins } from "../config/buildPlugins";
import { buildMode } from "../config/types/configTypes";
import { pathsConfig } from "./constants/configConstants";
import { buildDevServer } from "./buildDevServer";

export function buildConfig(mode: buildMode): Configuration {
  const isDev = mode === buildMode.DEVELOPMENT;
  console.log(mode, isDev);
  return {
    mode,
    entry: pathsConfig.entry,
    output: {
      path: pathsConfig.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolve(),
    plugins: buildPlugins(),
    devServer: isDev ? buildDevServer() : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
  };
}
