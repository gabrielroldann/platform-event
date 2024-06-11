"use server";

import { db } from "../_lib/prisma";

interface SubscriptionParams {
  userId: string;
  eventId: string;
  date: Date;
}

export const SaveSubscription = async (params: SubscriptionParams) => {
  const subscription = await db.subscription.create({
    data: {
      userId: params.userId,
      eventId: params.eventId,
      date: params.date,
    },
  });
  return subscription;
};

interface CheckSubscriptionParams {
  userId: string;
  eventId: string;
}

export const CheckSubscription = async (params: CheckSubscriptionParams) => {
  const subscription = await db.subscription.findFirst({
    where: {
      userId: params.userId,
      eventId: params.eventId,
    },
  });
  return subscription;
};
