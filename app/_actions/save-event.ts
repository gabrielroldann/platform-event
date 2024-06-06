"use server";

import { db } from "../_lib/prisma";

interface EventParams {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  imageId: string;
}

export const SaveEvent = async (params: EventParams) => {
  const newEvent = await db.event.create({
    data: {
      title: params.title,
      description: params.description,
      startDate: params.startDate,
      endDate: params.endDate,
      location: params.location,
      imageId: params.imageId,
    },
  });

  return newEvent;
};
