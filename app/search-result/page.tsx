"use server";

import FAQ from "../_components/faq";
import Footer from "../_components/footer";
import Header from "../_components/header";
import Search from "../_components/search";
import EmptySearch from "./_components/empty-search";
import ShowEventsSearch from "./_components/show-events-search";

interface SearchPageProps {
  params?: {
    search: string;
  };
}

const SearchPage = ({ params }: SearchPageProps) => {
  const search = params;
  console.log("param: ", params);
  return (
    <div className="h-screen">
      <div className="p-5 px-8 m-0">
        <Header />
      </div>
      <div className="mt-8 w-full flex flex-col items-center justify-center">
        <div className="w-8/12 flex flex-col gap-6">
          <Search />
          {/* {search === "" || search === undefined ? (
            <EmptySearch />
          ) : (
            <div className="flex flex-col gap-4">
              <p>Resultados para "{search}"</p>
              <ShowEventsSearch search={search} />
            </div>
          )} */}
          {search && (
            <div className="mt-8">
              <FAQ />
            </div>
          )}
        </div>
      </div>
      {search && <Footer />}
    </div>
  );
};

export default SearchPage;
