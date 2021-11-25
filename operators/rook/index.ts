import { IOperator } from "~/types/Operator"

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
  },
  bio: {
    real_name: "Julien Nizan",
    birthplace: "Tours, France",
  },
}
