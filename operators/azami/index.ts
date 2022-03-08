import { IOperator } from "~/types/operator"

export const azami: IOperator = {
  name: "Azami",
  role: "Defender",
  unit: "UNAFFILIATED",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 3,
  },
  meta: {
    gender: "f",
    country: "jp",
    season: "Y7S1",
    height: 164,
    weight: 56.7,
    price: { renown: 25_000, r6credits: 600 },
  },
  bio: {
    real_name: "Kana Fujiwara",
    birthplace: "Kyoto, Japan",
  },
}
