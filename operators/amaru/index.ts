import { IOperator } from "~/types/operator"

export const amaru: IOperator = {
  name: "Amaru",
  role: "Attacker",
  unit: "APCA",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "f",
    country: "pe",
    season: "Y4S3",
    height: 189,
    weight: 84,
    price: { renown: 15000, r6credits: 360 },
  },
  bio: {
    real_name: "Azucena Rocío Quispe",
    birthplace: "Cojata, Peru",
  },
}
