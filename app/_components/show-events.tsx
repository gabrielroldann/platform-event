"use server";

import { Event } from "@prisma/client";
import { db } from "../_lib/prisma";
import EventCard from "./card-event-body";
import { ScrollArea } from "./ui/scroll-area";

interface ShowEventsProps {
  events: Event[];
}

const ShowEvents = async ({ events }: ShowEventsProps) => {
  const listEvents = events.length;

  const eventos = await db.event.findMany({
    include: {
      Image: {
        select: {
          url: true,
        },
      },
    },
  });

  return (
    <div>
      {listEvents > 0 ? (
        <div className="flex gap-3 min-w-72 overflow-x-auto scrollbar-webkit scrollbar-thumb pb-2">
          {eventos.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              location={event.location}
              startDate={event.startDate}
              endDate={event.endDate || undefined}
              url={event.Image.url}
            />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ShowEvents;
