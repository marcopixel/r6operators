import { IOperator } from "~/types/operator"

export const warden: IOperator = {
  name: "Warden",
  role: "Defender",
  org: "SECRET SERVICE",
  squad: "GHOSTEYES",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "us",
    season: "Y4S2",
    height: 183,
    weight: 80,
  },
  bio: {
    real_name: "Collinn McKinley",
    birthplace: "Louisville, U.S.A",
  },
}
