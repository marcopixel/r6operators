import path from "path";
import { promises as fs } from "fs";
import { OUTPUT_DIR, SRC_DIR } from "../config";

export default function buildIconJson(iconObject: {}): Promise<string> {
  // inform user that script has started
  console.log("Building icons.json...\n");

  // map the icon object
  const result = Object.keys(iconObject).map(op => {
    // set name + file path of svg
    const name: string = op;
    const svgPath: string = path.resolve(`${OUTPUT_DIR}/svg/${op}.svg`);
    // read file to get SVG content
    return fs.readFile(svgPath, "utf-8").then(output => {
      // create a new object
      const object = {
        [name as string]: output // svg string
      };
      // return new object to promise
      return object;
    });
  });

  // wait for all promises to finish
  return Promise.all(result)
    .then(resolved => {
      // set output file path
      const outputPath = path.resolve(`${SRC_DIR}/icons.json`);

      // merge all objects from the promises and write to OUTPUT
      const merged = Object.assign({}, ...resolved);
      fs.writeFile(outputPath, JSON.stringify(merged));

      // inform user that action has finished
      console.log(`Successfully built ${outputPath}!\n`);
      return outputPath;
    })
    .catch(error => {
      throw error;
    });
}
