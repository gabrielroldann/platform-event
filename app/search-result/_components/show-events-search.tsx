"use server";

import EventCard from "@/app/_components/card-event";
import EmptyEvents from "@/app/_components/empty-events";
import { db } from "@/app/_lib/prisma";

interface ShowEventsSearchProps {
  search: string;
}

const ShowEventsSearch = async ({ search }: ShowEventsSearchProps) => {
  const events = await db.event.findMany({
    include: {
      Image: {
        select: {
          url: true,
        },
      },
    },
    where: {
      title: {
        contains: search,
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
        <div className="flex gap-3 flex-wrap min-w-72 overflow-x-auto scrollbar-webkit scrollbar-thumb pb-2">
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

export default ShowEventsSearch;
