import { jsonHandler } from "../utils/jsonHandler.js";

export const habitacionRepository = {

	getAll: async () => {

		return await jsonHandler.readJson();
	},

	getById: async (id) => {

		const habitaciones = await jsonHandler.readJson();

		return habitaciones.find((h) => h.id === id) || null;
	},

	create: async (habitacion) => {

		const habitaciones = await jsonHandler.readJson();

		habitaciones.push(habitacion);
		await jsonHandler.writeJson(habitaciones);

		return habitacion;
	},

	update: async (id, nuevosDatos) => {

		const habitaciones = await jsonHandler.readJson();
		const idx = habitaciones.findIndex((h) => h.id === id);

		if (idx === -1) return null;

		habitaciones[idx] = {

			...habitaciones[idx],
			...nuevosDatos,
			id: habitaciones[idx].id,
		};

		await jsonHandler.writeJson(habitaciones);

		return habitaciones[idx];
	},

	deleteById: async (id) => {

		const habitaciones = await jsonHandler.readJson();
		const habitacion = habitaciones.find((h) => h.id === id);

		if (!habitacion) return null;

		const habitacionesFiltradas = habitaciones.filter((h) => h.id !== id);
		await jsonHandler.writeJson(habitacionesFiltradas);
		
		return habitacion;
	},
};
