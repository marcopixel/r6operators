import { IOperator } from "~/types/Operator"

export const fuze: IOperator = {
  name: "Fuze",
  role: "Attacker",
  unit: "SPETSNAZ",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "ru",
    season: "Release",
    height: 172,
    weight: 58,
  },
  bio: {
    real_name: "Shuhrat Kessikbayev",
    birthplace: "Samarkand, Uzbekistan",
  },
}
