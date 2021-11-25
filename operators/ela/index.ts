import { IOperator } from "~/types/Operator"

export const ela: IOperator = {
  name: "Ela",
  role: "Defender",
  unit: "GROM",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 1,
  },
  meta: {
    gender: "f",
    country: "pl",
    season: "Y2S4",
    height: 173,
    weight: 68,
  },
  bio: {
    real_name: "Elzbieta Bosak",
    birthplace: "Wroclaw, Poland",
  },
}
