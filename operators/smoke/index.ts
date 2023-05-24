import { IOperator } from "~/types/operator"

export const smoke: IOperator = {
  name: "Smoke",
  role: "Defender",
  org: "SAS",
  squad: "REDHAMMER",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "uk",
    season: "Release",
    height: 193,
    weight: 95,
  },
  bio: {
    real_name: "James Porter",
    birthplace: "London, England",
  },
}
