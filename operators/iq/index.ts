import { IOperator } from "~/types/operator"

export const iq: IOperator = {
  name: "IQ",
  role: "Attacker",
  org: "GSG 9",
  squad: "NIGHTHAVEN",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 3,
  },
  meta: {
    gender: "f",
    country: "de",
    season: "Release",
    height: 175,
    weight: 70,
  },
  bio: {
    real_name: "Monika Weiss",
    birthplace: "Leipzig, Germany",
  },
}
