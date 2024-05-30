"use client";

import { Event } from "@prisma/client";
import EmptyEvents from "./empty-events";
import { Card, CardContent, CardHeader } from "./ui/card";

interface ShowEventsProps {
  events: Event[];
}

const ShowEvents = ({ events }: ShowEventsProps) => {
  const listEvents = events.length;

  return (
    <div>
      {listEvents > 0 ? (
        <div className="flex gap-3">
          {/* {events.map((event) => (
            <Card key={event.id}>
              <CardContent key={event.id}>
                <p className="font-medium text-xl">{event.title}</p>
                <p className="text-muted-foreground">{event.location}</p>
              </CardContent>
            </Card>
          ))} */}
          <h1>EVENTS HERE</h1>
        </div>
      ) : (
        <EmptyEvents />
      )}
    </div>
  );
};

export default ShowEvents;
