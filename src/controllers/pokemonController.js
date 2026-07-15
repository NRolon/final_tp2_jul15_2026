import { pokemonService } from "../services/pokemonService.js";

export const pokemonController = {

	obtenerCSV: async (req, res) => {

		try {

			const csv = await pokemonService.fetchYGuardarCSV();
			res.setHeader("Content-Type", "text/csv");
			res.status(200).send(csv);

		} catch (error) {

			res.status(error.statusCode || 500).json({

				statusCode: error.statusCode || 500,
				error: error.error || "Error en el servidor",
			});
		}
	},
};
