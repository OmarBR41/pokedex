import Pokemon from "@/models/pokemon.model";
import { Pokemon as PokemonType } from "@/types";

type PaginatedPokemonRes = {
  pokemon: PokemonType[];
  count: number;
  totalPages: number;
};

export async function getPaginatedPokemon(
  page: number,
  limit: number
): Promise<PaginatedPokemonRes> {
  const offset = (page - 1) * limit;

  const pokemon = await Pokemon.find({}, undefined, { skip: offset, limit });
  const count = await Pokemon.countDocuments();

  const totalPages = Math.ceil(count / limit);

  return {
    pokemon,
    count,
    totalPages,
  };
}

