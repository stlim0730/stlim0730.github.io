import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	server: {
		port: process.env.PORT ? Number(process.env.PORT) : 4321,
		host: true,
	},
	integrations: [
		icon({
			iconDir: "src/assets/icons",
		})
	],
	vite: {
		assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif'],
	},
	build: {
		assets: 'assets'
	}
});
