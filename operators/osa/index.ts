import { IOperator } from "~/types/operator"

export const osa: IOperator = {
  name: "Osa",
  role: "Attacker",
  unit: "NIGHTHAVEN",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "o",
    country: "hr",
    season: "Y6S3",
    height: 180,
    weight: 71,
    price: { renown: 25000, r6credits: 600 },
  },
  bio: {
    real_name: "Anja Katarina Janković",
    birthplace: "Split, Croatia",
  },
}
