import { authService } from "../services/authService.js";

export const authController = {

	login: (req, res) => {

		try {

			const resultado = authService.login(req.body);
			res.status(200).json(resultado);

		} catch (error) {

			res.status(error.statusCode || 500).json({
				
				statusCode: error.statusCode || 500,
				error: error.error || "Error en el servidor",
			});
		}
	},
};
