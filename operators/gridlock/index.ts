import { IOperator } from "~/types/operator"

export const gridlock: IOperator = {
  name: "Gridlock",
  role: "Attacker",
  unit: "SASR",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "f",
    country: "au",
    season: "Y4S1",
    height: 171,
    weight: 83,
    price: { renown: 10_000, r6credits: 240 },
  },
  bio: {
    real_name: "Tori Tallyo Fairous",
    birthplace: "Longreach, Australia",
  },
}
