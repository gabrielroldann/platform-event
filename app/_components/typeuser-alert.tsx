"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const TypeUserAlert = () => {
  const [typeUser, setTypeUser] = useState<string>("Participante");
  return (
    <AlertDialog>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl">
            Escolha seu tipo de usuário
          </AlertDialogTitle>
        </AlertDialogHeader>
        <RadioGroup>
          <RadioGroup
            className="flex flex-col gap-1"
            defaultValue="Participante"
            onValueChange={setTypeUser}
          >
            <div className="flex gap-1 items-center">
              <RadioGroupItem
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
                id="organizador"
                value="Organizador"
                className="border-black text-black"
              ></RadioGroupItem>
              <Label htmlFor="organizador" className="text-base font-normal">
                Organizador
              </Label>
            </div>
          </RadioGroup>
        </RadioGroup>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Salvar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TypeUserAlert;
