"use client";

import { formatDate } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useRouter } from "next/navigation";

interface EventCardProps {
  id: string;
  title: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  url: string;
}

const EventCard = ({
  id,
  title,
  location,
  startDate,
  endDate,
  url,
}: EventCardProps) => {
  const router = useRouter();

  const formattedStartDate = formatDate(startDate, "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  const formattedEndDate = endDate
    ? formatDate(endDate, "dd 'de' MMMM 'de' yyyy", {
        locale: ptBR,
      })
    : null;

  const handleClickEventCard = () => {
    router.push(`/event/${id}`);
  };
  return (
    <>
      <Card
        className="min-w-72 max-w-72 min-h-64 max-h-64 p-0 border-none shadow-none duration-300 hover:scale-95 cursor-pointer"
        onClick={handleClickEventCard}
      >
        <CardHeader className="p-0 h-3/5 overflow-hidden rounded-xl">
          <img
            src={url}
            alt={"imagem"}
            className="rounded-tr-xl rounded-tl-xl object-cover object-center w-full h-full"
          />
        </CardHeader>
        <CardContent className="p-0 mt-1 relative">
          <div className="overflow-hidden text-nowrap text-ellipsis text-muted-foreground text-sm">
            {formattedEndDate ? (
              <>
                {formattedStartDate} - {formattedEndDate}
              </>
            ) : (
              formattedStartDate
            )}
          </div>
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
