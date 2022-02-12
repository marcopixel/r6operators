import { IOperator } from "~/types/operator"

export const glaz: IOperator = {
  name: "Glaz",
  role: "Attacker",
  unit: "SPETSNAZ",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "ru",
    season: "Release",
    height: 178,
    weight: 79,
    price: { renown: 1000, r6credits: 0 },
  },
  bio: {
    real_name: "Timur Glazkov",
    birthplace: "Vladivostok, Russia",
  },
}
