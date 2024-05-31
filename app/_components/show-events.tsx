import { Event } from "@prisma/client";
import google from "googleapis";

interface ShowEventsProps {
  events: Event[];
}

const ShowEvents = ({ events }: ShowEventsProps) => {
  const listEvents = events.length;

  return <div></div>;
};

export default ShowEvents;
