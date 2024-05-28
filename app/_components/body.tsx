"use server";

import { db } from "../_lib/prisma";
import Search from "./search";
import ShowEvents from "./show-events";
import { Button } from "./ui/button";

const Body = async () => {
  const events = await db.event.findMany();
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Search events={events} />
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-medium">Destaques</h1>
            <Button variant={"link"} className="text-lg">
              Ver todos
            </Button>
          </div>
          <div className="mt-8">
            <ShowEvents events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
