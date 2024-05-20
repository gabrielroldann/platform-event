"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { db } from "../_lib/prisma";
import LoginPage from "../_components/login";
import ShowEvents from "../_components/show-events";
import LogoutButton from "../_components/logout-button";
import Header from "../_components/header";
import uniforlogo from "../public/unifor-logo.png";
import Body from "../_components/body";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const types = await db.typeUser.findMany();
  const events = await db.event.findMany();

  console.log(session);

  return (
    <div>
      <div className="p-5 px-8 m-0">
        <Header />
      </div>
      <div className="mt-8 w-full flex items-center justify-center">
        <div className="w-7/12">
          <Body />
        </div>
      </div>
    </div>
  );
}
