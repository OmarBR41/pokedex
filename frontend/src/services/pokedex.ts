import { BACKEND_API } from "@/lib/constants";
import { APIAllPokemonResponse, APIGetPokemonResponse } from "@/types";

const POKEMON_API_URL = `${BACKEND_API}/pokemon`;

export const fetchAllPokemon = async (
  page: number,
  limit: number
): Promise<APIAllPokemonResponse> => {
  const url = new URL(POKEMON_API_URL);

  if (page > 0) {
    url.searchParams.append("page", String(page));
  }

  if (limit > 0) {
    url.searchParams.append("limit", String(limit));
  }

  try {
    const res = await fetch(url.toString());
    return res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export async function fetchPokemon(
  query: string | number
): Promise<APIGetPokemonResponse> {
  try {
    const res = await fetch(`${POKEMON_API_URL}/${query}`);
    return res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}
