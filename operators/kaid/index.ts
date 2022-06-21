import { IOperator } from "~/types/operator"

export const kaid: IOperator = {
  name: "Kaid",
  role: "Defender",
  unit: "GIGR",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "ma",
    season: "Y3S4",
    height: 195,
    weight: 98,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Jalal El Fassi",
    birthplace: "Aroumd, Morocco",
  },
}
