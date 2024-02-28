import { FavoriteButton } from "@/components/ui/ FavoriteButton";
import { Pokemon } from "@/types";
import styles from "./PokemonCard.module.css";

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const pokemonId = pokemon.id.toLocaleString("en-US", {
    minimumIntegerDigits: 4,
    useGrouping: false,
  });

  return (
    <article className={styles.container}>
      <img
        className={styles.image}
        src={pokemon.sprites?.other?.official_artwork?.front ?? ""}
        alt={pokemon.name}
      />
      <div className={styles.textContainer}>
        <small className={styles.id}>#{pokemonId}</small>
        <p className={styles.name}>{pokemon.name}</p>
      </div>

      <div className={styles.favoriteContainer}>
        <FavoriteButton id={pokemon.id} />
      </div>
    </article>
  );
};
