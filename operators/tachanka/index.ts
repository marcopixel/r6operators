import { Operator } from "~/types/Operator"

export const tachanka: Operator = {
  name: "Tachanka",
  role: "Defender",
  unit: "SPETSNAZ",
  ratings: {
    armor: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    sex: "m",
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
