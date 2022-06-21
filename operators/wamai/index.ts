import { IOperator } from "~/types/operator"

export const wamai: IOperator = {
  name: "Wamai",
  role: "Defender",
  unit: "NIGHTHAVEN",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "ke",
    season: "Y4S4",
    height: 187,
    weight: 83,
    price: { renown: 15000, r6credits: 360 },
  },
  bio: {
    real_name: "Ngũgĩ Muchoki Furaha",
    birthplace: "Lamu, Kenya",
  },
}
