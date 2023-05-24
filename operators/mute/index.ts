import { IOperator } from "~/types/operator"

export const mute: IOperator = {
  name: "Mute",
  role: "Defender",
  org: "SAS",
  squad: "VIPERSTRIKE",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "uk",
    season: "Release",
    height: 185,
    weight: 80,
  },
  bio: {
    real_name: "Mark Chandar",
    birthplace: "York, England",
  },
}
