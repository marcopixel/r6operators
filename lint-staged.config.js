/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-array-flat-map */

// Source: https://coding.maier.tech/posts/optimizing-lint-staged-config-js-for-prettier/

const micromatch = require("micromatch")
const prettier = require("prettier")

const addQuotes = (a) => `"${a}"`

module.exports = async (allStagedFiles) => {
  // Figure out all extensions supported by Prettier.
  const prettierSupportedExtensions = await prettier
    .getSupportInfo()
    .languages.map(({ extensions }) => extensions)
    .flat()

  // Match files for ESLint
  const eslintFiles = micromatch(allStagedFiles, ["**/*.{js,ts}"], {
    dot: true,
  })

  // Match files for Prettier
  const prettierFiles = micromatch(
    allStagedFiles,
    prettierSupportedExtensions.map((extension) => `**/*${extension}`),
    { dot: true },
  )

  // Array of linters to be run in this sequence.
  const linters = []

  // Add linters only when there are staged files for them.
  // 'prettier --write' causes lint-staged to never terminate when prettierFiles is empty.

  if (eslintFiles.length > 0) linters.push(`eslint --fix ${eslintFiles.join(" ")}`)

  if (prettierFiles.length > 0)
    linters.push(`prettier --write ${prettierFiles.map((element) => addQuotes(element)).join(" ")}`)

  return linters
}
