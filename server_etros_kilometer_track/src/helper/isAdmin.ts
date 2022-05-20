import User from "../database/entities/User";

export default function isUserAdmin(user: User) {
  return user?.name == process.env.ADMINNAME && user?.email == process.env.ADMINEMAIL
}

