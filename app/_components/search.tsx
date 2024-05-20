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

interface SearchProps {
  events: Event[];
}

const Search = ({ events }: SearchProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div>
      <Command className="border">
        <CommandInput placeholder="Nome do evento" className="w-full" />
        <CommandList>
          {/* <CommandEmpty>Não foram encontrados eventos</CommandEmpty> */}
          <CommandGroup title="Eventos">
            {events.map((event) => (
              <CommandItem key={event.id}>{event.title}</CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default Search;
