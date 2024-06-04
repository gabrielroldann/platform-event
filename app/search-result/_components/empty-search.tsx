"use client";

import { Button } from "@/app/_components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const EmptySearch = () => {
  const router = useRouter();
  const handleBackHomePage = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col gap-4 items-center mt-12 mb-12">
      <p className="text-center">
        Não foram encontrados resultados para a sua busca.
      </p>
      <Button
        onClick={handleBackHomePage}
        className="flex gap-2 bg-[#044CF4] font-normal"
      >
        <ChevronLeft size={16} />
        Voltar para a página inicial
      </Button>
    </div>
  );
};

export default EmptySearch;
