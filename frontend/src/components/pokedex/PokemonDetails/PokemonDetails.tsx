import { formatPokemonId } from "@/lib/utils";
import { Pokemon } from "@/types";
import styles from "./PokemonDetails.module.css";

export const PokemonDetails = ({ pokemon }: { pokemon: Pokemon }) => {
  const { id, name, flavor_text_entries, sprites, types, height, weight } =
    pokemon;

  const description =
    flavor_text_entries?.find(({ language }) => language.name === "en")
      ?.flavor_text ?? "No description found";

  const formattedWeight = `${Number(weight) / 10} kg`;
  const formattedHeight = `${Number(height) * 10} cm`;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.name}>{name}</h1>
        <small className={styles.id}>{formatPokemonId(id)}</small>
      </header>

      <div className={styles.content}>
        <img
          className={styles.image}
          src={sprites?.other?.official_artwork?.front ?? ""}
          alt={`${pokemon.name} official artwork`}
        />

        <div className={styles.detailsContainer}>
          <p className={styles.description}>{description}</p>

          <p className={styles.label}>
            Height: <small className={styles.value}>{formattedHeight}</small>
          </p>
          <p className={styles.label}>
            Weight: <small className={styles.value}>{formattedWeight}</small>
          </p>

          <div className={styles.typesContainer}>
            <p className={styles.label}>Types:</p>
            <ul className={styles.typesList}>
              {types?.map(({ type }) => (
                <li key={type.name} className={styles.type}>
                  {type.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
