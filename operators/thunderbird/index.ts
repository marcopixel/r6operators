import { IOperator } from "~/types/operator"

export const thunderbird: IOperator = {
  name: "Thunderbird",
  role: "Defender",
  unit: "UNAFFILIATED",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 1,
  },
  meta: {
    gender: "f",
    country: "ca",
    season: "Y6S2",
    height: 172,
    weight: 70,
    price: { renown: 25000, r6credits: 600 },
  },
  bio: {
    real_name: "Mina Sky",
    birthplace: "Nakoda Territories, Canada",
  },
}
