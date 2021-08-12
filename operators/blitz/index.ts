import { IOperator } from "~/types/Operator"

export const blitz: IOperator = {
  name: "Blitz",
  role: "Attacker",
  unit: "GSG9",
  ratings: {
    armor: 2,
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
