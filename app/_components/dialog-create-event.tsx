"use client";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface CreateEventDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CreateEventDialog = ({ open, setOpen }: CreateEventDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-8/12">
        <DialogHeader>
          <DialogTitle className="text-2xl">Publicar Evento</DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="title" className="text-base">
              Título do Evento
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Digite aqui.."
              className="text-base focus:shadow-[#044CF4]"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventDialog;
