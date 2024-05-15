import { db } from "../_lib/prisma";

interface EventParams {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  maxParticipants: number;
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
      maxParticipants: params.maxParticipants,
      userId: params.userId,
    },
  });

  return newEvent;
};
