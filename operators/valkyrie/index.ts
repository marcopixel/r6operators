import { IOperator } from "~/types/operator"

export const valkyrie: IOperator = {
  name: "Valkyrie",
  role: "Defender",
  unit: "SEALS",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "f",
    country: "us",
    season: "Y1S2",
    height: 170,
    weight: 57,
    price: { renown: 10_000, r6credits: 240 },
  },
  bio: {
    real_name: "Meghan J. Castellano",
    birthplace: "Oceanside, U.S.A",
  },
}
