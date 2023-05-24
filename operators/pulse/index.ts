import { IOperator } from "~/types/operator"

export const pulse: IOperator = {
  name: "Pulse",
  role: "Defender",
  org: "FBI SWAT",
  squad: "NIGHTHAVEN",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 3,
  },
  meta: {
    gender: "m",
    country: "us",
    season: "Release",
    height: 188,
    weight: 85,
  },
  bio: {
    real_name: "Jack Estrada",
    birthplace: "Goldsboro, U.S.A",
  },
}
