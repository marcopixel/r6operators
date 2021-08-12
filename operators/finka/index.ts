import { IOperator } from "~/types/Operator"

export const finka: IOperator = {
  name: "Finka",
  role: "Attacker",
  unit: "CBRN",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "f",
    country: "ru",
    season: "Y3S1",
    height: 171,
    weight: 68,
  },
  bio: {
    real_name: "Lera Melnikova",
    birthplace: "Gomel, Belarus",
  },
}
