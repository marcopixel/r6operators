import { promises as fs } from "fs"
import { DIST_DIR, TEMP_DIR } from "./config"

export async function cleanRepo(): Promise<void> {
  await fs.rm(DIST_DIR, { recursive: true, force: true })
  await fs.rm(TEMP_DIR, { recursive: true, force: true })
  console.log(`\nCleanup done!\n`)
}
