import { fetchAllPokemon } from "@/services/pokedex";
import { useQuery } from "react-query";

import { Pagination } from "@/components/ui/Pagination";
import { Select } from "@/components/ui/Select";
import {
  DEFAULT_API_LIMIT,
  DEFAULT_API_PAGE,
  LIMIT_OPTIONS,
} from "@/lib/constants";
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

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = e.target.value;

    setSearchParams({
      ...(pageParam && {
        page: String(pageParam),
      }),
      ...(Number(newLimit) > 0 && { limit: String(newLimit) }),
    });
  };

  const firstIndex = pokemonArray[0]?.id ?? "...";
  const lastIndex = pokemonArray[pokemonArray.length - 1]?.id ?? "...";
  const count = data?.count ?? "...";

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <p className={styles.headerText}>
          Showing #{firstIndex} - #{lastIndex} from {count} total Pokémon
        </p>

        <Select
          label="Limit"
          value={limitParam}
          options={LIMIT_OPTIONS}
          onChange={handleLimitChange}
        />
      </header>

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
