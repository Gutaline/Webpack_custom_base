import { ResolveOptions } from "webpack";
import { pathsConfig } from "./constants/configConstants";

export function buildResolve(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [pathsConfig.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
