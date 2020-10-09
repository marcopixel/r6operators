/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/default */
// @ts-nocheck
import r6operators from "..";
import operatorJson from "../operators.json";

test("returns all properties", () => {
  Object.keys(operatorJson).map((op) => {
    expect(r6operators).toHaveProperty(op);
  });
});

test("exports correct object", () => {
  expect(r6operators.alibi).toMatchSnapshot({
    svg: {
      contents: expect.any(String),
    },
  });
});
