import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],

  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],

  moduleDirectories: ["node_modules", "<rootDir>/src"],

  testMatch: [
    "**/__tests__/**/*.?([mc])[jt]s?(x)",
    "**/?(*.)+(spec|test).?([mc])[jt]s?(x)",
  ],

  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "mts",
    "cts",
    "tsx",
    "json",
    "node",
  ],

  preset: "ts-jest/presets/default-esm",

  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",

    // 👇 важно для CSS
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },

  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

export default config;
