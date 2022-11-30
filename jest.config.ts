// JEST
import { compilerOptions } from "./tsconfig.json";
import { pathsToModuleNameMapper, JestConfigWithTsJest } from "ts-jest";

// UTILS
import * as path from "path";

// JEST configuration, for more information, please refer to [the official documentation](https://jestjs.io/docs/getting-started)
const jestConfig: JestConfigWithTsJest = {
    rootDir: __dirname,
    preset: "ts-jest",
    roots: [path.resolve("tests/api")],
    resetMocks: true,
    resetModules: true,
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths), // Will retrieve tsconfig.json's aliases and resolve it while running tests.
    //setupFiles: [path.resolve("tests/setup.ts")], // This file allows to run specific script before running each test file.
};

export default jestConfig;
