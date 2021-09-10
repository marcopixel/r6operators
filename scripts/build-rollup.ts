/* eslint-disable unicorn/no-process-exit */
import { promises as fs } from "fs"
import { rollup } from "rollup"

import ts from "rollup-plugin-ts"
import analyze from "rollup-plugin-analyzer"
import { terser } from "rollup-plugin-terser"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import { generateDtsBundle } from "dts-bundle-generator"

import pkg from "../package.json"
import { ENTRY_FILE, DIST_DIR } from "./config"

// build ts
export async function buildBundle(): Promise<void> {
  // Track iterations over output files
  let analyzePluginIterations = 0

  const bundle = await rollup({
    input: ENTRY_FILE,
    plugins: [
      nodeResolve(),
      ts({ transpiler: "babel" }),
      analyze({
        summaryOnly: true,
        onAnalysis: () => {
          if (analyzePluginIterations > 0) {
            throw "" // We only want reports on the first output
          }
          analyzePluginIterations++
        },
      }),
    ],
  })

  await bundle.write({
    file: pkg.main,
    format: "cjs",
    sourcemap: true,
    exports: "named",
  })
  await bundle.write({
    file: pkg.module,
    format: "esm",
    sourcemap: true,
    exports: "named",
  })
  await bundle.write({
    file: pkg.unpkg,
    format: "umd",
    exports: "named",
    name: pkg.name,
    sourcemap: true,
    plugins: [terser()],
  })

  console.log(`\nSuccessfully bundled library!\n`)
}

// build type declarations
export async function buildDts(): Promise<void> {
  const bundle = generateDtsBundle([{ filePath: ENTRY_FILE, output: { umdModuleName: pkg.name } }])

  // check if folder exists and create if not
  await fs.stat(`${DIST_DIR}`).catch(async () => {
    await fs.mkdir(`${DIST_DIR}`, { recursive: true })
  })

  // write bundle to file
  await fs.writeFile(`${DIST_DIR}/index.d.ts`, bundle.toString())

  console.log(`Successfully created type declarations!\n`)
}

// execute if file is called directly
buildBundle()
  .then(() => buildDts())
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
