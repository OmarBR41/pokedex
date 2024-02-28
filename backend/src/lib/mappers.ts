import PokemonModel from "@/models/pokemon.model";
import {
  Pokemon,
  PokemonDetailsAPIResponse,
  PokemonDetailsAPIResponseWithUrlAndSpeciesData,
} from "@/types";
import { HydratedDocument } from "mongoose";

function mapPokemonSprites(sprites: PokemonDetailsAPIResponse["sprites"]) {
  return {
    default: {
      back: sprites.back_default,
      front: sprites.front_default,
      shiny: {
        back: sprites.back_shiny,
        front: sprites.front_shiny,
      },
    },
    female: Boolean(sprites.back_female)
      ? {
          back: sprites.back_female,
          front: sprites.front_female,
          shiny: {
            back: sprites.back_shiny_female,
            front: sprites.front_shiny_female,
          },
        }
      : null,
    other: {
      official_artwork: {
        back: null,
        front: sprites.other["official-artwork"].front_default,
        shiny: {
          back: null,
          front: sprites.other["official-artwork"].front_shiny,
        },
      },
      showdown: {
        default: {
          back: sprites.other.showdown.back_default,
          front: sprites.other.showdown.front_default,
          shiny: {
            back: sprites.other.showdown.back_shiny,
            front: sprites.other.showdown.front_shiny,
          },
        },
        female: Boolean(sprites.other.showdown.back_female)
          ? {
              back: sprites.other.showdown.back_female,
              front: sprites.other.showdown.front_female,
              shiny: {
                back: sprites.other.showdown.back_shiny_female,
                front: sprites.other.showdown.front_shiny_female,
              },
            }
          : null,
      },
    },
  };
}

export function mapPokemonDataToModel(
  pokemonData: PokemonDetailsAPIResponseWithUrlAndSpeciesData[]
): HydratedDocument<Pokemon>[] {
  return pokemonData.map(
    ({
      id,
      name,
      names,
      url,
      height,
      weight,
      abilities,
      stats,
      flavor_text_entries,
      types,
      sprites,
    }) =>
      new PokemonModel({
        id,
        slug: name,
        name:
          names.find(({ language }) => language.name === "en")?.name ?? name,
        url,
        height,
        weight,
        abilities,
        stats,
        flavor_text_entries,
        types,
        sprites: mapPokemonSprites(sprites),
      })
  );
}
