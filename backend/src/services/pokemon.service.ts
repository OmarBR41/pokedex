import { API_TOTAL_POKEMON, POKE_API } from "@/lib/constants";
import {
  PokemonAPIResponse,
  PokemonDetailsAPIResponseWithUrlAndSpeciesData,
  PokemonSpeciesAPIResponse,
} from "@/types";
import fetch from "node-fetch";

async function fetchPokemonSpeciesData(
  url: string
): Promise<PokemonSpeciesAPIResponse> {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
}

async function fetchPokemonDetails(
  url: string
): Promise<PokemonDetailsAPIResponseWithUrlAndSpeciesData> {
  return fetch(url)
    .then((res) => res.json())
    .then(async (data) => {
      const speciesData = await fetchPokemonSpeciesData(data.species.url);
      return { ...data, ...speciesData, url };
    })
    .catch((error) => {
      console.error(error);
    });
}

async function fetchAllPokemon(): Promise<PokemonAPIResponse> {
  const allPokemonApiUrl = `${POKE_API}/pokemon?limit=${API_TOTAL_POKEMON}`;

  return fetch(allPokemonApiUrl)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
}
