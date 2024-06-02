"use server";

import { db } from "../_lib/prisma";
import Search from "./search";
import ShowEvents from "./show-events";
import { Button } from "./ui/button";

const Body = async () => {
  const allEvents = await db.event.findMany({
    include: {
      Image: true,
    },
  });

  return (
    <div className="flex flex-col gap-8 mt-2">
      <div className="w-full">
        <Search />
      </div>
      <div>
        <div className="flex flex-col gap-2 mt-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium">Destaques</h1>
            <Button variant={"link"} className="text-base">
              Ver todos
            </Button>
          </div>
          <div className="mt-2">
            <ShowEvents />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 mt-6">
          <h1 className="text-2xl font-medium">Eventos Online</h1>
          <div className="mt-2">
            <ShowEvents eventType="Online" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 mt-6">
          <h1 className="text-2xl font-medium">Eventos Presenciais</h1>
          <div className="mt-2">
            <ShowEvents eventType="Presencial" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
