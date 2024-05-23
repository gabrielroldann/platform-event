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
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { TypeUser } from "@prisma/client";
import { LogIn, RefreshCcw } from "lucide-react";

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
        <Button
          className="text-xl font-normal px-8 py-6 flex gap-2 item-center"
          onClick={handleLogin}
        >
          {loading ? <RefreshCcw className="w-4 h-4 animate-spin" /> : null}
          <LogIn size={18} />
          Login com Google
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
