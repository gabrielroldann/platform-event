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

interface ShowEventsProps {
  events: Event[];
}

const ShowEvents = ({ events }: ShowEventsProps) => {
  const listEvents = events.length;

  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartDate, setEventStartDate] = useState<Date>(new Date());
  const [eventEndDate, setEventEndDate] = useState<Date>(
    addDays(new Date(), 1)
  );
  const [eventLocation, setEventLocation] = useState("");
  const [eventMaxParticipants, setEventMaxParticipants] = useState(0);

  // const [range, setRange] = useState<Date | undefined>();

  const initiallySelectedDates = [eventStartDate, eventEndDate];
  const [selectedDates, setSelectedDates] = useState(initiallySelectedDates);

  const numOfParticipants = [
    10, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750,
    800, 850, 900, 950, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000,
    5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000,
  ];

  return (
    <div>
      {listEvents > 0 ? (
        <div>
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
          <div className="w-full mt-6 flex flex-col gap-2 items-center justify-center">
            <p className="opacity-35 font-light">
              No momento não tem nenhum evento
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="font-light p-0 m-0 px-4">
                  Criar Evento
                </Button>
              </DialogTrigger>
              <DialogContent className="box-border">
                <DialogHeader>
                  <DialogTitle className="text-xl font-normal">
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
                  <div>
                    <RadioGroup defaultValue="Presencial">
                      <div className="flex gap-2 items-center">
                        <RadioGroupItem id="Presencial" value="Presencial" />
                        <Label
                          htmlFor="Presencial"
                          className="font-medium text-sm"
                        >
                          Presencial
                        </Label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <RadioGroupItem id="Online" value="Online" />
                        <Label htmlFor="Online" className="font-medium text-sm">
                          Online
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {/* dates */}
                  <div className="w-full flex items-center justify-center">
                    <Calendar
                      mode="multiple"
                      className="w-full p-0"
                      locale={ptBR}
                      max={2}
                      selected={selectedDates}
                      onSelect={(dates) => setSelectedDates(dates ?? [])}
                      fromDate={new Date()}
                      styles={{
                        head_cell: {
                          width: "65px",
                          textTransform: "capitalize",
                        },
                        table: {
                          maxWidth: "none",
                          width: "100%",
                        },
                        cell: {
                          width: "100%",
                        },
                        button: {
                          width: "100%",
                        },
                        nav_button_previous: {
                          width: "32px",
                          height: "32px",
                        },
                        nav_button_next: {
                          width: "32px",
                          height: "32px",
                        },
                        caption: {
                          textTransform: "capitalize",
                        },
                      }}
                    />
                  </div>
                </div>
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
