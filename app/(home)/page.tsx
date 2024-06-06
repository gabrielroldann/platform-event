"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import Header from "../_components/header";
import Body from "../_components/body";
import FAQ from "../_components/faq";
import Footer from "../_components/footer";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log("session: ", session);

  // TODO: separar dialog de registro e dialog de login
  // TODO: criar evento com imagem e ver se funciona no card
  // TODO: criar card e página de evento
  // TODO: criar pagina de todos os eventos / pagina de buscar de eventos
  // TODO: autenticar usuário com credentials

  return (
    <div>
      <div className="p-5 px-8 m-0">
        <Header />
        {/* {session?.user.name} */}
      </div>
      <div className="mt-8 w-full flex flex-col items-center justify-center">
        <div className="w-8/12 flex flex-col gap-6">
          <Body />
          <div className="mt-8">
            <FAQ />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
