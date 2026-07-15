import { habitacionService } from "../services/habitacionService.js";

export const habitacionController = {

	getAll: async (req, res) => {

		try {

			const disponible = req.query.disponible;
			const habitaciones = await habitacionService.getAll(disponible);
			res.status(200).json(habitaciones);

		} catch (error) {

			res.status(error.statusCode || 500).json({

				statusCode: error.statusCode || 500,
				error: error.error || "Error en el servidor",
			});
		}
	},

	getById: async (req, res) => {

		try {

			const habitacion = await habitacionService.getById(req.params.id);
			res.status(200).json(habitacion);

		} catch (error) {

			res.status(error.statusCode || 500).json({

				statusCode: error.statusCode || 500,
				error: error.error || "Error en el servidor",
			});
		}
	},

	create: async (req, res) => {

		try {

			const nueva = await habitacionService.create(req.body);
			res.status(201).json(nueva);

		} catch (error) {

			res.status(error.statusCode || 500).json({
				
				statusCode: error.statusCode || 500,
				error: error.error || "Error en el servidor",
			});
		}
	},

	update: async (req, res) => {
		try {

			const habitacionActualizada = await habitacionService.update(
				req.params.id,
				req.body,
			);

			res.status(200).json(habitacionActualizada);

		} catch (error) {

			res.status(error.statusCode || 500).json({

				statusCode: error.statusCode || 500,
				error: error.error || "Error en el servidor",
			});
		}
	},

	deleteById: async (req, res) => {

		try {

			await habitacionService.deleteById(req.params.id);
			res.status(200).json({ message: "Habitacion eliminada" });

		} catch (error) {

			res.status(error.statusCode || 500).json({

				statusCode: error.statusCode || 500,
				error: error.error || "Error en el servidor",
			});
		}
	},
};
