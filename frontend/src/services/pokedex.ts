import { BACKEND_API } from "@/lib/constants";
import { APIAllPokemonResponse, APIGetPokemonResponse } from "@/types";

const POKEMON_API_URL = `${BACKEND_API}/pokemon`;

export const fetchAllPokemon = async (): Promise<APIAllPokemonResponse> => {
  try {
    const res = await fetch(POKEMON_API_URL);
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
