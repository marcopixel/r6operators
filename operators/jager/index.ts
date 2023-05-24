import { IOperator } from "~/types/operator"

export const jager: IOperator = {
  name: "Jäger",
  role: "Defender",
  org: "GSG 9",
  squad: "VIPERSTRIKE",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "de",
    season: "Release",
    height: 180,
    weight: 64,
  },
  bio: {
    real_name: "Marius Streicher",
    birthplace: "Düsseldorf, Germany",
  },
}
