import { IOperator } from "~/types/operator"

export const maestro: IOperator = {
  name: "Maestro",
  role: "Defender",
  unit: "GIS",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "it",
    season: "Y3S2",
    height: 185,
    weight: 87,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Adriano Martello",
    birthplace: "Rome, Italy",
  },
}
