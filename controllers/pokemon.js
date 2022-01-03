import pool from "../db/pg.js"

//Alle Workshops aus Workshop holen
export const getAllPokemon = (req, res) => {
     pool
        .query("select * from Workshop")
        .then((data) => res.json({ Workshop: data.rows}))
        .catch((err) => console.log(err));
};

//Einzelnen Pokemonn aus Workshop holen
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