"use server";

import Header from "@/app/_components/header";
import { authOptions } from "@/app/_lib/auth";
import { db } from "@/app/_lib/prisma";
import { Calendar, ChevronLeft } from "lucide-react";
import { getServerSession } from "next-auth";
import NotFound from "../_components/not-found";
import { Badge } from "@/app/_components/ui/badge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import FAQ from "@/app/_components/faq";
import ShowEvents from "@/app/_components/show-events";
import ButtonSubscription from "../_components/button-subscription";
import Image from "next/image";

interface EventPageParams {
  params: {
    id?: string;
  };
}

const EventPage = async ({ params }: EventPageParams) => {
  const session = await getServerSession(authOptions);

  if (!params.id) {
    return null;
  }

  const currentEvent = await db.event.findUnique({
    where: {
      id: params.id,
    },
    include: {
      Image: true,
    },
  });

  const formattedStartDate = format(
    currentEvent?.startDate!,
    "EEEE',' dd 'de' MMMM 'de' yyyy",
    {
      locale: ptBR,
    }
  );

  const displayStartDate =
    formattedStartDate[0].toUpperCase() + formattedStartDate.slice(1);

  const formattedEndDate = currentEvent?.endDate
    ? format(currentEvent?.endDate, "EEEE',' dd 'de' MMMM 'de' yyyy", {
        locale: ptBR,
      })
    : null;

  const displayEndDate =
    formattedEndDate &&
    formattedEndDate[0].toUpperCase() + formattedEndDate.slice(1);

  return (
    <div>
      {currentEvent ? (
        <div>
          <div className="p-5 px-8 m-0">
            <Header />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="mt-6 w-8/12 flex flex-col gap-2">
              <Image
                src={currentEvent.Image.url}
                alt={currentEvent.title}
                width={800}
                height={430}
                className="rounded-xl object-cover w-full self-center max-h-[430px]"
              />
              <div className="self-start mt-4 w-full flex flex-col gap-4">
                <div className="w-full flex justify-between items-center">
                  <p className="text-4xl font-normal text-nowrap text-ellipsis">
                    {currentEvent.title}
                  </p>
                  {session && (
                    <ButtonSubscription
                      id={params.id}
                      userId={session.user.id}
                      endDate={currentEvent.endDate}
                    />
                  )}
                </div>
                <Badge className="w-fit font-normal text-sm">
                  {currentEvent.location.toUpperCase()}
                </Badge>
                <div className="flex gap-2 items-center">
                  <Calendar size={34} />
                  <p className="text-lg">
                    {formattedEndDate ? (
                      <>
                        {displayStartDate} até {displayEndDate}
                      </>
                    ) : (
                      formattedStartDate
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-20 flex flex-col gap-2">
                <p className="text-2xl font-medium">Sugestões</p>
                <ShowEvents />
              </div>
              <div className="mt-8">
                <FAQ />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen">
          <NotFound />
        </div>
      )}
    </div>
  );
};

export default EventPage;
