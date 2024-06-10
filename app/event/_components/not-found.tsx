"use client";

import Header from "@/app/_components/header";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <>
      <div className="p-5 px-8 m-0">
        <Header />
      </div>
      <div className="h-3/5 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-2xl font-normal">Evento não encontrado</p>
          <Button
            variant="default"
            className="flex gap-1 items-center"
            onClick={handleBack}
          >
            <ChevronLeft size={20} />
            <p className="text-base font-normal">
              Voltar para página de início
            </p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
