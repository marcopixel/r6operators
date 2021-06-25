import { Operator } from "~/types/Operator"

export const buck: Operator = {
  name: "Buck",
  role: "Attacker",
  unit: "JTF-2",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    sex: "m",
    country: "ca",
    season: "Y1S1",
    height: 178,
    weight: 84,
  },
  bio: {
    real_name: "Sébastien Côté",
    birthplace: "Montreal, Canada",
  },
}
