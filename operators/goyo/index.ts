import { IOperator } from "~/types/operator"

export const goyo: IOperator = {
  name: "Goyo",
  role: "Defender",
  unit: "FES",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "mx",
    season: "Y4S3",
    height: 171,
    weight: 83,
    price: { renown: 15_000, r6credits: 360 },
  },
  bio: {
    real_name: "César Ruiz Hernández",
    birthplace: "Culiacán Rosales, Mexico",
  },
}
