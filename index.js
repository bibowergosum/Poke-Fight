import "dotenv/config.js";
import express from "express";
import Pokemon from "./routes/pokemon.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use("/Pokemon", Pokemon);

app.get("/", (req, res) =>
    res.send(
        "<h1>Komm schnapp sie dir!</h1>"
        
     )
);

app.listen(port, () => console.log(`Server hört am port ${port}`));