import path from "path"
import { PluginConfig } from "svgo"

const OPS_DIR = path.resolve(`./operators`)
const TEMP_DIR = path.resolve(`./temp`)
const DIST_DIR = path.resolve(`./dist`)

const ENTRY_FILE = path.resolve("./src/index.ts")
const DECLARATION_FILE = path.resolve("./src/types/index.d.ts")

const CURRENT_SEASON = "Y9S3"

const SVGO_PLUGINS: PluginConfig[] = [
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
  "cleanupIds",
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

export { OPS_DIR, TEMP_DIR, DIST_DIR, ENTRY_FILE, DECLARATION_FILE, CURRENT_SEASON, SVGO_PLUGINS }
