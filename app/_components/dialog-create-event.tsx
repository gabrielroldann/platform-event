"use client";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Calendar } from "./ui/calendar";
import { useState } from "react";
import { addDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { SaveEvent } from "../_actions/save-event";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface CreateEventDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CreateEventDialog = ({ open, setOpen }: CreateEventDialogProps) => {
  const { data } = useSession();
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("Presencial");
  const [image, setImage] = useState<string>("");
  const [eventStartDate, setEventStartDate] = useState<Date>(new Date());
  const [eventEndDate, setEventEndDate] = useState<Date>(
    addDays(new Date(), 7)
  );
  const initiallySelectedDates = [eventStartDate, eventEndDate];
  const [selectedDates, setSelectedDates] = useState(initiallySelectedDates);

  console.log("title: ", title);
  console.log("description: ", description);
  console.log("location: ", location);
  console.log("image: ", image);
  console.log("selectedDates: ", selectedDates);

  const [loading, setLoading] = useState(false);

  const handleCreateEvent = async () => {
    try {
      if (
        !title ||
        !description ||
        !location ||
        !image ||
        selectedDates.length === 0
      ) {
        return toast.info("Preencha todos os campos para criar o evento!", {
          duration: 2500,
        });
      }

      // if (selectedDates[0].getTime < selectedDates[1].getTime) {
      //   selectedDates[1] = selectedDates[0];
      // }

      setLoading(true);

      const newEvent = await SaveEvent({
        title: title,
        description: description,
        startDate: selectedDates[0],
        endDate: selectedDates[1],
        location: location,
        image: image,
        userId: (data?.user as any).id,
      });
      setLoading(false);

      toast.success("Evento criado com sucesso!", {
        duration: 2500,
      });

      router.push(`/event/${newEvent.id}`);
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao criar evento, tente novamente!", {
        description: "Se o erro persistir entre em contato com o suporte.",
        duration: 2500,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-8/12 max-h-[600px] overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl">Publicar Evento</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Adicione informações para criar o evento
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <Label htmlFor="title" className="text-base">
              Título do Evento
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Digite aqui.."
              className="text-base focus:shadow-[#044CF4]"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="image" className="text-base">
              Adicione uma Imagem para ser capa do Evento
            </Label>
            <Input
              id="image"
              type="file"
              placeholder="Foto do Evento"
              className="text-lg h-40"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="description" className="text-base">
              Dê uma descrição para o evento
            </Label>
            <Textarea
              id="description"
              className="text-base resize-none h-24"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <RadioGroup
            className="flex flex-col gap-1"
            defaultValue="presencial"
            onValueChange={setLocation}
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                value="Presencial"
                id="presencial"
                className="border-black text-black"
              />
              <Label htmlFor="presencial" className="text-base">
                Presencial
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem
                value="Online"
                id="online"
                className="border-black text-black"
                onSelect={() => setLocation("Online")}
              />
              <Label htmlFor="online" className="text-base">
                Online
              </Label>
            </div>
          </RadioGroup>
          <div className="flex flex-col gap-2 mt-1">
            <Label htmlFor="calendar" className="text-base">
              Selecione a data inicial e a data final (se tiver).
            </Label>
            <Calendar
              id="calendar"
              mode="multiple"
              className="w-full p-0"
              locale={ptBR}
              min={1}
              max={2}
              selected={selectedDates}
              onSelect={(dates) => setSelectedDates(dates ?? [])}
              fromDate={new Date()}
              styles={{
                caption: {
                  textTransform: "capitalize",
                },
                head_cell: {
                  textTransform: "capitalize",
                },
                nav_button_previous: {
                  width: "32px",
                  height: "32px",
                },
                nav_button_next: {
                  width: "32px",
                  height: "32px",
                },
              }}
            />
          </div>
          <DialogFooter className="w-full mt-2">
            <DialogClose asChild className="w-full">
              <Button variant={"outline"} className="w-full">
                Cancelar
              </Button>
            </DialogClose>
            <Button
              variant={"default"}
              className="w-full bg-[#044CF4] flex gap-1"
              onClick={handleCreateEvent}
            >
              {loading && <ReloadIcon className="w-5 h-5 animate-spin" />}
              Criar Evento
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventDialog;
