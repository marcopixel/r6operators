import { IOperator } from "~/types/operator"

export const dokkaebi: IOperator = {
  name: "Dokkaebi",
  role: "Attacker",
  unit: "SMB",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "f",
    country: "sk",
    season: "Y2S4",
    height: 169,
    weight: 62,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Grace Nam",
    birthplace: "Seoul, South Korea",
  },
}
