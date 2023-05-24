import { IOperator } from "~/types/operator"

export const rook: IOperator = {
  name: "Rook",
  role: "Defender",
  org: "GIGN",
  squad: "VIPERSTRIKE",
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
