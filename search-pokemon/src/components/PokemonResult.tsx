
import { GET_POKEMON_BY_NAME } from "@/graphql/queries";
import { Pokemon, PokemonQueryResponse } from "@/types/pokemon";
import { useSuspenseQuery } from "@apollo/client";

interface Props {
  name: string;
}

const PokemonResult: React.FC<Props> = ({ name }) => {

  const { data, error } = useSuspenseQuery<PokemonQueryResponse>(GET_POKEMON_BY_NAME, {
    variables: { name },
  });

  if (error) return <p>Pokemon not found.</p>;

  const pokemon = data.pokemon

  console.log(pokemon, 'pokemon');

  return (
    <>

    </>
  );
}

export default PokemonResult;
