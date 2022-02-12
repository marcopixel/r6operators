import { IOperator } from "~/types/operator"

export const mira: IOperator = {
  name: "Mira",
  role: "Defender",
  unit: "GEO",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 3,
  },
  meta: {
    gender: "f",
    country: "es",
    season: "Y2S1",
    height: 165,
    weight: 60,
    price: { renown: 10_000, r6credits: 240 },
  },
  bio: {
    real_name: "Elena Maria Alvarez del Manzano",
    birthplace: "Madrid, Spain",
  },
}
