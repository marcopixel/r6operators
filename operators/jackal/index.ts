import { IOperator } from "~/types/Operator"

export const jackal: IOperator = {
  name: "Jackal",
  role: "Attacker",
  unit: "GEO",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 3,
  },
  meta: {
    gender: "m",
    country: "es",
    season: "Y2S1",
    height: 190,
    weight: 78,
  },
  bio: {
    real_name: "Ryad Ramirez Al-Hassar",
    birthplace: "Ceuta, Spain",
  },
}
