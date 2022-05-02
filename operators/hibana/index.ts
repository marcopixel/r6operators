import { IOperator } from "~/types/operator"

export const hibana: IOperator = {
  name: "Hibana",
  role: "Attacker",
  unit: "SAT",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 1,
  },
  meta: {
    gender: "f",
    country: "jp",
    season: "Y1S4",
    height: 173,
    weight: 57,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Yumiko Imagawa",
    birthplace: "Nagoya, Japan",
  },
}
