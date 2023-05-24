import { IOperator } from "~/types/operator"

export const echo: IOperator = {
  name: "Echo",
  role: "Defender",
  org: "SAT",
  squad: "VIPERSTRIKE",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 3,
  },
  meta: {
    gender: "m",
    country: "jp",
    season: "Y1S4",
    height: 180,
    weight: 72,
  },
  bio: {
    real_name: "Masaru Enatsu",
    birthplace: "Tokyo (Suginami-ku), Japan",
  },
}
