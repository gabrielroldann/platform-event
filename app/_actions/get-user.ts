import { db } from "../_lib/prisma";

export const GetUser = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
};
