import { IOperator } from "~/types/operator"

export const ash: IOperator = {
  name: "Ash",
  role: "Attacker",
  unit: "REDHAMMER",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 2,
  },
  meta: {
    gender: "f",
    country: "us",
    season: "Release",
    height: 170,
    weight: 63,
  },
  bio: {
    real_name: "Eliza Cohen",
    birthplace: "Jerusalem, Israel",
  },
}
