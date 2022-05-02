import { IOperator } from "~/types/operator"

export const thorn: IOperator = {
  name: "Thorn",
  role: "Defender",
  unit: "GARDA ERU",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "f",
    country: "ie",
    season: "Y6S4",
    height: 188,
    weight: 78,
    price: { renown: 25000, r6credits: 600 },
  },
  bio: {
    real_name: "Brianna Skehan",
    birthplace: "County Kildare, Ireland",
  },
}
