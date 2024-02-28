import {
  getPaginatedPokemon,
  getPokemonByIdOrName,
} from "@/controllers/pokemon.controller";

import { Router } from "express";

const router = Router();

router.get("/healthcheck", (_, res) => {
  res.status(200).send({
    ok: true,
  });
});

router.get("/", async (req, res) => {
  try {
    const page = parseInt(String(req.query.page), 10) || 1;
    const limit = parseInt(String(req.query.limit), 10) || 20;

    const { pokemon, count, totalPages } = await getPaginatedPokemon(
      page,
      limit
    );

    res.json({
      pokemon,
      count,
      totalPages,
      page: page > totalPages ? totalPages : page,
      limit,
    });
  } catch (error) {
    res.send(error);
  }
});

router.get("/:query", async (req, res) => {
  try {
    const { query } = req.params;

    const pokemon = await getPokemonByIdOrName(query);

    if (!pokemon) {
      res.status(404).send({
        message: `Pokemon with id or name '${query}' not found`,
      });
      return;
    }

    res.json({ pokemon });
  } catch (error) {
    res.send(error);
  }
});

export default router;
