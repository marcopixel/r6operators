import { Operator } from "~/types/Operator"

export const bandit: Operator = {
  name: "Bandit",
  role: "Defender",
  unit: "GSG9",
  ratings: {
    armor: 1,
    speed: 3,
    difficulty: 1,
  },
  meta: {
    sex: "m",
    country: "de",
    season: "Release",
    height: 180,
    weight: 68,
  },
  bio: {
    real_name: "Dominic Brunsmeier",
    birthplace: "Berlin, Germany",
  },
}
