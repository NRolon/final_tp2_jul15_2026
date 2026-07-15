import path from "path";

export const config = {

	HOST: process.env.HOST ?? "127.0.0.1",
	PORT: process.env.PORT ?? 3000,
	DB_PATH: path.resolve("src/db/db.json"),
	CSV_PATH: path.resolve("src/db/pokemon_15.csv"),
	JWT_SECRET: process.env.JWT_SECRET ?? "supersecret",
	AUTH_USER: process.env.AUTH_USER ?? "admin",
	AUTH_PASSWORD: process.env.AUTH_PASSWORD ?? "admin123",
};
