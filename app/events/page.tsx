"use server";

import { getServerSession } from "next-auth";
import FAQ from "../_components/faq";
import Footer from "../_components/footer";
import Header from "../_components/header";
import Search from "../_components/search";
import BodyAllEvents from "./_components/show-all-events";
import { authOptions } from "../_lib/auth";

const AllEventsPage = () => {
  const session = getServerSession(authOptions);

  return (
    <div>
      <div className="p-5 px-8 m-0">
        <Header />
      </div>
      <div className="mt-8 w-full flex flex-col items-center justify-center animate__animated animate__fadeIn">
        <div className="w-8/12 flex flex-col gap-6">
          <Search />
          <div className="w-full flex flex-col gap-4">
            <BodyAllEvents />
          </div>
          <div className="mt-8">
            <FAQ />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllEventsPage;
