/* eslint-disable import/no-named-as-default */
import Operator from "../modules/operator";

const icon1 = Operator("hibana", {
  name: "Hibana",
  role: "Attacker",
  unit: "SAT",
  ratings: {
    armor: 1,
    speed: 3,
    difficulty: 1,
  },
  meta: {
    sex: "f",
    country: "jp",
    season: "Y1S4",
    height: 173,
    weight: 57,
  },
  bio: {
    real_name: "Yumiko Imagawa",
    birthplace: "Nagoya, Japan",
  },
});

test("constructs icon object correctly", () => {
  expect(icon1).toMatchSnapshot({
    svg: {
      contents: expect.any(String),
    },
  });
});

test("toString() returns correct string", () => {
  expect(icon1.name.toString()).toMatchSnapshot();
});
