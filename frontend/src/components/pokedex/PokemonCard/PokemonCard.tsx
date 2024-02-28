import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { formatPokemonId } from "@/lib/utils";
import { Pokemon } from "@/types";
import styles from "./PokemonCard.module.css";

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const pokemonId = formatPokemonId(pokemon.id);
  const pokemonUrl = `/${pokemon.slug}`;

  return (
    <article className={styles.container}>
      <a href={pokemonUrl}>
        <img
          className={styles.image}
          src={pokemon.sprites?.other?.official_artwork?.front ?? ""}
          alt={pokemon.name}
        />
      </a>

      <div className={styles.textContainer}>
        <small className={styles.id}>{pokemonId}</small>
        <a href={pokemonUrl} className={styles.name}>
          {pokemon.name}
        </a>
      </div>

      <div className={styles.favoriteContainer}>
        <FavoriteButton id={pokemon.slug} />
      </div>
    </article>
  );
};
