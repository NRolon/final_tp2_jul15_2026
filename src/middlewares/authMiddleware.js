import jwt from "jsonwebtoken";
import { config } from "../configs/config.js";

export const authJWT = (req, res, next) => {

	const authHeader = req.headers["authorization"];

	if (!authHeader) {

		return res
			.status(401)
			.json({ statusCode: 401, error: "Falta el token, copiarlo" });
	}

	const token = authHeader.split(" ")[1];

	if (!token) {

		return res
			.status(401)
			.json({ statusCode: 401, error: "El formato del token es incorrecto" });
	}

	try {

		const verificarToken = jwt.verify(token, config.JWT_SECRET);
		req.user = verificarToken;
		next();

	} catch (error) {

		return res
			.status(401)
			.json({ statusCode: 401, error: "Token incorrecto o expirò" });
	}
};
