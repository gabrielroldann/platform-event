"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import Image from "next/image";
import iconGoogle from "../../public/iconGoogle.svg";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AuthDialog = ({ open, setOpen }: AuthDialogProps) => {
  const [nomeCompleto, setNomeCompleto] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [pwVisible, setPwVisible] = useState<boolean>(false);
  const [pwType, setPwType] = useState<string>("password");

  const handlePwVisibility = () => {
    setPwVisible(!pwVisible);
  };

  const handleCredentialLogin = () => {};
  const handleGoogleLogin = () => {
    signIn("google");
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-8/12 max-h-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-medium">
            Entrar ou Criar Conta
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-center">
            Para publicar um evento, você precisa estar logado
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          {/* INPUTS */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <Label htmlFor="nome" className="text-sm font-normal">
                Nome Completo
              </Label>
              <Input
                id="nome"
                type="text"
                placeholder="Exemplo: Gabriel Roldan"
                onChange={(e) => setNomeCompleto(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="email" className="text-sm font-normal">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Exemplo: gabrielroldan@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-full flex gap-3 items-center">
                <Label htmlFor="password" className="text-sm font-normal">
                  Senha
                </Label>
                {pwVisible ? (
                  <Eye
                    size={14}
                    className="cursor-pointer opacity-55"
                    onClick={handlePwVisibility}
                  />
                ) : (
                  <EyeOff
                    size={14}
                    className="cursor-pointer opacity-55"
                    onClick={handlePwVisibility}
                  />
                )}
              </div>
              <Input
                id="password"
                type={pwVisible ? "text" : "password"}
                placeholder="Digite aqui.."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="confirmPassword" className="text-sm font-normal">
                Confirme sua senha
              </Label>
              <Input
                id="confirmPassword"
                type={pwVisible ? "text" : "password"}
                placeholder="Digite aqui.."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button
            disabled={!nomeCompleto || !email || !password}
            variant={"default"}
          >
            Registrar
          </Button>

          {/* SEPARATORS */}
          <div className="flex justify-between gap-2 items-center">
            <Separator className="bg-muted-foreground w-5/12 opacity-40" />
            <p className="text-base">Ou</p>
            <Separator className="bg-muted-foreground w-5/12 opacity-40" />
          </div>

          {/* GOOGLE BUTTON */}
          <Button
            variant={"outline"}
            className="w-full flex gap-2 text-base font-normal"
            onClick={handleGoogleLogin}
          >
            <Image src={iconGoogle} alt="google.svg" width={34} height={34} />
            Continuar com Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
