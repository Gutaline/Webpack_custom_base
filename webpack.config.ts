import { Configuration } from "webpack";
import { buildConfig } from "./config/buildConfig";
import { buildMode, IWebpackEnv } from "./config/types/configTypes";
// grwg
export default (env: IWebpackEnv) => {
  const mode = env.mode || buildMode.DEVELOPMENT;
  const config: Configuration = buildConfig(mode);

  return config;
};
