import { PokemonDetails } from "@/components/pokedex/PokemonDetails";
import { fetchPokemon } from "@/services/pokedex";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const PokemonPage = () => {
  const { query } = useParams();
  const { isLoading, isError, data } = useQuery(["findPokemon", query], () =>
    fetchPokemon(query ?? "")
  );

  if (isLoading) {
    return <p>Searching Pokemon...</p>;
  }

  if (isError || !data?.pokemon) {
    return <p>No Pokemon found with ID or query '{query}'</p>;
  }

  return <PokemonDetails pokemon={data?.pokemon} />;
};
