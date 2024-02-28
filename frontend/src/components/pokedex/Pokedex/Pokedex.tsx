import { fetchAllPokemon } from "@/services/pokedex";
import { useQuery } from "react-query";

import { PokemonList } from "../PokemonList";
import styles from "./Pokedex.module.css";

export const Pokedex = () => {
  const { isLoading, data } = useQuery("allPokemon", fetchAllPokemon);

  return (
    <section className={styles.container}>
      {/* <header className={styles.header}>
        <select>
          <option># ID</option>
          <option>Name</option>
        </select>
      </header> */}

      {isLoading && <p>Loading...</p>}
      {data?.pokemon && <PokemonList pokemonList={data?.pokemon} />}
    </section>
  );
};
