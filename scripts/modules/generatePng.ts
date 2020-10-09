import path from "path";
import sharp from "sharp";
import { promises as fs } from "fs";

import { OUTPUT_DIR, PNG_CONFIG } from "../config";

export default async function generatePng(iconObject: Record<string, unknown>): Promise<void> {
  // inform user that script has started
  console.log("Generate PNG files...\n");

  // set counter vars + timer
  const inputCount = Object.keys(iconObject).length;
  let outputCount = 0;
  const startTimer = process.hrtime();

  // map the icon object
  const result = Object.keys(iconObject).map(async (op) => {
    // set icon path + output path
    const inputFile = path.resolve(`${OUTPUT_DIR}/svg/${op}.svg`);
    const outputPath = path.resolve(`${OUTPUT_DIR}/png`);

    // init sharp
    const image = sharp(inputFile, { density: PNG_CONFIG.dpi });

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

    await image
      // get file metadata
      .metadata()
      // check if file is svg
      .then((metadata) => {
        if (metadata.format !== "svg") {
          throw new Error(`The source file is not an SVG file! - ${path.normalize(inputFile)}`);
        } else {
          return;
        }
      })
      // execute image manipulations (resize image and save it as png)
      .then(() => {
        return image
          .resize(PNG_CONFIG.height, PNG_CONFIG.width) // resize image
          .png({ force: true }) // force PNG output
          .toFile(path.normalize(`${outputPath}/${op}.png`)); // save to file
      });

    // increase counter when finished and output it to the console
    outputCount += 1;
    console.log(`${outputCount}/${inputCount} - ${path.normalize(`${outputPath}/${op}.png`)}`);

    // return operator name to promise
    return op;
  });

  // wait for all promises to finish
  await Promise.all(result)
    .then((resolved) => {
      console.info("\nFinished!");
      console.info(`Execution time: ${process.hrtime(startTimer)[0]} seconds`);
      console.log(`Output folder: ${OUTPUT_DIR}\n`);
      return resolved;
    })
    .catch((error) => {
      throw error;
    });
}
