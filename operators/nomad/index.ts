import { IOperator } from "~/types/operator"

export const nomad: IOperator = {
  name: "Nomad",
  role: "Attacker",
  unit: "GIGR",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 3,
  },
  meta: {
    gender: "f",
    country: "ma",
    season: "Y3S4",
    height: 171,
    weight: 63,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Sanaa El Maktoub",
    birthplace: "Marrakesh, Morocco",
  },
}
