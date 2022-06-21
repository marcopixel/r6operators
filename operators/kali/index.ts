import { IOperator } from "~/types/operator"

export const kali: IOperator = {
  name: "Kali",
  role: "Attacker",
  unit: "NIGHTHAVEN",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "f",
    country: "in",
    season: "Y4S4",
    height: 170,
    weight: 67,
    price: { renown: 15000, r6credits: 360 },
  },
  bio: {
    real_name: "Jaimini Kalimohan Shah",
    birthplace: "Amreli, India",
  },
}
