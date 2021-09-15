// jest.config.ts
import type { Config } from "@jest/types"
import { pathsToModuleNameMapper } from "ts-jest/utils"
import tsconfig from "./tsconfig.json"

const config: Config.InitialOptions = {
  preset: "ts-jest",
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
}
export default config
