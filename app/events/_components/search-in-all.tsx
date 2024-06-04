// "use client";

// import { useEffect, useState } from "react";
// import { Event } from "@prisma/client";
// import { toast } from "sonner";
// import { Loader } from "lucide-react";
// import { Label } from "@/app/_components/ui/label";
// import { Input } from "@/app/_components/ui/input";
// import { Button } from "@/app/_components/ui/button";

// const SearchInAll = () => {
//   const [searchValue, setSearchValue] = useState<string>("");

//   console.log(searchValue);
//   const enterClicked = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleSearch = async () => {
//     if (
//       !searchValue ||
//       searchValue === "" ||
//       searchValue === null ||
//       searchValue === undefined ||
//       searchValue.trim() === ""
//     ) {
//       return toast.info("Digite o nome de algum evento para pesquisar", {
//         duration: 2000,
//       });
//     }
//     try {
//       const search = searchValue.trim();

//       setLastValueSearch(search);
//       setLoading(true);

//       router.push(`/search-result?search=${encodeURIComponent(search)}`);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//       setSearchValue("");
//     }
//   };

//   return (
//     <div>
//       <div className="flex flex-col gap-1">
//         <Label htmlFor="search" className="font-normal text-lg">
//           Busca rápida, digite o nome do evento abaixo:
//         </Label>
//         <div className="flex gap-1">
//           <Input
//             disabled={loading}
//             id="search"
//             placeholder="Exemplo: Céus Noturnos"
//             className="text-base py-4"
//             value={searchValue}
//             onKeyDown={enterClicked}
//             onChange={(e) => setSearchValue(e.target.value)}
//           />
//           <Button
//             disabled={loading}
//             variant={"default"}
//             onClick={handleSearch}
//             className="bg-[#044CF4] p-3 font-normal text-base"
//           >
//             {loading ? (
//               <Loader size={24} className="animated-spin" />
//             ) : (
//               "Buscar"
//             )}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchInAll;
