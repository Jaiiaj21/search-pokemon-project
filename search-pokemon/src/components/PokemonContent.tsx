"use client"
import PokemonResult from "@/components/PokemonResult";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, Suspense, useMemo, useState } from "react";

const PokemonContent = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const searchParams = useSearchParams();
  const searchName = searchParams.get('name');
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value);
  }

  const handleSearch = (): void => {
    router.push(`/?name=${searchInput}`);
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLElement>): void => {
    if (event.key === 'Enter') {
      console.log(event.key, 'keyeee;liefhaposehfopah')
      router.push(`/?name=${searchInput}`);
    }
  };

  const pokemonResultComponent = useMemo(() => {
    return (
      <>
        {!!searchName &&
          <Suspense fallback={<p>loading...</p>}>
            <PokemonResult name={searchName} />
          </Suspense>
        }
      </>
    )
  }, [searchName])

  return (
    <div className="bg-white rounded-lg p-8 max-w-[80%] w-full">
      <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8 tracking-tight">
        Pokemon Explorer
      </h1>

      {/* Search Input Component */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 mx-[15%]">
        <input
          type="text"
          placeholder="Enter Pokemon name (e.g., Pikachu)"
          value={searchInput}
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
          className="flex-grow w-full sm:w-auto p-4 border-2 border-indigo-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-transparent text-lg transition-all duration-300 ease-in-out"
          aria-label="Pokemon search input"
        />
        <button
          onClick={handleSearch}
          className="w-full sm:w-auto px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:cursor-pointer"
        >
          Search
        </button>
      </div>

      {/* Pokemon Result Component */}
      <div className="w-full flex justify-center">
        {pokemonResultComponent}
      </div>

    </div>
  )
}

export default PokemonContent;
