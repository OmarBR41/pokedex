import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Heart } from "react-feather";
import styles from "./FavoriteButton.module.css";

export const FavoriteButton = ({ id }: { id: string }) => {
  const [isFavorite, setIsFavorite] = useLocalStorage(id, false);

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
