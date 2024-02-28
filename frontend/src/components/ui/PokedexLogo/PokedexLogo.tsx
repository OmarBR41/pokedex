import styles from "./PokedexLogo.module.css";
import pokeball from "/pokeball.svg";

export const PokedexLogo = () => {
  return (
    <a className={styles.container} href="/">
      <img className={styles.image} src={pokeball} alt="Pokeball logo" />
      <p className={styles.text}>Pokédex</p>
    </a>
  );
};
