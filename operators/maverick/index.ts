import { IOperator } from "~/types/operator"

export const maverick: IOperator = {
  name: "Maverick",
  role: "Attacker",
  unit: "GSUTR",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "us",
    season: "Y3S3",
    height: 180,
    weight: 82,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Erik Thorn",
    birthplace: "Boston, U.S.A",
  },
}
