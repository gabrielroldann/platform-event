"use server";

import { db } from "../_lib/prisma";
import Search from "./search";

const Body = async () => {
  const events = await db.event.findMany();
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Search events={events} />
      </div>
      <div>
        <h1 className="text-3xl font-medium">Destaques</h1>
      </div>
    </div>
  );
};

export default Body;
