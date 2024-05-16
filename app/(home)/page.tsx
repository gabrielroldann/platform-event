"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { db } from "../_lib/prisma";
import LoginPage from "../_components/login";
import ShowEvents from "../_components/show-events";
import LogoutButton from "../_components/logout-button";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const types = await db.typeUser.findMany();
  const events = await db.event.findMany();

  console.log(session);

  return (
    <div className="p-5 m-0">
      {session ? (
        <div>
          <div className="flex gap-2 items-center">
            <h1>Olá, {session!.user!.name}</h1>
            <LogoutButton />
          </div>

          <ShowEvents events={events} />
        </div>
      ) : (
        <div className="mt-24 flex flex-col gap-2 w-full justify-center items-center">
          <LoginPage types={types} />
        </div>
      )}
    </div>
  );
}
