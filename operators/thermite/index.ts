import { IOperator } from "~/types/Operator"

export const thermite: IOperator = {
  name: "Thermite",
  role: "Attacker",
  unit: "FBI",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "us",
    season: "Release",
    height: 178,
    weight: 80,
  },
  bio: {
    real_name: "Jordan Trace",
    birthplace: "Plano, U.S.A",
  },
}
