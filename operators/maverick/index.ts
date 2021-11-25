import { IOperator } from "~/types/Operator"

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
  },
  bio: {
    real_name: "Erik Thorn",
    birthplace: "Boston, U.S.A",
  },
}
