"use server";

import EventCard from "@/app/_components/card-event";
import { db } from "@/app/_lib/prisma";
import EmptySearch from "./empty-search";

interface ShowEventsSearchProps {
  searchParam: string;
}

const ShowEventsSearch = async ({ searchParam }: ShowEventsSearchProps) => {
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
        contains: searchParam,
        mode: "insensitive",
      },
    },
    orderBy: {
      startDate: "asc",
    },
  });

  console.log(events);

  const listEvents = events.length;
  console.log(listEvents);

  return (
    <div>
      {listEvents > 0 ? (
        <div className="flex flex-wrap gap-3 min-w-72 overflow-x-auto scrollbar-webkit scrollbar-thumb pb-2">
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
          <EmptySearch />
        </div>
      )}
    </div>
  );
};

export default ShowEventsSearch;
