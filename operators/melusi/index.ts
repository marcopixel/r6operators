import { IOperator } from "~/types/operator"

export const melusi: IOperator = {
  name: "Melusi",
  role: "Defender",
  unit: "ITF",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 1,
  },
  meta: {
    gender: "f",
    country: "sa",
    season: "Y5S2",
    height: 172,
    weight: 68,
    price: { renown: 20_000, r6credits: 480 },
  },
  bio: {
    real_name: "Thandiwe Ndlovu",
    birthplace: "Louwsburg, South Africa",
  },
}
