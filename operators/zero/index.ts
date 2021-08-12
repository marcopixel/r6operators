import { IOperator } from "~/types/Operator"

export const zero: IOperator = {
  name: "Zero",
  role: "Attacker",
  unit: "ROS",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "us",
    season: "Y5S3",
    height: 178,
    weight: 77,
  },
  bio: {
    real_name: "Samuel Leo Fisher",
    birthplace: "Baltimore, U.S.A",
  },
}
