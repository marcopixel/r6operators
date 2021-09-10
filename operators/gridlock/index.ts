import { IOperator } from "~/types/Operator"

export const gridlock: IOperator = {
  name: "Gridlock",
  role: "Attacker",
  unit: "SASR",
  ratings: {
    armor: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "f",
    country: "au",
    season: "Y4S1",
    height: 171,
    weight: 83,
  },
  bio: {
    real_name: "Tori Tallyo Fairous",
    birthplace: "Longreach, Australia",
  },
}