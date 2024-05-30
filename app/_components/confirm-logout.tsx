"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface ConfirmLogoutDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ConfirmLogoutDialog = ({ open, setOpen }: ConfirmLogoutDialogProps) => {
  const handleLogout = () => {
    signOut();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">
            Confirmação
          </DialogTitle>
          <DialogDescription className="text-base text-black">
            Deseja deslogar do site?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-between w-full gap-2">
          <Button variant={"outline"} className="w-full">
            Cancelar
          </Button>
          <Button variant={"default"} onClick={handleLogout} className="w-full">
            Sair
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmLogoutDialog;
