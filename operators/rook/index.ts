import { Operator } from "~/types/Operator"

export const rook: Operator = {
  name: "Rook",
  role: "Defender",
  unit: "GIGN",
  ratings: {
    armor: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    sex: "m",
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
