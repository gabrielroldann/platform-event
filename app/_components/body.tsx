"use server";

import Search from "./search";
import ShowEvents from "./show-events";
import { Button } from "./ui/button";

const Body = async () => {
  return (
    <div className="flex flex-col gap-8 mt-2">
      <div className="w-full animate__animated animate__fadeIn">
        <Search />
      </div>
      <div>
        <div className="flex flex-col gap-2 mt-6 animate__animated animate__fadeIn">
          <h1 className="text-2xl font-medium">Destaques</h1>
          <div className="mt-2">
            <ShowEvents />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 mt-6 animate__animated animate__fadeIn">
          <h1 className="text-2xl font-medium">Eventos Online</h1>
          <div className="mt-2">
            <ShowEvents eventType="Online" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 mt-6 animate__animated animate__fadeIn">
          <h1 className="text-2xl font-medium">Eventos Presenciais</h1>
          <div className="mt-2">
            <ShowEvents eventType="Presencial" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
