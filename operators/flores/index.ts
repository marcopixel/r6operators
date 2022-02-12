import { IOperator } from "~/types/operator"

export const flores: IOperator = {
  name: "Flores",
  role: "Attacker",
  unit: "UNAFFILIATED",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "ar",
    season: "Y6S1",
    height: 181,
    weight: 72,
    price: { renown: 20_000, r6credits: 480 },
  },
  bio: {
    real_name: "Santiago Miguel Lucero",
    birthplace: "Buenos Aires, Argentina",
  },
}
