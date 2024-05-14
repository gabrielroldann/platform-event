"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

const LoginButton = () => {
  const handleLogin = () => {
    signIn("google");
  };

  return (
    <div className="flex justify-center items-center w-full">
      <Button
        className="px-10 py-8 font-normal w-1/3 text-xl"
        onClick={handleLogin}
      >
        Login com Google
      </Button>
    </div>
  );
};

export default LoginButton;
