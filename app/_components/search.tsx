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
        <CommandInput placeholder="Digite aqui.." />
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
              <CommandItem key={event.id} className="flex gap-1">
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
