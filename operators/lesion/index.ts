import { IOperator } from "~/types/operator"

export const lesion: IOperator = {
  name: "Lesion",
  role: "Defender",
  unit: "SDU",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "hk",
    season: "Y2S3",
    height: 174,
    weight: 82,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Liu Tze Long",
    birthplace: "Tseung Kwan O (Junk Bay), Hong Kong",
  },
}
