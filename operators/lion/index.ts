import { IOperator } from "~/types/Operator"

export const lion: IOperator = {
  name: "Lion",
  role: "Attacker",
  unit: "CBRN",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "fr",
    season: "Y3S1",
    height: 185,
    weight: 87,
  },
  bio: {
    real_name: "Olivier Flament",
    birthplace: "Toulouse, France",
  },
}
