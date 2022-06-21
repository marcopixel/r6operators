import { IOperator } from "~/types/operator"

export const mozzie: IOperator = {
  name: "Mozzie",
  role: "Defender",
  unit: "SASR",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "au",
    season: "Y4S1",
    height: 162,
    weight: 57,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Max Goose",
    birthplace: "Portland, Australia",
  },
}
