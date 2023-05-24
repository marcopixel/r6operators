import { IOperator } from "~/types/operator"

export const fuze: IOperator = {
  name: "Fuze",
  role: "Attacker",
  org: "SPETSNAZ",
  squad: "REDHAMMER",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "ru",
    season: "Release",
    height: 180,
    weight: 80,
  },
  bio: {
    real_name: "Shuhrat Kessikbayev",
    birthplace: "Samarkand, Uzbekistan",
  },
}
