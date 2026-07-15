import fs from "fs/promises";
import { config } from "../configs/config.js";

const { DB_PATH: rutaJSON } = config;

export const jsonHandler = {

	readJson: async () => {
		const datos = await fs.readFile(rutaJSON, { encoding: "utf-8" });
		return JSON.parse(datos);
	},

	writeJson: async (data) => {
		
		const strData = JSON.stringify(data, null, 2);
		await fs.writeFile(rutaJSON, strData, { encoding: "utf-8" });
	},
};
