import { IOperator } from "~/types/Operator"

export const mozzie: IOperator = {
  name: "Mozzie",
  role: "Defender",
  unit: "SASR",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "au",
    season: "Y4S1",
    height: 162,
    weight: 57,
  },
  bio: {
    real_name: "Max Goose",
    birthplace: "Portland, Australia",
  },
}
