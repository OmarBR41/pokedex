import { fetchAllPokemon } from "@/services/pokedex";
import { useQuery } from "react-query";

import { Pagination } from "@/components/ui/Pagination";
import { DEFAULT_API_LIMIT, DEFAULT_API_PAGE } from "@/lib/constants";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { PokemonList } from "../PokemonList";
import styles from "./Pokedex.module.css";

export const Pokedex = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: "",
    limit: "",
  });

  const pageParam = Number(searchParams.get("page") ?? DEFAULT_API_PAGE);
  const limitParam = Number(searchParams.get("limit") ?? DEFAULT_API_LIMIT);

  const { isLoading, data } = useQuery({
    queryKey: ["allPokemon", pageParam, limitParam],
    queryFn: () => fetchAllPokemon(pageParam, limitParam),
    keepPreviousData: true,
  });

  const pokemonArray = data?.pokemon ?? [];
  const totalPages = data?.totalPages ?? 1;

  const handlePagination = useCallback(
    (page: number) => {
      const hasPage = page > 0;
      const newPage = page > totalPages ? totalPages : page;

      setSearchParams({
        ...(hasPage && {
          page: String(newPage),
        }),
        ...(limitParam > 0 && { limit: String(limitParam) }),
      });
    },
    [totalPages, limitParam, setSearchParams]
  );

  return (
    <section className={styles.container}>
      {/* <header className={styles.header}>
        <select>
          <option># ID</option>
          <option>Name</option>
        </select>
      </header> */}

      {isLoading && <p>Loading...</p>}
      {pokemonArray && <PokemonList pokemonList={pokemonArray} />}

      <footer className={styles.footer}>
        {data && (
          <Pagination
            page={data?.page}
            totalPages={totalPages}
            handlePagination={handlePagination}
          />
        )}
      </footer>
    </section>
  );
};
