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
    <div className="flex flex-col gap-2 items-center mt-6">
      <p>Não existe uma busca ou ocorreu algum erro na busca</p>
      <Button
        variant={"default"}
        onClick={handleBackHomePage}
        className="flex gap-2"
      >
        <ChevronLeft size={16} />
        Voltar para a página inicial
      </Button>
    </div>
  );
};

export default EmptySearch;
