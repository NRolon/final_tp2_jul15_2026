import express from "express";
import { config } from "./configs/config.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Servidor funcionando");
});

app.listen(config.PORT, () => {
	console.log(`Servidor en http://${config.HOST}:${config.PORT}`);
});

"prueba"