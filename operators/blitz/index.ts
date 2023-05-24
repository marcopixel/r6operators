import { IOperator } from "~/types/operator"

export const blitz: IOperator = {
  name: "Blitz",
  role: "Attacker",
  org: "GSG9",
  squad: "VIPERSTRIKE",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 3,
  },
  meta: {
    gender: "m",
    country: "de",
    season: "Release",
    height: 175,
    weight: 75,
  },
  bio: {
    real_name: "Elias Kötz",
    birthplace: "Bremen, Germany",
  },
}
