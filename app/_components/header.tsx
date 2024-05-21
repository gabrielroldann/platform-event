"use client";

import Image from "next/image";
import uniforlogo from "../../public/uniforlogo.svg";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { LogOut } from "lucide-react";

const Header = () => {
  const { data } = useSession();

  console.log(data);

  const handleLogin = () => {
    signIn("google");
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-7 items-center">
          <div className="flex text-center gap-2 items-center hover:cursor-pointer">
            <Image src={uniforlogo} alt="Unifor Logo" width={26} height={26} />
            <p className="h-fit text-[#044CF4] font-bold text-lg">
              UNIFOR EVENTS
            </p>
          </div>
          <div className="flex gap-1">
            <Button
              variant={"ghost"}
              className="text-lg font-medium rounded-xl"
            >
              Encontrar Evento
            </Button>
            <Button
              variant={"ghost"}
              className="text-lg underline text-[#044CF4] hover:text-[#044CF4] hover:no-underline font-medium rounded-xl"
            >
              Todos os Eventos Disponíveis
            </Button>
            <Button
              variant={"ghost"}
              className="text-lg font-medium rounded-xl"
            >
              Precisa de Ajuda?
            </Button>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Button
            variant={"default"}
            className="text-lg font-medium rounded-xl bg-[#044CF4]"
          >
            Publicar Evento
          </Button>
          {data ? (
            <div className="flex gap-2 items-center">
              {/* <Avatar>
                <AvatarImage src={data?.user?.image as any} />
              </Avatar> */}
              <Image
                src={data?.user?.image as any}
                alt={data?.user?.name as string}
                width={30}
                height={26}
                className="rounded-full cursor-pointer"
              />
              <Button
                variant={"link"}
                className="flex gap-1 items-center text-lg text-black font-medium rounded-xl"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                Sair
              </Button>
            </div>
          ) : (
            <Button
              variant={"link"}
              className="text-black text-lg font-medium rounded-xl"
              onClick={handleLogin}
            >
              Fazer Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
