import Image from "next/image";
import uniforlogo from "../../public/uniforlogo.svg";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-7 items-center">
          <div className="flex text-center gap-2 items-center">
            <Image
              src={uniforlogo}
              alt="Unifor Logo"
              width={32}
              height={26}
              className="fill-[#044CF4] text-[#044CF4] bg-no-repeat"
            />
            <p className="h-fit text-[#044CF4] font-bold text-lg">
              UNIFOR EVENTS
            </p>
          </div>
          <div className="flex gap-1">
            <Button
              variant={"ghost"}
              className="text-lg font-medium rounded-xl"
            >
              Encontrar Evento
            </Button>
            <Button
              variant={"ghost"}
              className="text-lg text-[#044CF4] hover:text-[#044CF4] font-medium rounded-xl"
            >
              Todos os Eventos Disponíveis
            </Button>
            <Button
              variant={"ghost"}
              className="text-lg font-medium rounded-xl"
            >
              Precisa de Ajuda?
            </Button>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant={"ghost"} className="text-lg font-medium rounded-xl">
            Fazer Login
          </Button>
          <Button
            variant={"default"}
            className="text-lg font-medium rounded-xl bg-[#044CF4]"
          >
            Publicar Evento
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
