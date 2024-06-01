"use server";

import { db } from "../_lib/prisma";
import Search from "./search";
import ShowEvents from "./show-events";
import { Button } from "./ui/button";

const Body = async () => {
  const eventos = await db.event.findMany({
    include: {
      Image: true,
    },
  });
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <Search events={eventos} />
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium">Destaques</h1>
            <Button variant={"link"} className="text-base">
              Ver todos
            </Button>
          </div>
          <div className="mt-8">
            <ShowEvents events={eventos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
