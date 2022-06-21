import { IOperator } from "~/types/operator"

export const capitao: IOperator = {
  name: "Capitão",
  role: "Attacker",
  unit: "BOPE",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "br",
    season: "Y1S3",
    height: 180,
    weight: 86,
    price: { renown: 10000, r6credits: 240 },
  },
  bio: {
    real_name: "Vincente Souza",
    birthplace: "Nova Iguacu, Brazil",
  },
}
