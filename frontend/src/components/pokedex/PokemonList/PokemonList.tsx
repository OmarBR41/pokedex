import { PokemonCard } from "@/components/pokedex/PokemonCard";
import { Pokemon } from "@/types";
import styles from "./PokemonList.module.css";

export const PokemonList = ({ pokemonList }: { pokemonList: Pokemon[] }) => {
  return (
    <div className={styles.container}>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};
