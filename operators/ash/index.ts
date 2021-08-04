import { Operator } from "~/types/Operator"

export const ash: Operator = {
  name: "Ash",
  role: "Attacker",
  unit: "FBI",
  ratings: {
    armor: 1,
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
