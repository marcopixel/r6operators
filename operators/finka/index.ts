import { IOperator } from "~/types/operator"

export const finka: IOperator = {
  name: "Finka",
  role: "Attacker",
  unit: "CBRN",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "f",
    country: "ru",
    season: "Y3S1",
    height: 171,
    weight: 68,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Lera Melnikova",
    birthplace: "Gomel, Belarus",
  },
}
