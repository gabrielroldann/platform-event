"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import LoginButton from "../_components/login-button";
import { Select, SelectItem } from "../_components/ui/select";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const types = await db.typeUser.findMany();

  console.log(session);

  return (
    <div className="px-5">
      {session ? (
        <div>
          <h1>Welcome {session!.user!.name}</h1>
        </div>
      ) : (
        <div className="mt-24 flex flex-col gap-2 w-full justify-center items-center">
          <Select></Select>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
