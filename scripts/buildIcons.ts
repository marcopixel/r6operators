/* eslint-disable unicorn/no-process-exit */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import ops from "../src/operators.json";

import optimizeSvg from "./modules/optimizeSvg";
import generatePng from "./modules/generatePng";
import buildIconJson from "./modules/buildIconJson";

async function main(): Promise<void> {
  // optimize SVG icons
  await optimizeSvg(ops);

  // generate PNG
  await generatePng(ops);

  // generate icons.json
  await buildIconJson(ops);
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
