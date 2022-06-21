import { IOperator } from "~/types/operator"

export const vigil: IOperator = {
  name: "Vigil",
  role: "Defender",
  unit: "SMB",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 3,
  },
  meta: {
    gender: "m",
    country: "sk",
    season: "Y2S4",
    height: 173,
    weight: 73,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Chul Kyung Hwa",
    birthplace: "[REDACTED]",
  },
}
