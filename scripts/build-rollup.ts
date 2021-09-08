import { rollup } from "rollup"
import { ENTRY_FILE, DIST_DIR } from "./config"

import ts from "rollup-plugin-ts"
import dts from "rollup-plugin-dts"
import analyze from "rollup-plugin-analyzer"
import { typescriptPaths } from "rollup-plugin-typescript-paths"
import { terser } from "rollup-plugin-terser"

// build ts
export async function buildBundle(): Promise<void> {
  // Track iterations over output files
  let analyzePluginIterations = 0

  const bundle = await rollup({
    input: ENTRY_FILE,
    plugins: [
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
    file: `${DIST_DIR}/index.js`,
    format: "cjs",
    sourcemap: true,
    exports: "auto",
  })
  await bundle.write({
    file: `${DIST_DIR}/index.mjs`,
    format: "esm",
    sourcemap: true,
    exports: "auto",
  })
  await bundle.write({
    file: `${DIST_DIR}/index.min.js`,
    format: "umd",
    exports: "auto",
    name: "r6operators",
    sourcemap: true,
    plugins: [terser()],
  })

  console.log(`\nSuccessfully bundled library!\n`)
}

// build type declarations
export async function buildDts(): Promise<void> {
  const bundle = await rollup({
    input: ENTRY_FILE,
    plugins: [typescriptPaths({ preserveExtensions: true }), dts()],
  })

  console.log(`Successfully created type declarations!\n`)
  await bundle.write({ file: `${DIST_DIR}/index.d.ts`, format: "es" })
}
