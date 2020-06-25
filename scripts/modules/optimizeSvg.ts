import path from "path";
import { promises as fs } from "fs";
import exec from "../util/exec";

import { ICON_DIR, OUTPUT_DIR, SVGO_OPTIONS } from "../config";

export default async function optimizeSvg(iconObject: {}): Promise<void> {
  // inform user that script has started
  console.log("Optimize SVG files...\n");

  // set counter vars + timer
  const inputCount = Object.keys(iconObject).length;
  let outputCount = 0;
  const startTimer = process.hrtime();

  // map the icon object
  const result = Object.keys(iconObject).map(async op => {
    // set icon path + output path
    const inputFile = path.resolve(`${ICON_DIR}/${op}/${op}.svg`);
    const outputPath = path.resolve(`${OUTPUT_DIR}/svg/`);

    // check if input file exists
    await fs.stat(inputFile).catch(() => {
      throw new TypeError(
        `No file found at "${inputFile}" but "${op}" was referenced in operators.json`
      );
    });

    // check if destPath exists
    await fs.stat(outputPath).catch(async () => {
      await fs.mkdir(outputPath, { recursive: true });
    });

    // execute svgo command
    await exec(`svgo -i ${inputFile} -o ${outputPath} ${SVGO_OPTIONS}`);

    // increase counter when finished and output it to the console
    outputCount += 1;
    console.log(`${outputCount}/${inputCount} - ${path.normalize(`${outputPath}/${op}.svg`)}`);

    // return operator name to promise
    return op;
  });

  // wait for all promises to finish
  await Promise.all(result)
    .then(resolved => {
      console.info("\nFinished!");
      console.info(`Execution time: ${process.hrtime(startTimer)[0]} seconds`);
      console.log(`Output folder: ${OUTPUT_DIR}\n`);
      return resolved;
    })
    .catch(error => {
      throw error;
    });
}
