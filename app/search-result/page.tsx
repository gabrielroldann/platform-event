"use server";

import Header from "@/app/_components/header";
import BodySearch from "./_components/body-search";
import Footer from "../_components/footer";
import FAQ from "../_components/faq";
import { db } from "../_lib/prisma";

interface SearchPageProps {
  searchParams?: {
    search: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const searchValue = searchParams?.search;
  console.log(searchValue);

  const events = await db.event.findMany({
    include: {
      Image: {
        select: {
          url: true,
        },
      },
    },
    where: {
      title: {
        contains: searchValue,
      },
    },
    orderBy: {
      startDate: "asc",
    },
  });

  console.log(searchValue);

  return (
    <div>
      <div className="p-5 px-8 m-0">
        <Header />
      </div>
      <div className="mt-8 w-full flex flex-col items-center justify-center">
        <div className="w-8/12 flex flex-col gap-6">
          <BodySearch searchValue={searchValue} />
          <div className="mt-8">
            <FAQ />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
