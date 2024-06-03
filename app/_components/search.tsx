"use client";

import { useState } from "react";
import { Event } from "@prisma/client";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchProps {
  allEvents: Event[];
}

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const enterClicked = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  console.log(searchValue);

  const handleSearch = async () => {
    if (
      !searchValue ||
      searchValue === "" ||
      searchValue === null ||
      searchValue === undefined ||
      searchValue.trim() === ""
    ) {
      return toast.info("Digite o nome de algum evento para pesquisar", {
        duration: 2000,
      });
    }

    const search = searchValue.trim();

    setLoading(true);

    router.push(`/search-result?search=${encodeURIComponent(search)}`);
  };

  return (
    <div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="search" className="font-normal text-lg">
          Busca rápida, digite o nome do evento abaixo:
        </Label>
        <div className="flex gap-1">
          <Input
            id="search"
            disabled={loading}
            placeholder="Exemplo: Céus Noturnos"
            className="text-base py-4"
            value={searchValue}
            onKeyDown={enterClicked}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button
            disabled={loading}
            variant={"default"}
            onClick={handleSearch}
            className="bg-[#044CF4] p-3 font-normal text-base"
          >
            {loading ? <Loader size={24} className="animate-spin" /> : "Buscar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
