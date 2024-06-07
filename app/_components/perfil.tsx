"use client";

import { useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  Check,
  CheckCircle2,
  CheckCircleIcon,
  CheckSquare2,
  Pen,
  Pencil,
  PencilIcon,
} from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { EditEmail, EditName } from "../_actions/edit-user";
import { Label } from "./ui/label";
import { toast } from "sonner";

const Perfil = () => {
  const { data } = useSession();
  const [editNameOpen, setEditNameOpen] = useState(false);
  const [editEmailOpen, setEditEmailOpen] = useState(false);
  const [newName, setNewName] = useState<string>(data?.user?.name as string);
  const [newEmail, setNewEmail] = useState<string>(data?.user?.email as string);

  console.log(newName);

  const editName = async () => {
    if (newName === data?.user.name) {
      setEditNameOpen(false);
      return null;
    }

    if (newName !== "") {
      try {
        await EditName({
          email: data?.user?.email as string,
          newName: newName,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setEditNameOpen(false);
      }
    }
  };

  const submitEditName = () => {
    if (newName === data?.user.name) {
      setEditNameOpen(false);
      return null;
    }
    toast.promise(editName, {
      loading: "Salvando...",
      success: "Nome alterado com sucesso!",
      error: "Erro ao alterar o nome.",
    });
  };

  const editEmail = async () => {
    if (newEmail === data?.user.email) {
      setEditEmailOpen(false);
      return;
    }

    if (newEmail !== "") {
      try {
        await EditEmail({
          email: data?.user?.email as string,
          newEmail: newEmail,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setEditEmailOpen(false);
      }
    }
  };

  const submitEditEmail = () => {
    toast.promise(editEmail, {
      loading: "Salvando...",
      success: "Email alterado com sucesso!",
      error: "Erro ao alterar o email.",
    });
  };

  const handleEditNameOpen = () => {
    setEditNameOpen(!editNameOpen);
  };

  const handleEditEmailOpen = () => {
    setEditEmailOpen(!editEmailOpen);
  };
  return (
    <>
      <DialogHeader className="flex flex-col gap-1">
        <DialogTitle className="text-2xl font-normal self-center">
          <Avatar className="w-32 h-32">
            <AvatarImage
              src={data?.user?.image as string}
              alt={data?.user?.name}
            />
          </Avatar>
        </DialogTitle>
        <DialogDescription className="text-black font-normal text-2xl text-center flex gap-3 justify-center self-center w-fit items-center">
          {editNameOpen ? (
            <div className="flex gap-3 items-center h-fit">
              <Input
                autoFocus={true}
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onBlur={() => setEditNameOpen(false)}
                className="text-xl"
              />
              {newName === "" ? (
                <CheckCircle2 size={30} className="text-red-500" />
              ) : (
                <CheckCircle2
                  size={30}
                  className="transition-all duration-100 hover:text-green-500 cursor-pointer"
                  onClick={submitEditName}
                />
              )}
            </div>
          ) : (
            <div className="flex gap-3 items-center w-fit">
              {data?.user?.name}
              <Pen
                size={16}
                className="text-muted-foreground cursor-pointer"
                onClick={handleEditNameOpen}
              />
            </div>
          )}
        </DialogDescription>
      </DialogHeader>
      <div className="mt-3">
        <div className="flex gap-2 items-center">
          <Label htmlFor="email" className="text-base font-normal">
            Email
          </Label>
          {editEmailOpen ? (
            <div className="flex gap-3 items-center w-full">
              <Input
                autoFocus={true}
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                onBlur={() => setEditEmailOpen(false)}
                className="text-base"
              />
              {newEmail === "" ? (
                <CheckCircle2 size={30} className="text-red-500" />
              ) : (
                <CheckCircle2
                  size={30}
                  className="transition-all duration-100 hover:text-green-500 cursor-pointer"
                  onClick={submitEditEmail}
                />
              )}
            </div>
          ) : (
            <div className="flex gap-3 items-center px-3 justify-between w-full border-[2px] border-solid py-1 rounded-sm">
              {data?.user?.email}
              <Pen
                size={16}
                className="text-muted-foreground cursor-pointer"
                onClick={handleEditEmailOpen}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Perfil;
