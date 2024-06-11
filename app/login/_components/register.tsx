"use client";

import { Button } from "../../_components/ui/button";
import { Input } from "../../_components/ui/input";
import { Label } from "../../_components/ui/label";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Eye, EyeOff, Loader } from "lucide-react";
import { RegisterUser } from "../../_actions/register";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/app/_components/ui/radio-group";

interface RegisterProps {
  animation: string;
  changeAnimation: () => void;
}

const Register = ({ animation, changeAnimation }: RegisterProps) => {
  const router = useRouter();

  const [nomeCompleto, setNomeCompleto] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [typeUser, setTypeUser] = useState<string>("Participante");

  const [loading, setLoading] = useState<boolean>(false);

  const [pwVisible, setPwVisible] = useState<boolean>(false);

  const handlePwVisibility = () => {
    setPwVisible(!pwVisible);
  };

  // const handleGoogleLogin = () => {
  //   signIn("google", {});
  // };

  console.log(typeUser);

  const handleRegister = async () => {
    if (!nomeCompleto || !email || !password || !confirmPassword || !typeUser) {
      return toast.info("Preencha todos os campos", { duration: 3000 });
    }
    try {
      setLoading(true);
      const user = await RegisterUser({
        name: nomeCompleto,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        typeUser: typeUser,
      });

      console.log(user);

      if (user.error !== undefined) {
        return toast.error(user.error, { duration: 3000 });
      }

      if (user.success !== undefined) {
        await signIn("credentials", {
          callbackUrl: "/",
          email,
          password,
        }).then((data) => {
          if (data?.error) {
            return toast.error(data.error, { duration: 3000 });
          }

          if (data?.ok) {
            toast.success("Login efetuado com sucesso!", {
              description: "Redirecionando...",
              duration: 3000,
            });
            router.push("/");
          }
        });
        return toast.success(user.success.message, { duration: 3000 });
      }
    } catch (error) {
      toast.error("Erro ao registrar, contate o suporte", { duration: 3000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${animation} animate__faster`}>
      <div className="mb-3">
        <div className="text-2xl font-normal">Cadastro</div>
        <div className="text-muted-foreground">
          Para publicar um evento, você precisa estar logado.
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {/* INPUTS */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="nome" className="text-base font-normal">
              Nome Completo
            </Label>
            <Input
              disabled={loading}
              id="nome"
              type="text"
              placeholder="Exemplo: Gabriel Roldan"
              onChange={(e) => setNomeCompleto(e.target.value)}
            />
          </div>
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
          <div className="flex flex-col gap-1">
            <Label htmlFor="confirmPassword" className="text-base font-normal">
              Confirme sua senha
            </Label>
            <Input
              disabled={loading}
              id="confirmPassword"
              type={pwVisible ? "text" : "password"}
              placeholder="Digite aqui.."
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <RadioGroup
            className="flex flex-col gap-1"
            defaultValue="Participante"
            onValueChange={setTypeUser}
          >
            <div className="flex gap-1 items-center">
              <RadioGroupItem
                disabled={loading}
                id="participante"
                value="Participante"
                className="border-black text-black"
              ></RadioGroupItem>
              <Label htmlFor="participante" className="text-base font-normal">
                Participante
              </Label>
            </div>
            <div className="flex gap-1 items-center">
              <RadioGroupItem
                disabled={loading}
                id="organizador"
                value="Organizador"
                className="border-black text-black"
              ></RadioGroupItem>
              <Label htmlFor="organizador" className="text-base font-normal">
                Organizador
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Button disabled={loading} onClick={handleRegister} variant={"default"}>
          {loading ? (
            <Loader size={24} className="animate-spin" />
          ) : (
            <p className="text-base font-normal">Cadastrar</p>
          )}
        </Button>

        <div className="flex gap-1">
          <p className="text-base font-normal">Ja possui uma conta?</p>
          <p
            onClick={changeAnimation}
            className="text-base text-primary font-normal hover:underline hover:cursor-pointer"
          >
            Faça login.
          </p>
        </div>

        {/* SEPARATORS */}
        {/* <div className="flex justify-between gap-2 items-center">
          <Separator className="bg-muted-foreground w-5/12 opacity-40" />
          <p className="text-base">Ou</p>
          <Separator className="bg-muted-foreground w-5/12 opacity-40" />
        </div> */}

        {/* GOOGLE BUTTON */}
        {/* <Button
          disabled={loading}
          variant={"outline"}
          className="w-full flex gap-2 text-base font-normal shadow-sm hover:shadow-md transition-all duration-200"
          onClick={handleGoogleLogin}
        >
          <Image src={iconGoogle2} alt="google.svg" width={30} height={30} />
          Continuar com Google
        </Button> */}
      </div>
    </div>
  );
};

export default Register;
