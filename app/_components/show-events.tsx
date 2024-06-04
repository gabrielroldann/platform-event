"use server";

import { db } from "../_lib/prisma";
import EventCard from "./card-event";
import EmptyEvents from "./empty-events";

interface ShowEventsProps {
  eventType?: string;
}

const ShowEvents = async ({ eventType }: ShowEventsProps) => {
  // const eventos = await db.event.findMany({
  //   take: 8,
  //   include: {
  //     Image: {
  //       select: {
  //         url: true,
  //       },
  //     },
  //   },
  //   where: eventType ? { location: eventType } : {},
  //   orderBy: {
  //     startDate: "asc",
  //   },
  // });

  // const listEvents = eventos.length;

  return (
    <div>
      {/* {listEvents > 0 ? (
        <div className="flex gap-3 min-w-72 overflow-x-auto scrollbar-webkit scrollbar-thumb pb-2">
          {eventos.map((event) => (
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
      )} */}
    </div>
  );
};

export default ShowEvents;
