import { IOperator } from "~/types/operator"

export const jackal: IOperator = {
  name: "Jackal",
  role: "Attacker",
  unit: "GEO",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 3,
  },
  meta: {
    gender: "m",
    country: "es",
    season: "Y2S1",
    height: 190,
    weight: 78,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Ryad Ramirez Al-Hassar",
    birthplace: "Ceuta, Spain",
  },
}
