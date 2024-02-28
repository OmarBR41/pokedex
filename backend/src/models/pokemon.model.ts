import {
  Pokemon,
  PokemonAbility,
  PokemonSprites,
  PokemonStat,
  PokemonTextEntry,
  PokemonType,
  Sprite,
} from "@/types";
import { Schema, model } from "mongoose";

const PokemonAbilitySchema = new Schema<PokemonAbility>({
  ability: {
    name: String,
    url: String,
  },
  is_hidden: Boolean,
  slot: Number,
});

const SpriteSchema = new Schema<Sprite>({
  front: { type: String, default: null },
  back: { type: String, default: null },
  shiny: {
    front: { type: String, default: null },
    back: { type: String, default: null },
  },
});

const PokemonSpritesSchema = new Schema<PokemonSprites>({
  default: SpriteSchema,
  female: SpriteSchema,
  other: {
    official_artwork: SpriteSchema,
    showdown: {
      default: SpriteSchema,
      female: SpriteSchema,
    },
  },
});

const PokemonStatSchema = new Schema<PokemonStat>({
  stat: {
    name: String,
    url: String,
  },
  effort: Number,
  base_stat: Number,
});

const PokemonTextEntrySchema = new Schema<PokemonTextEntry>({
  flavor_text: String,
  language: {
    name: String,
    url: String,
  },
  version: {
    name: String,
    url: String,
  },
});

const PokemonTypeSchema = new Schema<PokemonType>({
  slot: Number,
  type: {
    name: String,
    url: String,
  },
});

const PokemonSchema = new Schema<Pokemon>({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  height: Number,
  weight: Number,
  abilities: [PokemonAbilitySchema],
  sprites: PokemonSpritesSchema,
  stats: [PokemonStatSchema],
  types: [PokemonTypeSchema],
  flavor_text_entries: [PokemonTextEntrySchema],
});

const PokemonModel = model("Pokemon", PokemonSchema);

export default PokemonModel;
