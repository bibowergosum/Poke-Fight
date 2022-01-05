import pokedex from "../pokedex.js";

//Alle Pokemon aus der Datenbank holen
export const getAllPokemon = (req, res) => {
    try {
        res.status (200).json(pokedex)
    } catch (error) {
        res.status (500).json({error:error.message})
    }
};

//Einzelnes Pokemonn aus der Datenbank holen
export const getSinglePokemon = (req, res) => {
    try {
        const {id} = req.params;
        const findPokemon = pokedex.find(pokemon => pokemon.id == id);
        res.status(200).json(findPokemon)
    } catch (error) {
        res.status (500).json({error:error.message})
    }
};