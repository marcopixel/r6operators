import { IOperator } from "~/types/operator"

export const zero: IOperator = {
  name: "Zero",
  role: "Attacker",
  unit: "ROS",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "us",
    season: "Y5S3",
    height: 178,
    weight: 77,
    price: { renown: 20000, r6credits: 480 },
  },
  bio: {
    real_name: "Samuel Leo Fisher",
    birthplace: "Baltimore, U.S.A",
  },
}
