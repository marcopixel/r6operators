import { IOperator } from "~/types/operator"

export const caveira: IOperator = {
  name: "Caveira",
  role: "Defender",
  unit: "BOPE",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 3,
  },
  meta: {
    gender: "f",
    country: "br",
    season: "Y1S3",
    height: 155,
    weight: 73,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Taina Pereira",
    birthplace: "Rinópolis, Brazil",
  },
}
