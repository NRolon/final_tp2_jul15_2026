import fs from "fs/promises";
import { config } from "../configs/config.js";

export const pokemonService = {

	fetchYGuardarCSV: async () => {
		
		const pokemones = [];

		for (let i = 1; i <= 15; i++) {

			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
			const data = await response.json();

			pokemones.push({
				id: data.id,
				name: data.name,
				height: data.height,
				weight: data.weight,
				base_experience: data.base_experience,
			});
		}

		const header = "id,name,height,weight,base_experience";
		const rows = pokemones.map(
			(p) => `${p.id},${p.name},${p.height},${p.weight},${p.base_experience}`,
		);

		const csv = [header, ...rows].join("\n");

		await fs.writeFile(config.CSV_PATH, csv, { encoding: "utf-8" });

		return csv;
	},
};
