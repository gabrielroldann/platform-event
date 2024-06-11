"use server";

import { db } from "../_lib/prisma";

interface SubscriptionParams {
  email: string;
}

export const GetTypeUser = async ({ email }: SubscriptionParams) => {
  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
};
