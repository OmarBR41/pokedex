import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchInput.module.css";

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(inputRef);

    const query = inputRef?.current?.value ?? "";
    const url = `/${query}`;

    navigate(url);
  };

  return (
    <form className={styles.container} onSubmit={(e) => onSubmit(e)}>
      <input
        ref={inputRef}
        className={styles.input}
        name="query"
        type="text"
        placeholder="Search by ID or Name"
      />
      <button type="submit" className={styles.submitButton}>
        Search
      </button>
    </form>
  );
};
