import { IOperator } from "~/types/operator"

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
    season: "Y2S3",
    height: 173,
    weight: 68,
    price: { renown: 10_000, r6credits: 240 },
  },
  bio: {
    real_name: "Elzbieta Bosak",
    birthplace: "Wroclaw, Poland",
  },
}
