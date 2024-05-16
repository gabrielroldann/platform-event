"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { TypeUser } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

interface LoginPageProps {
  types: TypeUser[];
}

const LoginPage = ({ types }: LoginPageProps) => {
  // const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(false);

  // console.log(selectedType);

  const handleLogin = () => {
    try {
      setLoading(true);
      signIn("google");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="flex flex-col gap-2 justify-center items-center p-0 m-0">
      <CardHeader>
        <CardTitle className="font-medium text-lg">Faça seu Login</CardTitle>
      </CardHeader>
      <CardContent className="p-0 px-5 py-4 flex flex-col gap-2">
        <p className="text-center">
          Selecione o tipo de usuário
          <br /> para efetuar seu login
        </p>
        {/* <Select onValueChange={setSelectedType} value={selectedType}>
          <SelectTrigger>
            <SelectValue placeholder={"Tipo de Usuário"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {types.map((type: any) => (
                <SelectItem key={type.id} value={type.id}>
                  {type.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select> */}
        <Button
          // disabled={!selectedType}
          className="px-5 py-4 font-normal text-sm w-full flex justify-center items-center gap-2"
          onClick={handleLogin}
        >
          {loading ? <ReloadIcon className="w-4 h-4 animate-spin" /> : null}
          Login com Google
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
