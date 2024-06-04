"use server";

import { Image } from "@prisma/client";
import { db } from "../_lib/prisma";

interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
  location: string;
  userId: string;
  imageId: string;
  Image: Image;
}

export const GetEvents = async (): Promise<Event[]> => {
  const allEvents = await db.event.findMany({
    include: {
      Image: true,
    },
  });

  return allEvents;
};
