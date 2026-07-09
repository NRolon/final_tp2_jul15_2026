import path from "path";

export const config = {
	HOST: process.env.HOST ?? "127.0.0.1",
	PORT: process.env.PORT ?? 3000,
	PATH: path.resolve("src/db/datos.json"),
};