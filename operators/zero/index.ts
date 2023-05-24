import { IOperator } from "~/types/operator"

export const zero: IOperator = {
  name: "Zero",
  role: "Attacker",
  org: "ROS",
  squad: "GHOSTEYES",
  ratings: {
    health: 1,
    speed: 3,
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
