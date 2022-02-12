import { IOperator } from "~/types/operator"

export const rook: IOperator = {
  name: "Rook",
  role: "Defender",
  unit: "GIGN",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "fr",
    season: "Release",
    height: 175,
    weight: 72,
    price: { renown: 1000, r6credits: 0 },
  },
  bio: {
    real_name: "Julien Nizan",
    birthplace: "Tours, France",
  },
}
