import FAQ from "../_components/faq";
import Footer from "../_components/footer";
import Header from "../_components/header";
import Search from "../_components/search";
import ShowAllEvents from "./_components/show-all";

const AllEventsPage = () => {
  return (
    <div>
      <div className="p-5 px-8 m-0">
        <Header />
      </div>
      <div className="mt-8 w-full flex flex-col items-center justify-center">
        <div className="w-8/12 flex flex-col gap-6">
          <Search />
          <div className="w-full flex flex-col gap-4">
            <p className="text-xl font-normal">Todos os eventos</p>
            <ShowAllEvents />
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
