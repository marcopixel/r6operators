import { IOperator } from "~/types/Operator"

export const thatcher: IOperator = {
  name: "Thatcher",
  role: "Attacker",
  unit: "SAS",
  ratings: {
    health: 2,
    speed: 2,
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
