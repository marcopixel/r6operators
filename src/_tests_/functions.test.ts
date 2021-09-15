import r6operators from "~/index"
import { getSVGIcon } from "~/functions"

import * as ops from "@temp/modules/index"

it("toSVG() returns correct string", () => {
  // overwrite svg contents with example string
  const op = r6operators.ace
  op.svg.contents = "<circle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='red' />"

  expect(op.toSVG()).toMatchSnapshot()
  expect(op.toSVG({ "stroke-width": 1, color: "red" })).toMatchSnapshot()
  expect(op.toSVG({ class: "foo bar", color: "green" })).toMatchSnapshot()
})

it("toSVG() returns same output as getSVGIcon()", () => {
  Object.keys(ops).map((op) => {
    const exampleAttributes = { class: "test", "stroke-width": 1 }
    // overwrite svg contents with example string
    r6operators[op].svg.contents =
      "<circle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='red' />"

    // test each operator
    const objFunc = r6operators[op].toSVG(exampleAttributes)
    const namedFunc = getSVGIcon(r6operators[op], exampleAttributes)
    expect(objFunc as string).toMatch(namedFunc as string)
  })
})
