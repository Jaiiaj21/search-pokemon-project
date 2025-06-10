"use client"
import { GET_POKEMON_BY_NAME } from "@/graphql/queries";
import { hexToRgba } from "@/libs/colorUtils";
import { PokemonElement, pokemonElementColor } from "@/libs/pokemon";
import { Attack, Evolution, Pokemon, PokemonQueryResponse } from "@/types/pokemon";
import { useSuspenseQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
}

const PokemonResult: React.FC<Props> = ({ name }) => {

  const router = useRouter();

  const { data, error } = useSuspenseQuery<PokemonQueryResponse>(GET_POKEMON_BY_NAME, {
    variables: { name },
  });

  if (error) return <p>Pokemon not found.</p>;

  const pokemon = data.pokemon

  const handleEvolutionClick = (name: string): void => {
    router.push(`/?name=${name}`);
  }

  console.log(pokemon, 'pokemon');
  if (!pokemon) return <p>No Pokémon found.</p>;

  const pokemonElementComponent = (element: PokemonElement) => {
    return (
      <div
        key={element}
        className="w-20 p-1 rounded-lg text-white text-shadow-[1px_1px_3px_black] text-center text-xs"
        style={{ backgroundColor: `${pokemonElementColor[element]}` }}
      >
        {element.toUpperCase()}
      </div>
    )
  }

  return (
    <div
      className="mx-auto p-4 w-full rounded-lg bg-gray-100"
      style={{
        backgroundColor: hexToRgba(
          pokemonElementColor[pokemon.types[0] as PokemonElement],
          0.2
        )
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-8 mt-4">
        {pokemon.name} <span className="text-neutral-500">#{pokemon.number}</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8 mb-8 ">
        {/* Image Section (Top Left) */}
        <div className="w-full md:w-[30%] flex justify-center items-start">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={100}
            height={100}
            className="w-full h-full object-contain rounded-xl shadow-md bg-white p-5"
          />
        </div>

        {/* Detail Info Section */}
        <div className="w-full md:w-2/3 p-6 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold mb-4">Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="md:col-span-1">
              <strong>Max HP</strong>
              <p>{pokemon.maxHP}</p>
            </div>
            <div className="md:col-span-1">
              <strong>Max CP</strong>
              <p>{pokemon.maxCP}</p>
            </div>
            <div className="md:col-span-1">
              <strong>Flee Rate</strong>
              <p>{pokemon.fleeRate}</p>
            </div>

            <div className="md:col-span-3 grid md:grid-cols-2">
              <div className="md:col-span-1">
                <strong>Height</strong>
                <p>{pokemon.height.minimum} - {pokemon.height.maximum}</p>
              </div>
              <div className="md:col-span-1">
                <strong>Weight</strong>
                <p>{pokemon.weight.minimum} - {pokemon.weight.maximum}</p>
              </div>
            </div>

            <div className="md:col-span-3 flex gap-4 items-center">
              <strong>Types</strong>
              <div className="flex gap-2 flex-wrap">
                {pokemon.types.map((element) => (
                  pokemonElementComponent(element as PokemonElement)
                ))}
              </div>
            </div>
            <div className="md:col-span-3 flex gap-4 items-center">
              <strong>Resistant</strong>
              <div className="flex gap-2 flex-wrap">
                {pokemon.resistant.map((element) => (
                  pokemonElementComponent(element as PokemonElement)
                ))}
              </div>
            </div>
            <div className="md:col-span-3 flex gap-4 items-center">
              <strong>Weaknesses</strong>
              <div className="flex gap-2 flex-wrap">
                {pokemon.weaknesses.map((element) => (
                  pokemonElementComponent(element as PokemonElement)
                ))}
              </div>
            </div>
            <div className="md:col-span-3 flex gap-4 items-center">
              <strong>Classification</strong>
              <div className="flex gap-2 flex-wrap">
                {pokemon.classification}
              </div>
            </div>

          </div>
          {pokemon.evolutionRequirements && (
            <div className="mt-4">
              <strong>Evolution Requirement</strong> {pokemon.evolutionRequirements.amount} {pokemon.evolutionRequirements.name}
            </div>
          )}
        </div>
      </div>

      {/* Attacks Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Attacks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Fast Attacks</h3>
            {pokemon.attacks.fast.length > 0 ? (
              <ul className="ml-2">
                {pokemon.attacks.fast.map((attack: Attack, index: number) => (
                  attack.name && attack.damage && attack.type &&
                  <li key={index} className="flex gap-2 mb-1">
                    {attack.name} {pokemonElementComponent(attack.type as PokemonElement)} - Damage: {attack.damage}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No fast attacks listed.</p>
            )}
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Special Attacks</h3>
            {pokemon.attacks.special.length > 0 ? (
              <ul className="ml-2">
                {pokemon.attacks.special.map((attack: Attack, index: number) => (
                  attack.name && attack.damage && attack.type &&
                  <li key={index} className="flex gap-2 mb-1">
                    {attack.name} {pokemonElementComponent(attack.type as PokemonElement)} - Damage: {attack.damage}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No special attacks listed.</p>
            )}
          </div>
        </div>
      </div>

      {/* Evolutions Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Evolutions</h2>
        {pokemon.evolutions && pokemon.evolutions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pokemon.evolutions.map((evolution: Evolution) => (
              <div
                key={evolution.id}
                className="border p-4 rounded-lg text-center focus:outline-none duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:cursor-pointer"
                onClick={() => { handleEvolutionClick(evolution.name) }}
              >
                <div className="relative w-32 h-32 mx-auto mb-2">
                  <Image
                    src={evolution.image}
                    alt={evolution.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="font-semibold mb-2">
                  {evolution.name}
                  <span className="text-neutral-500 ml-1">
                    #{evolution.number}
                  </span>
                </p>
                <div className="flex gap-2 flex-wrap justify-center w-full">
                  {evolution.types.map((element) => (
                    pokemonElementComponent(element as PokemonElement)
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No evolutions listed for this Pokemon.</p>
        )}
      </div>
    </div >
  );
}

export default PokemonResult;
