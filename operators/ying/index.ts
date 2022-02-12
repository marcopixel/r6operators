import { IOperator } from "~/types/operator"

export const ying: IOperator = {
  name: "Ying",
  role: "Attacker",
  unit: "SDU",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "f",
    country: "hk",
    season: "Y2S3",
    height: 160,
    weight: 52,
    price: { renown: 10_000, r6credits: 240 },
  },
  bio: {
    real_name: "Siu Mei Lin",
    birthplace: "Central, Hong Kong",
  },
}
