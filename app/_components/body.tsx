"use server";

import { Event } from "@prisma/client";
import { db } from "../_lib/prisma";
import Search from "./search";
import ShowEvents from "./show-events";
import { Button } from "./ui/button";

interface BodyProps {
  events: Event[];
}

const Body = async ({ events }: BodyProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <Search events={events} />
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
            <ShowEvents events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
