"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const LogoutButton = () => {
  const handleLogout = () => {
    signOut();
  };
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default LogoutButton;
