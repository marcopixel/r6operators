import { IOperator } from "~/types/operator"

export const pulse: IOperator = {
  name: "Pulse",
  role: "Defender",
  unit: "FBI",
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
    price: { renown: 1000, r6credits: 0 },
  },
  bio: {
    real_name: "Jack Estrada",
    birthplace: "Goldsboro, U.S.A",
  },
}
