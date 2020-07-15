import path from "path";

const ICON_DIR = path.join(__dirname, `../operators/`);
const SRC_DIR = path.join(__dirname, `../src/`);
const OUTPUT_DIR = path.join(__dirname, `../lib/icons/`);
const PNG_CONFIG = {
  dpi: 400, // dpi
  height: 1500, // height in px
  width: 1500 // width in px
};

export { ICON_DIR, SRC_DIR, OUTPUT_DIR, PNG_CONFIG };
