"use client";

import Image from "next/image";
import uniforlogo from "../../public/uniforlogo.svg";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Loader, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CreateEventDialog from "./dialog-create-event";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Avatar, AvatarImage } from "./ui/avatar";
import Perfil from "./perfil";
import { Dialog, DialogContent } from "./ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { GetUser } from "../_actions/get-user";
import { User } from "@prisma/client";
import { toast } from "sonner";

const Header = () => {
  const { data } = useSession();
  const [currentUser, setCurrentUser] = useState<User | null>();

  const handleUser = async () => {
    const user = await GetUser(data?.user.email as string);
    setCurrentUser(user);
  };

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  const [openPerfil, setOpenPerfil] = useState(false);

  const escClicked = (e: KeyboardEvent) => {
    e.preventDefault();
  };

  const mouseOut = (e: PointerEvent) => {
    e.preventDefault();
  };

  const handleOpenPerfil = () => {
    setOpenPerfil(true);
  };

  const handleCloseAlertDialogLogout = () => {
    setOpenLogout(false);
  };

  const handlePublicarEvento = () => {
    if (data) {
      setOpen(true);
    } else {
      router.push("/login");
    }
  };

  const handleAuth = () => {
    signIn();
  };

  const handleLogout = () => {
    try {
      setLoading(true);
      signOut();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickAllEvents = () => {
    router.push("/events");
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className="animate__animated animate__fadeInDown">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div
            className="flex text-center gap-1 items-center hover:cursor-pointer"
            onClick={handleLogoClick}
          >
            <Image src={uniforlogo} alt="Unifor Logo" width={26} height={26} />
            <p className="h-fit text-[#044CF4] font-bold text-lg">
              UNIFOR EVENTS
            </p>
          </div>
          <div className="flex gap-1">
            <Button variant={"ghost"} className="text-base font-medium">
              Precisa de Ajuda?
            </Button>
            <Button
              variant={"ghost"}
              className="text-base underline text-[#044CF4] hover:text-[#044CF4] hover:no-underline font-medium"
              onClick={handleClickAllEvents}
            >
              Todos os Eventos Disponíveis
            </Button>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Button
            variant={"default"}
            className="text-base font-medium bg-[#044CF4]"
            onClick={handlePublicarEvento}
          >
            Publicar Evento
          </Button>
          <CreateEventDialog open={open} setOpen={setOpen} />
          {data ? (
            <div className="flex gap-2 items-center">
              {data.user.image && (
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Avatar>
                        <AvatarImage
                          src={data?.user?.image as string}
                          alt={data?.user?.name}
                          onClick={handleOpenPerfil}
                          className="cursor-pointer"
                        />
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Perfil</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              <Dialog
                modal={true}
                open={openPerfil}
                onOpenChange={setOpenPerfil}
              >
                <DialogContent onEscapeKeyDown={escClicked}>
                  <Perfil />
                </DialogContent>
              </Dialog>
              <AlertDialog open={openLogout} onOpenChange={setOpenLogout}>
                <AlertDialogTrigger asChild>
                  <Button
                    variant={"link"}
                    className="flex gap-1 items-center text-base text-black font-medium rounded-xl"
                  >
                    <LogOut size={16} />
                    Sair
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="font-normal text-2xl">
                      Confirmação
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-base">
                      Deseja deslogar do site?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex gap-2">
                    <Button
                      disabled={loading}
                      variant={"outline"}
                      className="w-full"
                      onClick={handleCloseAlertDialogLogout}
                    >
                      Cancelar
                    </Button>
                    <Button
                      disabled={loading}
                      variant={"default"}
                      onClick={handleLogout}
                      className="w-full bg-[#044CF4] flex gap-2"
                    >
                      {loading && (
                        <Loader
                          width={18}
                          height={18}
                          className="w-5 h-5 animate-spin"
                        />
                      )}
                      Deslogar
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ) : (
            <Button
              variant={"link"}
              className="text-black text-base font-medium"
              onClick={handleAuth}
            >
              Fazer Login / Cadastrar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
