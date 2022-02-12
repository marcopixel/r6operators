import { IOperator } from "~/types/operator"

export const aruni: IOperator = {
  name: "Aruni",
  role: "Defender",
  unit: "NIGHTHAVEN",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "f",
    country: "th",
    season: "Y5S4",
    height: 160,
    weight: 58,
    price: { renown: 20_000, r6credits: 480 },
  },
  bio: {
    real_name: "Apha Tawanroong",
    birthplace: "Ta Phraya District, Thailand",
  },
}
