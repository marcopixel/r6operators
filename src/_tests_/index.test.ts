import r6operators from "~/index"
import * as ops from "@operators/index"

test("returns all operators as default export", () => {
  Object.keys(ops).map((op) => {
    expect(r6operators).toHaveProperty(op)
  })
})

test("exports extended object", () => {
  expect(r6operators.alibi).toMatchObject({
    ...ops.alibi,
    id: "alibi",
    svg: {
      contents: expect.any(String),
    },
    toSVG: expect.any(Function),
  })
})
