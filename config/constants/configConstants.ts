import path from "path";

import { IconfigPath } from "../types/configTypes";

const rootDir = path.resolve(__dirname, "..", "..");

const pathsConfig: IconfigPath = {
  entry: path.resolve(rootDir, "src", "index.tsx"),
  output: path.resolve(rootDir, "build"),
  html: path.resolve(rootDir, "public", "index.html"),
};

export { pathsConfig };
