import Search from "@/app/_components/search";
import ShowEventsSearch from "./show-events-search";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeft } from "lucide-react";
import EmptySearch from "./empty-search";
import ShowEvents from "@/app/_components/show-events";

interface BodySearchProps {
  searchValue?: string;
}

const BodySearch = ({ searchValue }: BodySearchProps) => {
  return (
    <div className="flex flex-col gap-8 mt-2">
      <div className="w-full">
        <Search />
      </div>
      <div className="mt-6">
        <div>
          {searchValue ? (
            <div className="flex flex-col gap-6">
              <div className="w-full flex flex-col gap-2">
                <p className="text-lg">Resultados para busca "{searchValue}"</p>
                <ShowEventsSearch searchParam={searchValue} />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-medium">Sugestões</p>
                <ShowEvents />
              </div>
            </div>
          ) : (
            <EmptySearch />
          )}
        </div>
      </div>
    </div>
  );
};

export default BodySearch;
