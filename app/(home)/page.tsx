"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import LoginButton from "../_components/login-button";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <div className="px-5">
      {session ? (
        <div>
          <h1>Welcome {session!.user!.email}</h1>
        </div>
      ) : (
        <div className="mt-24 flex flex-col gap-2 w-full justify-center items-center">
          <LoginButton />
        </div>
      )}
    </div>
  );
}
