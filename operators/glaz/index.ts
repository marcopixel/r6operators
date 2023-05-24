import { IOperator } from "~/types/operator"

export const glaz: IOperator = {
  name: "Glaz",
  role: "Attacker",
  org: "SPETSNAZ",
  squad: "GHOSTEYES",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "ru",
    season: "Release",
    height: 178,
    weight: 79,
  },
  bio: {
    real_name: "Timur Glazkov",
    birthplace: "Vladivostok, Russia",
  },
}
