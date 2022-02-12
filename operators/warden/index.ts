import { IOperator } from "~/types/operator"

export const warden: IOperator = {
  name: "Warden",
  role: "Defender",
  unit: "SECRET SERVICE",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "us",
    season: "Y4S2",
    height: 173,
    weight: 73,
    price: { renown: 15_000, r6credits: 360 },
  },
  bio: {
    real_name: "Collinn McKinley",
    birthplace: "Louisville, U.S.A",
  },
}
