import express from "express";
import { getAllPokemon, getSinglePokemon } from "../controllers/pokemon.js"

const Pokemon = express.Router();

//Um alle Pokemons zu bekommen 
Pokemon.route("/").get(getAllPokemon)

//Um ein Pokemon hinzuzufügen
//Pokemons.route("/").post(createPokemon)

//Um ein einzelnes Pokemon zu bekommen 
Pokemon.route("/:id").get(getSinglePokemon)

//Um ein Pokemon zu Löschen
//Pokemons.route("/:id").delete(deletePokemon)

//Um ein Pokemon zu Updaten
//Pokemons.route("/:id").put(updatePokemon)

export default Pokemon;