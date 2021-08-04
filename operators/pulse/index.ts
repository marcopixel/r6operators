import { Operator } from "~/types/Operator"

export const pulse: Operator = {
  name: "Pulse",
  role: "Defender",
  unit: "FBI",
  ratings: {
    armor: 1,
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
