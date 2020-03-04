import path from "path";

const ICON_DIR = path.join(__dirname, `../icons/`);
const SRC_DIR = path.join(__dirname, `../src/`);
const OUTPUT_DIR = path.join(__dirname, `../lib/icons/`);
const PNG_CONFIG = {
  dpi: 400, // dpi
  height: 1500, // height in px
  width: 1500 // width in px
};
const SVGO_OPTIONS =
  "--multipass --enable=removeDimensions --disable=convertPathData,removeRasterImages";

export { ICON_DIR, SRC_DIR, OUTPUT_DIR, PNG_CONFIG, SVGO_OPTIONS };
