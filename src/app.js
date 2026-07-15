import express from "express";
import morgan from "morgan";
import { config } from "./configs/config.js";
import { routes } from "./routes/routes.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1", routes);

app.get("/", (req, res) => {
	
	res.send("Servidor funcionando");
});

app.listen(config.PORT, () => {
	console.log(`Servidor en http://${config.HOST}:${config.PORT}`);
});
