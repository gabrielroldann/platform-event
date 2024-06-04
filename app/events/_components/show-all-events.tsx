"use server";

import { GetEvents } from "@/app/_actions/get-events";
import EventCard from "@/app/_components/card-event";
import EmptyEvents from "@/app/_components/empty-events";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { db } from "@/app/_lib/prisma";

const BodyAllEvents = async () => {
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

  const handleSearch = () => {};

  const listEvents = events.length;

  return (
    <div>
      <div className="w-full flex flex-col gap-4">
        <p className="text-xl font-medium">Todos os eventos</p>
        {listEvents > 0 ? (
          <div className="flex flex-wrap gap-3 overflow-x-auto scrollbar-webkit scrollbar-thumb pb-2">
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
    </div>
  );
};

export default BodyAllEvents;
