"use server";

import { db } from "../_lib/prisma";

export const GetEvents = async () => {
  const allEvents = await db.event.findMany({
    include: {
      Image: {
        select: {
          url: true,
        },
      },
    },
  });

  return allEvents;
};
