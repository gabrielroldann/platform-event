"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const handleLogout = () => {
    signOut();
  };
  return (
    <div>
      <Button
        onClick={handleLogout}
        className="text-base font-normal px-6 flex gap-2 item-center"
      >
        <LogOut size={18} />
        Sair
      </Button>
    </div>
  );
};

export default LogoutButton;
