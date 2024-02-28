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
  const count = await Pokemon.countDocuments();
  const totalPages = Math.ceil(count / limit);

  const p = page > totalPages ? totalPages : page;
  const offset = (p - 1) * limit;

  const pokemon = await Pokemon.find({}, undefined, { skip: offset, limit });

  return {
    pokemon,
    count,
    totalPages,
  };
}

export async function getPokemonByIdOrName(
  query: string
): Promise<PokemonType | null> {
  return Pokemon.findOne({
    $or: [
      {
        id: { $eq: Number(query) || null },
      },
      {
        slug: { $eq: query },
      },
    ],
  });
}
