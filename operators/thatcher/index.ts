import { IOperator } from "~/types/operator"

export const thatcher: IOperator = {
  name: "Thatcher",
  role: "Attacker",
  unit: "VIPERSTRIKE",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "uk",
    season: "Release",
    height: 180,
    weight: 86,
  },
  bio: {
    real_name: "Mike Baker",
    birthplace: "Bideford, England",
  },
}
