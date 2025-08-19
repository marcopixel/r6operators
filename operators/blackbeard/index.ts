import { IOperator } from "~/types/operator"

export const blackbeard: IOperator = {
  name: "Blackbeard",
  role: "Attacker",
  org: "NAVY SEAL",
  squad: "REDHAMMER",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "us",
    season: "Y1S2",
    height: 180,
    weight: 84,
  },
  bio: {
    real_name: "Craig Jenson",
    birthplace: "Bellevue, U.S.A",
  },
}
