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
      <Card>
        <CardHeader>
          <CardTitle>Eventos</CardTitle>
        </CardHeader>
        <CardContent>
          
        </CardContent>
      </Card>
    </div>
  );
};

export default ShowEvents;
