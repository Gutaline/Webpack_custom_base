import { Configuration } from "webpack";
import { buildConfig } from "./configWebpack/buildConfig";
import { buildMode, IWebpackEnv } from "./configWebpack/types/configTypes";

export default (env: IWebpackEnv) => {
  const mode = env.mode || buildMode.DEVELOPMENT;
  const config: Configuration = buildConfig(mode);

  return config;
};
