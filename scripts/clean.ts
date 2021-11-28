/* eslint-disable unicorn/no-process-exit */
import { cleanRepo } from "./clean-repo"

async function main(): Promise<void> {
  console.log("Clean repo...\n")
  await cleanRepo()
}

main().catch((error) => {
  console.log(error)
  process.exit(1)
})
