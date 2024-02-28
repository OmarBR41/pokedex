import { GitHubLogo } from "@/components/ui/GitHubLogo";
import { PokedexLogo } from "@/components/ui/PokedexLogo";

import { SearchInput } from "@/components/pokedex/SearchInput";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <PokedexLogo />

      <div className={styles.rightContainer}>
        <SearchInput />
        <GitHubLogo />
      </div>
    </header>
  );
};
