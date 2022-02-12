import { IOperator } from "~/types/operator"

export const blitz: IOperator = {
  name: "Blitz",
  role: "Attacker",
  unit: "GSG9",
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
    price: { renown: 1000, r6credits: 0 },
  },
  bio: {
    real_name: "Elias Kötz",
    birthplace: "Bremen, Germany",
  },
}
