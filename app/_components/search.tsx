"use client";

import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Event } from "@prisma/client";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

interface SearchProps {
  events: Event[];
}

const Search = ({ events }: SearchProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);
  return (
    <div>
      <Command className="border">
<<<<<<< HEAD
        <CommandInput placeholder="Digite aqui.." />
=======
        <CommandInput placeholder="Nome do evento" className="w-full text-base" />
>>>>>>> baa83078b0b8f3e67d59cda11c4f330c6257d69a
        <CommandList>
          {searchValue === "" ? (
            <CommandEmpty className="text-muted-foreground">
              Eventos não encontrados
            </CommandEmpty>
          ) : (
            <div></div>
          )}
          <CommandGroup>
            {events.map((event) => (
              <CommandItem>
                <p>{event.title}</p>
                <p>({event.location})</p>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default Search;
