/* eslint-disable unicorn/prefer-top-level-await */
/* eslint-disable unicorn/no-process-exit */
import { promises as fs } from "fs"
import { DIST_DIR, TEMP_DIR } from "./config"

async function main(): Promise<void> {
  await fs.rm(DIST_DIR, { recursive: true, force: true })
  await fs.rm(TEMP_DIR, { recursive: true, force: true })
  console.log("Cleanup finished!")
}

main().catch((error) => {
  console.log(error)
  process.exit(1)
})
