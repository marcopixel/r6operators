import { IOperator } from "~/types/operator"

export const clash: IOperator = {
  name: "Clash",
  role: "Defender",
  unit: "GSUTR",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 3,
  },
  meta: {
    gender: "f",
    country: "uk",
    season: "Y3S3",
    height: 179,
    weight: 73,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Morowa Evans",
    birthplace: "London, England",
  },
}
