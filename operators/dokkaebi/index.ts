import { IOperator } from "~/types/Operator"

export const dokkaebi: IOperator = {
  name: "Dokkaebi",
  role: "Attacker",
  unit: "SMB",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "f",
    country: "sk",
    season: "Y2S4",
    height: 169,
    weight: 62,
  },
  bio: {
    real_name: "Grace Nam",
    birthplace: "Seoul, South Korea",
  },
}
