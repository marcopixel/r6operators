import { IOperator } from "~/types/operator"

export const iana: IOperator = {
  name: "Iana",
  role: "Attacker",
  unit: "REU",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "f",
    country: "nl",
    season: "Y5S1",
    height: 157,
    weight: 56,
    price: { renown: 15000, r6credits: 360 },
  },
  bio: {
    real_name: "Nienke Meijer",
    birthplace: "Katwijk, Nederlands",
  },
}
