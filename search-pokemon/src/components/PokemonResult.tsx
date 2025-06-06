import { getClient } from "@/libs/apolloClient";
import { GET_POKEMON_BY_NAME } from "@/graphql/queries";
import { Pokemon } from "@/types/pokemon";

interface Props {
  name: string;
}

const PokemonResult: React.FC<Props> = async ({ name }) => {

  const { data, loading, error } = await getClient().query({
    query: GET_POKEMON_BY_NAME,
    variables: { name },
  });

  if (loading) return <p>Loading...</p>;
  if (error || !data?.pokemon) return <p>Pokemon not found.</p>;

  const pokemon: Pokemon = data.pokemon;

  console.log(pokemon, 'pokemon');

  return (
    <>

    </>
  );
}

export default PokemonResult;
