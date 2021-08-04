import { Operator } from "~/types/Operator"

export const smoke: Operator = {
  name: "Smoke",
  role: "Defender",
  unit: "SAS",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "uk",
    season: "Release",
    height: 173,
    weight: 70,
  },
  bio: {
    real_name: "James Porter",
    birthplace: "London, England",
  },
}
