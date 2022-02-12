import { IOperator } from "~/types/operator"

export const alibi: IOperator = {
  name: "Alibi",
  role: "Defender",
  unit: "GIS",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 3,
  },
  meta: {
    gender: "f",
    country: "it",
    season: "Y3S2",
    height: 171,
    weight: 63,
    price: { renown: 10_000, r6credits: 240 },
  },
  bio: {
    real_name: "Aria de Luca",
    birthplace: "Tripoli, Lybia",
  },
}
