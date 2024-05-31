import { db } from "../_lib/prisma";

interface EventParams {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  image: string;
  userId: string;
}

export const SaveEvent = async (params: EventParams) => {
  const newEvent = await db.event.create({
    data: {
      title: params.title,
      description: params.description,
      startDate: params.startDate,
      endDate: params.endDate,
      location: params.location,
      image: params.image,
      userId: params.userId,
    },
  });

  return newEvent;
};
