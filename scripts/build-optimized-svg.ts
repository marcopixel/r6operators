import path from "path"
import { promises as fs } from "fs"
import { extendDefaultPlugins, optimize, OptimizeOptions } from "svgo"

import * as ops from "@operators/index"
import { OPS_DIR, TEMP_DIR, SVGO_PLUGINS } from "./config"

export async function buildOptimizedSVG(): Promise<void> {
  // add counter var
  let counter = 0

  // check if destPath exists
  await fs.stat(`${TEMP_DIR}/svg`).catch(async () => {
    await fs.mkdir(`${TEMP_DIR}/svg`, { recursive: true })
  })

  const result = Object.keys(ops).map(async (op) => {
    // read file to get SVG data
    const svgPath = path.resolve(`${OPS_DIR}/${op}/${op}.svg`)
    const sourceFile = await fs.readFile(svgPath, "utf-8")

    // iterate counter + output to inform user
    counter += 1
    console.log(
      `${counter}/${Object.keys(ops).length} - ${path.normalize(`${TEMP_DIR}/svg/${op}.svg`)}`
    )

    // optimize svg with svgo
    const svgoConfig: OptimizeOptions = {
      plugins: [
        // override default preset
        "preset-default",
        // enable plugins
        ...SVGO_PLUGINS,
        {
          name: "cleanupIDs",
          params: { prefix: `${op}-` },
        },
      ],
    }
    const optimized = optimize(sourceFile, { multipass: true, path: `${op}.svg`, ...svgoConfig })

    // write optimized icon to disk
    await fs.writeFile(`${TEMP_DIR}/svg/${op}.svg`, optimized.data)
  })

  // wait for Promises + merge objects together
  await Promise.all(result)
  console.log(`Successfully optimized ${counter} icons!\n`)
}
