/* eslint-disable unicorn/no-process-exit */
import path from "path"
import cheerio from "cheerio"
import stringifyObject from "stringify-object"
import { promises as fs } from "fs"

import * as ops from "@operators/index"
import { OPS_DIR, TEMP_DIR } from "./config"

const readSVG = async (op: string) => {
  // read optimized svg icon
  const svgPath = path.resolve(`${TEMP_DIR}/svg/${op}.svg`)
  const svg = await fs.readFile(svgPath, "utf-8")

  // get attributes + values of the SVG
  const $ = cheerio.load(svg)
  const attributes = {
    ...$("svg").get(0).attribs,
    class: `r6operators r6operators-${op}`,
  }

  return {
    contents: $("svg").html(),
    attributes,
  }
}

// template for the generated .ts file
const template = (op: string, obj: string) => `
import { getSVGIcon } from "~/functions"
import { Operator } from "~/types/operator"

export const ${op}: Operator = ${obj}
`

export async function buildIconModules(): Promise<void> {
  // add counter var
  let counter = 0

  // create modules folder if it doesnt exist
  await fs.stat(`${TEMP_DIR}/modules`).catch(async () => {
    await fs.mkdir(`${TEMP_DIR}/modules`, { recursive: true })
  })

  const result = Object.keys(ops).map(async (op) => {
    // create merged object with icon data & svg data
    const merged = {
      id: op,
      ...ops[op],
      svg: await readSVG(op),
      toSVG: "", // empty because the function is added with the transform function
    }

    // stringify object
    const stringified = stringifyObject(merged, {
      transform: (obj, property, original) => {
        // add escaped function for toSVG
        if (property === "toSVG") {
          return "function(userAttr){return getSVGIcon(this, userAttr)}"
        }
        return original
      },
    })

    // write into template
    const contents = template(op, stringified)

    // create op folder if it doesnt exist
    await fs.stat(`${TEMP_DIR}/modules/${op}`).catch(async () => {
      await fs.mkdir(`${TEMP_DIR}/modules/${op}`, { recursive: true })
    })

    // write file to disk
    await fs.writeFile(`${TEMP_DIR}/modules/${op}/index.ts`, contents)

    // iterate counter + output to inform user
    counter += 1
    console.log(`${counter}/${Object.keys(ops).length} - ${path.normalize(`${op}.ts`)}`)
  })

  // wait for finish
  await Promise.all(result)

  // copy index.ts over to temp folder
  fs.copyFile(`${OPS_DIR}/index.ts`, `${TEMP_DIR}/modules/index.ts`)
  console.log(`Successfully generated ${counter} modules!\n`)
}

// execute if file is called directly
buildIconModules().catch((error) => {
  console.log(error)
  process.exit(1)
})
