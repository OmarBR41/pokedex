import dotenv from "dotenv";
dotenv.config();

import { connectToMongo, disconnectMongo } from "@/config/db";
import { API_BATCH_SIZE } from "@/lib/constants";
import { mapPokemonDataToModel } from "@/lib/mappers";
import PokemonModel from "@/models/pokemon.model";
import { fetchAllPokemonWithDetails } from "@/services/pokemon.service";

async function populateDb() {
  try {
    const db = await connectToMongo();

    if (!db) {
      throw new Error("Could not connect to MongoDB");
    }

    console.log("Formatting DB...");
    await PokemonModel.collection.deleteMany({});

    const allPokemonDetailsFromApi = await fetchAllPokemonWithDetails(
      API_BATCH_SIZE
    );

    const allPokemon = mapPokemonDataToModel(allPokemonDetailsFromApi);

    console.log("Populating DB...");
    await PokemonModel.insertMany(allPokemon);

    console.log("Data inserted, disconnecting from DB");

    await disconnectMongo();

    console.log("Connection to DB closed");
  } catch (err) {
    console.error(err);
  }
}

populateDb();
