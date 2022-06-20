import { IOperator } from "~/types/operator"

export const ace: IOperator = {
  name: "Ace",
  role: "Attacker",
  unit: "NIGHTHAVEN",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "no",
    season: "Y5S2",
    height: 187,
    weight: 75,
    price: { renown: 15000, r6credits: 360 },
  },
  bio: {
    real_name: "Håvard Haugland",
    birthplace: "Lærdalsøyri, Norway",
  },
}
