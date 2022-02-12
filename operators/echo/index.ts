import { IOperator } from "~/types/operator"

export const echo: IOperator = {
  name: "Echo",
  role: "Defender",
  unit: "SAT",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 3,
  },
  meta: {
    gender: "m",
    country: "jp",
    season: "Y1S4",
    height: 180,
    weight: 72,
    price: { renown: 10_000, r6credits: 240 },
  },
  bio: {
    real_name: "Masaru Enatsu",
    birthplace: "Suginami, Japan",
  },
}
