import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Heart } from "react-feather";
import styles from "./FavoriteButton.module.css";

export const FavoriteButton = ({ id }: { id: number }) => {
  const [isFavorite, setIsFavorite] = useLocalStorage(`pokemon-${id}`, false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <Heart
      className={`${styles.heartIcon} ${
        isFavorite ? styles.heartIconFilled : ""
      }`}
      onClick={() => toggleFavorite()}
    />
  );
};
