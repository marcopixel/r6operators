import { IOperator } from "~/types/operator"

export const smoke: IOperator = {
  name: "Smoke",
  role: "Defender",
  unit: "SAS",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "uk",
    season: "Release",
    height: 173,
    weight: 70,
    price: { renown: 1000, r6credits: 0 },
  },
  bio: {
    real_name: "James Porter",
    birthplace: "London, England",
  },
}
