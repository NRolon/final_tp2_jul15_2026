import crypto from "crypto";
import { Habitacion } from "../models/modelo.js";
import { habitacionRepository } from "../repository/repository.js";

const esFormatoFechaValido = (fecha) => {
	return /^\d{4}-\d{2}-\d{2}$/.test(fecha);
};

export const habitacionService = {

	getAll: async (disponible) => {

		const habitaciones = await habitacionRepository.getAll();

		if (disponible === "true") {

			return habitaciones.filter((h) => h.plazasDisponibles > 0);
		}

		return habitaciones;
	},

	getById: async (id) => {

		const habitacion = await habitacionRepository.getById(id);

		if (!habitacion) {

			throw { statusCode: 404, error: "Habitacion no encontrada" };
		}
		return habitacion;
	},

	create: async (data) => {
		
		if (!data.nombre ||	typeof data.nombre !== "string" || data.nombre.trim() === "") {

			throw {

				statusCode: 400,
				error: "El nombre debe estar completo y no puede ser null o vacio",
			};
		}

		if ( data.plazasDisponibles === undefined || !Number.isInteger(data.plazasDisponibles) || data.plazasDisponibles < 0) {
			
			throw {

				statusCode: 400,
				error:
					"El campo plazasDisponibles debe ser un entero mayor o igual a 0",
			};
		}

		
		if (data.fechaAlta !== undefined && !esFormatoFechaValido(data.fechaAlta)) {

			throw {

				statusCode: 400,
				error: "La fecha debe tener formato YYYY-MM-DD",
			};
		}

		const nueva = new Habitacion(
			crypto.randomUUID(),
			data.nombre,
			data.plazasDisponibles,
			data.fechaAlta,
		);

		return await habitacionRepository.create(nueva);
	},

	update: async (id, data) => {
		
		const existe = await habitacionRepository.getById(id);

		if (!existe) {

			throw { statusCode: 404, error: "Habitacion no encontrada" };
		}

		
		if ( data.nombre !== undefined && (typeof data.nombre !== "string" || data.nombre.trim() === "") ) {
			
			throw {

				statusCode: 400,
				error: "El nombre no puede estar vacio",
			};
		}

		if (data.plazasDisponibles !== undefined) {

			if (!Number.isInteger(data.plazasDisponibles) ||data.plazasDisponibles < 0 ) {

				throw {

					statusCode: 400,
					error:
						"El campo plazasDisponibles debe ser un entero mayor o igual a 0",
				};
			}

			const diferencia = data.plazasDisponibles - existe.plazasDisponibles;
			if (diferencia !== 0 && diferencia !== 1) {

				throw {

					statusCode: 400,
					error: `plazasDisponibles solo puede permanecer igual (${existe.plazasDisponibles}) o incrementarse en 1 (${existe.plazasDisponibles + 1})`,
				};
			}
		}

		
		if (data.fechaAlta !== undefined && !esFormatoFechaValido(data.fechaAlta)) {

			throw {

				statusCode: 400,
				error: "La fecha debe tener formato YYYY-MM-DD",
			};
		}

		return await habitacionRepository.update(id, data);
	},

	deleteById: async (id) => {

		const habitacionEliminada = await habitacionRepository.deleteById(id);

		if (!habitacionEliminada) {

			throw { statusCode: 404, error: "Habitacion no encontrada" };
		}
		return habitacionEliminada;
	},
};
