import { PokemonDetails } from "@/components/pokedex/PokemonDetails";
import { fetchPokemon } from "@/services/pokedex";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const PokemonPage = () => {
  const { query } = useParams();
  const { isLoading, data } = useQuery("findPokemon", () =>
    fetchPokemon(query ?? "")
  );

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {!!data?.pokemon && <PokemonDetails pokemon={data?.pokemon} />}
    </main>
  );
};
