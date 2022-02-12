import { IOperator } from "~/types/operator"

export const nokk: IOperator = {
  name: "Nøkk",
  role: "Attacker",
  unit: "JAEGER CORPS",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 3,
  },
  meta: {
    gender: "f",
    country: "dk",
    season: "Y4S2",
    height: 0,
    weight: 0,
    price: { renown: 15_000, r6credits: 360 },
  },
  bio: {
    real_name: "[REDACTED]",
    birthplace: "[REDACTED]",
  },
}
