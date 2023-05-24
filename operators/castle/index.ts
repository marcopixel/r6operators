import { IOperator } from "~/types/operator"

export const castle: IOperator = {
  name: "Castle",
  role: "Defender",
  org: "FBI SWAT",
  squad: "WOLFGUARD",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "us",
    season: "Release",
    height: 185,
    weight: 86,
  },
  bio: {
    real_name: "Miles Campbell",
    birthplace: "Sherman Oaks, U.S.A",
  },
}
