import { IOperator } from "~/types/operator"

export const mute: IOperator = {
  name: "Mute",
  role: "Defender",
  unit: "SAS",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "uk",
    season: "Release",
    height: 170,
    weight: 80,
    price: { renown: 1000, r6credits: 0 },
  },
  bio: {
    real_name: "Mark Chandar",
    birthplace: "York, England",
  },
}
