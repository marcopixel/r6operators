import { IOperator } from "~/types/Operator"

export const twitch: IOperator = {
  name: "Twitch",
  role: "Attacker",
  unit: "GIGN",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "f",
    country: "fr",
    season: "Release",
    height: 168,
    weight: 58,
  },
  bio: {
    real_name: "Emmanuelle Pichon",
    birthplace: "Nancy, France",
  },
}
