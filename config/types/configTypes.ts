export enum buildMode {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

export interface IconfigPath {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export interface IWebpackEnv {
  mode: buildMode;
}
