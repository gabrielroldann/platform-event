"use server";

import { authOptions } from "@/app/_lib/auth";
import { db } from "@/app/_lib/prisma";
import { getServerSession } from "next-auth";
import Image from "next/image";

interface EventPageParams {
  params: {
    id?: string;
  };
}

const EventPage = async ({ params }: EventPageParams) => {
  const session = await getServerSession(authOptions);

  if (!params.id) {
    return null;
  }

  const currentEvent = await db.event.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div>
      {currentEvent ? (
        <div>
          <div>{currentEvent.id}</div>
        </div>
      ) : (
        <div>Essa página nao existe</div>
      )}
    </div>
  );
};

export default EventPage;
