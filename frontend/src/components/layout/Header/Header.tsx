import { PokedexLogo } from "@/components/ui/PokedexLogo";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <PokedexLogo />
    </header>
  );
};
