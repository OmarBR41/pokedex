import { getPaginatedPokemon } from "@/controllers/pokemon.controller";

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
      page,
      limit,
    });
  } catch (error) {
    res.send(error);
  }
});

export default router;
