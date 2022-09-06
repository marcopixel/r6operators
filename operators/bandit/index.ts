import { IOperator } from "~/types/operator"

export const bandit: IOperator = {
  name: "Bandit",
  role: "Defender",
  unit: "GSG9",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "de",
    season: "Release",
    height: 180,
    weight: 68,
  },
  bio: {
    real_name: "Dominic Brunsmeier",
    birthplace: "Berlin, Germany",
  },
}
