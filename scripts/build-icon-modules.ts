import path from "path"
import * as cheerio from "cheerio"
import stringifyObject from "stringify-object"
import { promises as fs } from "fs"

import * as ops from "@operators/index"
import { CURRENT_SEASON, OPS_DIR, TEMP_DIR } from "./config"

const readSVG = async (op: string) => {
  // read optimized svg icon
  const svgPath = path.resolve(`${TEMP_DIR}/svg/${op}.svg`)
  const svg = await fs.readFile(svgPath, "utf8")

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

// thanks to @danielwerg for the getSeasonId + getprice functions
// https://github.com/marcopixel/r6operators/pull/34
const getSeasonId = (shorthand: string) => {
  // handle release operators
  if (shorthand === "Release") {
    return 0
  }

  const [year, season] = /Y(\d+)S(\d)/.exec(shorthand)?.slice(1).map(Number) as [number, number]
  return year === 0 ? 0 : year * 4 - 4 + season
}

const getPrice = (seasonId: number, lastSeasonId: number) => {
  const ratio = (lastSeasonId - seasonId) / 4
  let result = { renown: 0, r6credits: 0 }
  switch (Math.floor(ratio)) {
    case 0: {
      result = { renown: 25000, r6credits: 600 }
      break
    }
    case 1: {
      result = { renown: 20000, r6credits: 480 }
      break
    }
    case 2: {
      result = { renown: 15000, r6credits: 360 }
      break
    }
    default: {
      result = { renown: 10000, r6credits: 240 }
    }
  }
  return seasonId === 0 ? { renown: 1000, r6credits: 0 } : result
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
    let seasonId: number
    let price: { renown: number; r6credits: number }

    // set season id + price if metadata exists
    if (ops[op].meta?.season) {
      seasonId = getSeasonId(ops[op].meta.season)
      price = getPrice(seasonId, getSeasonId(CURRENT_SEASON))
    }

    // create merged obj
    const merged = {
      id: op,
      ...ops[op],
      svg: await readSVG(op),
      ...((ops[op].meta || price) && { meta: { ...ops[op].meta, price } }), // check if meta or price exists
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
