"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { db } from "../_lib/prisma";
import Header from "../_components/header";
import Body from "../_components/body";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const events = await db.event.findMany();

  console.log(session);

  // TODO: separar dialog de registro e dialog de login
  // TODO: criar evento com imagem e ver se funciona no card
  // TODO: criar card e página de evento
  // TODO: criar pagina de todos os eventos / pagina de buscar de eventos
  // TODO: autenticar usuário com credentials

  return (
    <div>
      <div className="p-5 px-8 m-0">
        <Header />
      </div>
      <div className="mt-8 w-full flex items-center justify-center">
        <div className="w-7/12">
          <Body events={events} />
        </div>
      </div>
    </div>
  );
}
