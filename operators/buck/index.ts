import { IOperator } from "~/types/operator"

export const buck: IOperator = {
  name: "Buck",
  role: "Attacker",
  org: "JTF2",
  squad: "REDHAMMER",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "ca",
    season: "Y1S1",
    height: 178,
    weight: 78,
  },
  bio: {
    real_name: "Sebastien Côté",
    birthplace: "Montreal, Canada",
  },
}
