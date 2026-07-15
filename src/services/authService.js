import jwt from "jsonwebtoken";
import { config } from "../configs/config.js";

export const authService = {

	login: (data) => {
		
		if (!data.username || !data.password) {
			throw { statusCode: 400, error: "Se requiere datos para loguearse" };
		}

		
		if (

			data.username !== config.AUTH_USER ||
			data.password !== config.AUTH_PASSWORD
		) {

			throw { statusCode: 401, error: "Datos incorrectos" };
		}

		
		const token = jwt.sign({ username: data.username }, config.JWT_SECRET, {

			expiresIn: "1h", // se puede cambiar la expiracion de ser necesario
		});

		return { token };
	},
};
