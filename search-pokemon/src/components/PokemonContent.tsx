"use client"
import PokemonResult from "@/components/PokemonResult";
import Image from "next/image";
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
      router.push(`/?name=${searchInput}`);
    }
  };

  const pokemonResultComponent = useMemo(() => {
    return (
      <>
        {searchName &&
          <Suspense fallback={
            <div className="my-4">
              <Image
                src={'/pokeball_loading.png'}
                alt="loading..."
                width={30}
                height={30}
                className="animate-spin"
              />
            </div>
          }>
            <PokemonResult name={searchName} />
          </Suspense>
        }
      </>
    )
  }, [searchName])

  return (
    <div className="bg-white rounded-lg p-8 md:max-w-[80%] w-full mt-8 shadow-xl">
      <h1 className="text-4xl font-extrabold text-center mb-8 tracking-tight text-zinc-500">
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
          className="flex-grow w-full sm:w-auto p-4 border-2 border-zinc-400 rounded-xl focus:outline-none focus:ring-3 focus:ring-zinc-500 focus:border-transparent text-lg transition-all duration-300 ease-in-out"
          aria-label="Pokemon search input"
        />
        <button
          onClick={handleSearch}
          className="w-full sm:w-auto px-8 py-4 bg-zinc-500 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-zinc-700 focus:outline-none focus:ring-4 focus:ring-zinc-400 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:cursor-pointer"
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
