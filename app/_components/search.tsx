"use client";

import { useState } from "react";
import { Event } from "@prisma/client";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface SearchProps {
  allEvents: Event[];
}

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = () => {
    if (searchValue === "")
      return toast.info("Digite o nome de algum evento para pesquisar", {
        duration: 2000,
      });
  };

  return (
    <div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="search" className="font-normal text-lg">
          Pesquisa rápida de um evento, digite o nome do evento abaixo:
        </Label>
        <div className="flex gap-1">
          <Input
            id="search"
            placeholder="Exemplo: Céus Noturnos"
            className="text-base py-4"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button
            variant={"default"}
            onClick={handleSearch}
            className="bg-[#044CF4] p-3 font-normal text-base"
          >
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
