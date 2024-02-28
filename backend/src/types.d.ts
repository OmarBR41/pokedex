// Generic
export type Data = {
  name: string;
  url: string;
};

// API Response
export type PokemonAPIResponse = {
  count: number;
  next: string | null;
  prev: string | null;
  results: Pokemon[];
};

type PokemonDetailsAPIResponse = {
  abilities: PokemonAbility[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: Object[];
  game_indices: Object[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Object[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      ["official-artwork"]: {
        front_default: string | null;
        front_shiny: string | null;
      };
      showdown: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    versions: {
      // generation
      [key: string]: {
        // version
        [key: string]: {
          // sprite
          [key: string]: string | null;
        };
      };
    };
  };
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
};

export type PokemonDetailsAPIResponseWithUrl = PokemonDetailsAPIResponse & {
  url: string;
};

export type PokemonSpeciesAPIResponse = {
  base_happiness: number;
  capture_rate: number;
  color: Data;
  egg_groups: Data[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: Data | null;
  flavor_text_entries: [
    {
      flavor_text: string;
      language: Data;
      version: Data;
    }
  ];
  names: {
    language: Data;
    name: string;
  }[];
};

export type PokemonDetailsAPIResponseWithUrlAndSpeciesData =
  PokemonDetailsAPIResponseWithUrl & PokemonSpeciesAPIResponse;

// Pokemon Model
export type Pokemon = {
  id: number;
  slug: string;
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
