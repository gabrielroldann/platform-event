"use client";

import type { SignInResponse } from "next-auth/react";
import { Button } from "../../_components/ui/button";
import { Input } from "../../_components/ui/input";
import { Label } from "../../_components/ui/label";
import { Separator } from "../../_components/ui/separator";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Eye, EyeOff, Loader } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface LoginProps {
  animation: string;
  changeAnimation: () => void;
}

const Login = ({ animation, changeAnimation }: LoginProps) => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [pwVisible, setPwVisible] = useState<boolean>(false);

  const handlePwVisibility = () => {
    setPwVisible(!pwVisible);
  };

  // const handleCredentialLogin = async () => {
  //   try {
  //     if (!email || !password) return toast.error("Preencha todos os campos");
  //     setLoading(true);
  //     signIn("credentials", {
  //       email: email,
  //       password: password,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleCredentialLogin = () => {
    signIn("credentials", {
      redirect: true,
      email: email,
      password: password,
    });
  };

  const handleGoogleLogin = () => {
    signIn("google");
  };

  return (
    <div className={` ${animation} animate__faster`}>
      <div className="mb-3">
        <div className="text-2xl font-normal">Login</div>
        <div className="text-muted-foreground">
          Para publicar um evento, você precisa estar logado.
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-4">
        {/* INPUTS */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="text-base font-normal">
              Email
            </Label>
            <Input
              disabled={loading}
              id="email"
              type="email"
              placeholder="Exemplo: gabrielroldan@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-full flex gap-3 items-center">
              <Label htmlFor="password" className="text-base font-normal">
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
              disabled={loading}
              id="password"
              type={pwVisible ? "text" : "password"}
              placeholder="Digite aqui.."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <Button
          disabled={loading}
          variant={"default"}
          onClick={handleCredentialLogin}
        >
          {loading ? <Loader size={24} className="animate-spin" /> : "Entrar"}
        </Button>

        <div className="flex gap-1">
          <p className="text-base font-normal">Ainda não possui uma conta?</p>
          <p
            onClick={changeAnimation}
            className="text-base text-primary font-normal hover:underline hover:cursor-pointer"
          >
            Registre-se.
          </p>
        </div>

        {/* SEPARATORS */}
        <div className="flex justify-between gap-2 items-center">
          <Separator className="bg-muted-foreground w-5/12 opacity-40" />
          <p className="text-base">Ou</p>
          <Separator className="bg-muted-foreground w-5/12 opacity-40" />
        </div>

        {/* GOOGLE BUTTON */}
        <Button
          variant={"outline"}
          className="w-full flex gap-2 text-base font-normal shadow-sm hover:shadow-md transition-all duration-200"
          onClick={handleGoogleLogin}
        >
          {/* <Image src={iconGoogle2} alt="google.svg" width={30} height={30} /> */}
          Continuar com Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
