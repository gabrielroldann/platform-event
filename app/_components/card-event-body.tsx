"use client";

import { formatDate } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

interface EventCardProps {
  title: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  url: string;
}

const EventCard = ({
  title,
  location,
  startDate,
  endDate,
  url,
}: EventCardProps) => {
  return (
    <>
      <Card className="min-w-96 max-w-72 min-h-48 max-h-64 p-0 border-none shadow-none duration-300 hover:scale-95">
        <CardHeader className="p-0 h-3/5 overflow-hidden rounded-xl">
          <img
            src={url}
            alt={"imagem"}
            className="rounded-tr-xl rounded-tl-xl object-cover object-center w-full h-full"
          />
        </CardHeader>
        <CardContent className="p-0 mt-1 relative">
          <p className="overflow-hidden text-nowrap text-ellipsis  text-muted-foreground text-sm">
            {formatDate(startDate, "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR,
            })}
          </p>
          <p className="overflow-hidden text-ellipsis text-lg font-medium">
            {title}
          </p>
          <p className="overflow-hidden text-ellipsis text-nowrap text-sm">
            {location}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default EventCard;
