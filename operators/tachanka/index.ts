import { IOperator } from "~/types/Operator"

export const tachanka: IOperator = {
  name: "Tachanka",
  role: "Defender",
  unit: "SPETSNAZ",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "ru",
    season: "Release",
    height: 183,
    weight: 86,
  },
  bio: {
    real_name: "Alexandr Senaviev",
    birthplace: "Saint Petersburg, Russia",
  },
}
