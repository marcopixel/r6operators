import { IOperator } from "~/types/operator"

export const sens: IOperator = {
  name: "Sens",
  role: "Attacker",
  unit: "SFG",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 2,
  },
  meta: {
    gender: "o",
    country: "be",
    season: "Y7S2",
    height: 178,
    weight: 73,
    price: { renown: 25000, r6credits: 600 },
  },
  bio: {
    real_name: "Néon Ngoma Mutombo",
    birthplace: "Brussels, Belgium",
  },
}
