"use server";

import EventCard from "@/app/_components/card-event";
import EmptyEvents from "@/app/_components/empty-events";
import { db } from "@/app/_lib/prisma";

const ShowAllEvents = async () => {
  const events = await db.event.findMany({
    include: {
      Image: {
        select: {
          url: true,
        },
      },
    },
    orderBy: {
      startDate: "asc",
    },
  });

  const listEvents = events.length;

  return (
    <div>
      {listEvents > 0 ? (
        <div className="flex flex-wrap gap-3 min-w-60 overflow-x-auto scrollbar-webkit scrollbar-thumb pb-2">
          {events.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              location={event.location}
              startDate={event.startDate}
              endDate={event.endDate || undefined}
              url={event.Image.url}
            />
          ))}
        </div>
      ) : (
        <div>
          <EmptyEvents />
        </div>
      )}
    </div>
  );
};

export default ShowAllEvents;
