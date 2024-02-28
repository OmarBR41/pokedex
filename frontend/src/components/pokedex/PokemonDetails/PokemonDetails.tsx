import { Pokemon } from "@/types";
import { PokemonCard } from "../PokemonCard";
import styles from "./PokemonDetails.module.css";

export const PokemonDetails = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <section className={styles.container}>
      <PokemonCard pokemon={pokemon} />
    </section>
  );
};
