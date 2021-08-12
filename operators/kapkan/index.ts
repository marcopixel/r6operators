import { IOperator } from "~/types/Operator"

export const kapkan: IOperator = {
  name: "Kapkan",
  role: "Defender",
  unit: "SPETSNAZ",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "ru",
    season: "Release",
    height: 180,
    weight: 80,
  },
  bio: {
    real_name: "Maxim Basuda",
    birthplace: "Kovrov, Russia",
  },
}
