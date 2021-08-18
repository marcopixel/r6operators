import path from "path"
import { Plugin } from "svgo"

const OPS_DIR = path.resolve(`./operators`)
const TEMP_DIR = path.resolve(`./temp`)
const DIST_DIR = path.resolve(`./dist`)

const ENTRY_FILE = path.resolve("./src/index.ts")
const DECLARATION_FILE = path.resolve("./src/types/index.d.ts")

const SVGO_PLUGINS: Plugin[] = [
  // "cleanupIDs" plugin is added at the build-optimized-svg script directly
  // to prevent gradient id clash (it will add the operator id as prefix)
  "removeDoctype",
  "removeXMLProcInst",
  "removeComments",
  "removeMetadata",
  "removeEditorsNSData",
  "cleanupAttrs",
  "mergeStyles",
  "inlineStyles",
  "minifyStyles",
  "cleanupIDs",
  "removeUselessDefs",
  "cleanupNumericValues",
  "convertColors",
  "removeUnknownsAndDefaults",
  "removeNonInheritableGroupAttrs",
  "removeUselessStrokeAndFill",
  "removeViewBox",
  "cleanupEnableBackground",
  "removeHiddenElems",
  "removeEmptyText",
  "convertShapeToPath",
  "convertEllipseToCircle",
  "moveElemsAttrsToGroup",
  "moveGroupAttrsToElems",
  "collapseGroups",
  "convertPathData",
  "convertTransform",
  "removeEmptyAttrs",
  "removeEmptyContainers",
  "mergePaths",
  "removeUnusedNS",
  "sortDefsChildren",
  "removeTitle",
  "removeDesc",
  "removeDimensions",
]

export { OPS_DIR, TEMP_DIR, DIST_DIR, ENTRY_FILE, DECLARATION_FILE, SVGO_PLUGINS }
