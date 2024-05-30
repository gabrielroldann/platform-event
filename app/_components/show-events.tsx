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
          {events.map((event) => (
            <Card>
              <CardHeader>{event.image}</CardHeader>
              <CardContent>
                {/* TODO: se tiver startDate e endDate => printar: ( startDate até endDate ) */}
                {/* Se não tiver apenas mostrar startDate */}
                <div>
                  <p className="font-medium text-xl">{event.title}</p>
                  <p className="text-muted-foreground">{event.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyEvents />
      )}
    </div>
  );
};

export default ShowEvents;
