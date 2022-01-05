import { pokedex } from "../pokedex.js";

//Alle Pokemon aus der Datenbank holen
export const getAllPokemon = (req, res) => {
    try {
        res.status (200).json(pokedex)
    } catch (error) {
        res.status (500).json({error:error.message})
    }
};

//Einzelnen Pokemonn aus der Datenbank holen
export const getSinglePokemon = (req, res) => {
   const id = req.params.id;
    pool
         .query("select * from Workshop WHERE id=$1", [id])
         .then((data) => {
            if(data.rowCount === 0) {
                res.status(404).send("Mehr bekommt ihr einfach nicht!")
            } else {
                res.status(200).json(data.rows[0]);
            }
        })
         .catch((err) => console.log(err));
};