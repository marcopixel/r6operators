/* eslint-disable unicorn/no-process-exit */
import fs from "fs-extra"
import { TEMP_DIR, DIST_DIR } from "./config"
import { buildOptimizedSVG } from "./build-optimized-svg"
import { buildIconModules } from "./build-icon-modules"
import { buildBundle, buildDts } from "./build-rollup"

async function main(): Promise<void> {
  console.log("Optimize SVG files...\n")
  await buildOptimizedSVG()

  console.log("Build icon modules...\n")
  await buildIconModules()

  console.log("Bundle TS files with Rollup...\n")
  await buildBundle()

  console.log("Create type declarations...\n")
  await buildDts()

  console.log("Copy optimized SVG into /dist folder...\n")
  await fs.copy(`${TEMP_DIR}/svg/`, `${DIST_DIR}/icons/`, { recursive: true })

  console.log("Finished!")
}

main().catch((error) => {
  console.log(error)
  process.exit(1)
})
