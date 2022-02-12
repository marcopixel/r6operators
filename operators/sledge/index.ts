import { IOperator } from "~/types/operator"

export const sledge: IOperator = {
  name: "Sledge",
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
    height: 192,
    weight: 95,
    price: { renown: 1000, r6credits: 0 },
  },
  bio: {
    real_name: "Seamus Cowden",
    birthplace: "John O’groats, Scotland",
  },
}
