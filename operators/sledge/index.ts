import { IOperator } from "~/types/operator"

export const sledge: IOperator = {
  name: "Sledge",
  role: "Attacker",
  org: "SAS",
  squad: "REDHAMMER",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "uk",
    season: "Release",
    height: 192,
    weight: 95,
  },
  bio: {
    real_name: "Seamus Cowden",
    birthplace: "John O’groats, Scotland",
  },
}
