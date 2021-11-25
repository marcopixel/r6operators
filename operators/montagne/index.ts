import { IOperator } from "~/types/Operator"

export const montagne: IOperator = {
  name: "Montagne",
  role: "Attacker",
  unit: "GIGN",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 3,
  },
  meta: {
    gender: "m",
    country: "fr",
    season: "Release",
    height: 190,
    weight: 100,
  },
  bio: {
    real_name: "Gilles Touré",
    birthplace: "Bordeaux, France",
  },
}
