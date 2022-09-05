import { IOperator } from "~/types/operator"

export const grim: IOperator = {
  name: "Grim",
  role: "Attacker",
  unit: "NIGHTHAVEN",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "u",
    country: "sg",
    season: "Y7S3",
    height: 179,
    weight: 89.8,
    price: { renown: 25000, r6credits: 600 },
  },
  bio: {
    real_name: "Charlie Tho Keng Boon",
    birthplace: "Jurong, Singapore",
  },
}
