/* eslint-disable unicorn/no-process-exit, unicorn/prefer-node-protocol, @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import ops from "../src/operators.json"

import optimizeSvg from "./modules/optimize-svg"
import generatePng from "./modules/generate-png"
import buildIconJson from "./modules/build-icon-json"

async function main(): Promise<void> {
  // optimize SVG icons
  await optimizeSvg(ops)

  // generate PNG
  await generatePng(ops)

  // generate icons.json
  await buildIconJson(ops)
}

main().catch((error) => {
  console.log(error)
  process.exit(1)
})
