import { Router } from "express";
import { authController } from "../controllers/authController.js";
import { habitacionController } from "../controllers/habitacionController.js";
import { pokemonController } from "../controllers/pokemonController.js";
import { authJWT } from "../middlewares/authMiddleware.js";

const routes = Router();

routes.post("/auth/login", authController.login);
routes.post("/habitaciones", habitacionController.create);
routes.get("/habitaciones", habitacionController.getAll);
routes.get("/habitaciones/:id", habitacionController.getById);
routes.put("/habitaciones/:id", authJWT, habitacionController.update);
routes.delete("/habitaciones/:id", authJWT, habitacionController.deleteById);
routes.get("/pokemon/csv", pokemonController.obtenerCSV);

export { routes };
