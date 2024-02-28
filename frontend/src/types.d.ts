// Backend API Response
export type APIAllPokemonResponse = {
  pokemon: Pokemon[];
  count: number;
  totalPages: number;
  page: number;
  limit: number;
};

export type APIGetPokemonResponse = {
  pokemon: Pokemon;
};

// Generic
export type Data = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  name: string;
  url: string;
  height?: number;
  weight?: number;
  abilities?: PokemonAbility[];
  sprites?: PokemonSprites;
  stats?: PokemonStat[];
  types?: PokemonType[];
  flavor_text_entries?: PokemonTextEntry[];
};

export type PokemonAbility = {
  ability: Data;
  is_hidden: boolean;
  slot: number;
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: Data;
};

export type PokemonTextEntry = {
  flavor_text: string;
  language: Data;
  version: Data;
};

export type PokemonType = {
  slot: number;
  type: Data;
};

export type PokemonSprites = {
  default: Sprite;
  female: Sprite | null;
  other: OtherSprites;
};

type OtherSprites = {
  official_artwork: Sprite;
  showdown: PokemonSprites;
};

type SpriteUrl = {
  front: string | null;
  back: string | null;
};

type Sprite = SpriteUrl & {
  shiny: SpriteUrl;
};
