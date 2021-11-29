import { IOperator } from "~/types/operator"

export const frost: IOperator = {
  name: "Frost",
  role: "Defender",
  unit: "JTF-2",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "f",
    country: "ca",
    season: "Y1S1",
    height: 172,
    weight: 58,
  },
  bio: {
    real_name: "Tina Lin Tsang",
    birthplace: "Vancouver, Canada",
  },
}
