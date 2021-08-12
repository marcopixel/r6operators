import { IOperator } from "~/types/Operator"

export const echo: IOperator = {
  name: "Echo",
  role: "Defender",
  unit: "SAT",
  ratings: {
    armor: 3,
    speed: 1,
    difficulty: 3,
  },
  meta: {
    gender: "m",
    country: "jp",
    season: "Y1S4",
    height: 180,
    weight: 72,
  },
  bio: {
    real_name: "Masaru Enatsu",
    birthplace: "Suginami, Japan",
  },
}
