"use client";

import { useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Check,
  CheckCircle2,
  CheckCircleIcon,
  CheckSquare2,
  Loader,
  Pen,
  Pencil,
  PencilIcon,
  UserCircle2,
} from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { EditEmail, EditName, EditPassword } from "../_actions/edit-user";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { Button } from "./ui/button";

const Perfil = () => {
  const { data } = useSession();
  const [loading, setLoading] = useState<boolean>(false);
  const [editNameOpen, setEditNameOpen] = useState(false);
  const [editEmailOpen, setEditEmailOpen] = useState(false);
  const [editPasswordOpen, setEditPasswordOpen] = useState(false);
  const [newName, setNewName] = useState<string>(data?.user?.name as string);
  const [newEmail, setNewEmail] = useState<string>(data?.user?.email as string);
  const [newPassword, setNewPassword] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");

  const [pwVisible, setPwVisible] = useState<boolean>(false);

  const handlePwVisibility = () => {
    setPwVisible(!pwVisible);
  };

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

  const editPassword = async () => {
    if (oldPassword === "") {
      return toast.info("Digite sua senha antiga.", { duration: 3000 });
    }

    if (newPassword === "" || !newPassword) {
      return toast.info("Digite sua nova senha.", { duration: 3000 });
    }

    if (newPassword === oldPassword) {
      return toast.info("A nova senha não pode ser igual a antiga.", {
        duration: 3000,
      });
    }

    try {
      setLoading(true);
      const user = await EditPassword({
        email: data?.user?.email as string,
        newPassword: newPassword,
        oldPassword: oldPassword,
      });

      if (user.error !== undefined) {
        return toast.error(user.error, { duration: 3000 });
      }

      if (user.success !== undefined) {
        setEditPasswordOpen(false);
        return toast.success(user.success.message, { duration: 3000 });
      }
    } catch (error) {
      return toast.error("Erro ao trocar a senha, contate o suporte", {
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditNameOpen = () => {
    setEditNameOpen(!editNameOpen);
  };

  const handleEditEmailOpen = () => {
    setEditEmailOpen(!editEmailOpen);
  };

  const handleEditPasswordOpen = () => {
    setEditPasswordOpen(!editPasswordOpen);
  };
  return (
    <>
      <DialogHeader className="flex flex-col gap-1">
        <DialogTitle className="text-2xl font-normal self-center">
          {data?.user?.image ? (
            <Avatar className="w-32 h-32">
              <AvatarImage
                src={data?.user?.image as string}
                alt={data?.user?.name}
              />
            </Avatar>
          ) : (
            <UserCircle2 size={102} />
          )}
        </DialogTitle>
        <DialogDescription className="text-black font-normal text-2xl text-center flex gap-3 justify-center self-center w-fit items-center">
          {editNameOpen ? (
            <div className="flex gap-3 items-center h-fit">
              <Input
                disabled={loading}
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
      <div className="mt-3 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Label htmlFor="email" className="text-base font-normal">
            Email
          </Label>
          {editEmailOpen ? (
            <div className="flex gap-3 items-center w-full">
              <Input
                disabled={loading}
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
        <div className="mt-2">
          {!editPasswordOpen ? (
            <Button
              variant={"link"}
              className="p-0 mt-2"
              onClick={handleEditPasswordOpen}
            >
              Trocar senha
            </Button>
          ) : null}

          {editPasswordOpen && (
            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-2 items-center w-full">
                <Label
                  htmlFor="oldPassword"
                  className="text-base font-normal text-nowrap"
                >
                  Senha atual
                </Label>
                <Input
                  disabled={loading}
                  type={pwVisible ? "text" : "password"}
                  id="oldPassword"
                  placeholder="Digite aqui.."
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2 items-center w-full">
                <Label
                  htmlFor="newPassword"
                  className="text-base font-normal text-nowrap"
                >
                  Nova senha
                </Label>
                <Input
                  disabled={loading}
                  type={pwVisible ? "text" : "password"}
                  id="newPassword"
                  placeholder="Digite aqui.."
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="self-start flex justify-between w-full">
                {pwVisible ? (
                  <Button
                    variant={"link"}
                    className="self-start p-0"
                    onClick={handlePwVisibility}
                  >
                    Esconder senhas
                  </Button>
                ) : (
                  <Button
                    variant={"link"}
                    className="self-start p-0"
                    onClick={handlePwVisibility}
                  >
                    Ver senhas
                  </Button>
                )}
                <div className="flex gap-2">
                  <Button
                    disabled={loading}
                    variant={"outline"}
                    onClick={handleEditPasswordOpen}
                  >
                    Cancelar
                  </Button>
                  <Button
                    disabled={loading}
                    variant={"default"}
                    onClick={editPassword}
                  >
                    {loading ? (
                      <Loader size={24} className="animate-spin" />
                    ) : (
                      <p className="font-normal">Salvar senha</p>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button disabled={loading} variant={"outline"}>
            Fechar
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

export default Perfil;
