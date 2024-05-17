"use client";

import { Event } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Calendar } from "./ui/calendar";
import { ptBR } from "date-fns/locale";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { SaveEvent } from "../_actions/save-event";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { RefreshCcw } from "lucide-react";

interface ShowEventsProps {
  events: Event[];
}

const ShowEvents = ({ events }: ShowEventsProps) => {
  const { data } = useSession();
  const [loading, setLoading] = useState(false);
  // TODO: Verificar e organizar as datas (startDate e endDate) dos eventos
  // TODO: Passar o eventMaxParticipants para Number

  const listEvents = events.length;

  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartDate, setEventStartDate] = useState<Date>(new Date());
  const [eventEndDate, setEventEndDate] = useState<Date>(
    addDays(new Date(), 7)
  );
  const [eventLocation, setEventLocation] = useState("Presencial");
  // const [eventMaxParticipants, setEventMaxParticipants] = useState("Ilimitado");

  const initiallySelectedDates = [eventStartDate, eventEndDate];
  const [selectedDates, setSelectedDates] = useState(initiallySelectedDates);

  const handleCreateEvent = async () => {
    try {
      // if (!data) return null;

      setLoading(true);

      const newEvent = await SaveEvent({
        title: eventTitle,
        description: eventDescription,
        location: eventLocation,
        // maxParticipants: Number(eventMaxParticipants),
        startDate: selectedDates[0],
        endDate: selectedDates[1],
        userId: (data!.user as any).id,
      });

      toast.success("Evento criado com sucesso!", {
        duration: 2000,
      });
    } catch (error) {
      toast.error("Erro ao criar evento. Tente novamente mais tarde.", {
        duration: 2000,
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {listEvents > 0 ? (
        <div className="mt-6">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full mt-6 flex flex-col gap-3  items-center justify-center">
            <p className="opacity-55 font-normal text-xl text-muted-foreground">
              Nenhum evento registrado no momento
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="text-lg font-normal px-7 py-6 flex">
                  Criar Evento
                </Button>
              </DialogTrigger>
              <DialogContent className="w-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-normal">
                    Criar um Evento
                  </DialogTitle>
                  <DialogDescription>
                    Preencha os campos com as informações do evento que você
                    deseja criar
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-3 flex flex-col gap-3">
                  {/* title */}
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="title" className="font-medium text-sm">
                      Título/Nome do Evento
                    </Label>
                    <Input
                      id="title"
                      type="text"
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                    />
                  </div>
                  {/* description */}
                  <div className="flex flex-col gap-1">
                    <Label
                      htmlFor="description"
                      className="font-medium text-sm"
                    >
                      Descrição (detalhamento do evento)
                    </Label>
                    <Textarea
                      id="description"
                      className="h-auto resize-none"
                      value={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
                    />
                  </div>
                  {/* presencial/online */}
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="location" className="font-medium text-sm">
                      Qual é o formato do evento?
                    </Label>
                    <RadioGroup
                      defaultValue={eventLocation}
                      onValueChange={setEventLocation}
                      id="location"
                    >
                      <div className="flex gap-2 items-center">
                        <RadioGroupItem id="Presencial" value="Presencial" />
                        <Label
                          htmlFor="Presencial"
                          className="font-medium text-sm hover:cursor-pointer"
                        >
                          Presencial
                        </Label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <RadioGroupItem id="Online" value="Online" />
                        <Label
                          htmlFor="Online"
                          className="font-medium text-sm hover:cursor-pointer"
                        >
                          Online
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* dates */}
                  <div className="mt-3 w-full flex items-center justify-center">
                    <Calendar
                      mode="multiple"
                      className="w-full p-0"
                      locale={ptBR}
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
                </div>
                <DialogFooter className="mt-4">
                  <Button
                    disabled={
                      loading ||
                      !eventTitle ||
                      !eventDescription ||
                      !eventLocation
                    }
                    className="w-full text-base font-normal p-0 px-8 py-5 self-center flex gap-2"
                    onClick={handleCreateEvent}
                  >
                    {loading ? (
                      <RefreshCcw className="w-4 h-4 animate-spin" />
                    ) : null}
                    Criar Evento
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {/* Mobile Drawer
            <Drawer>
              <DrawerTrigger asChild>
                <Button className="font-light p-0 m-0 px-4">
                  Criar Evento
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="text-xl font-normal">
                    Criar um Evento
                  </DrawerTitle>
                  <DrawerDescription>
                    Dê informações do evento que você deseja criar
                  </DrawerDescription>
                </DrawerHeader>
              </DrawerContent>
            </Drawer> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowEvents;
