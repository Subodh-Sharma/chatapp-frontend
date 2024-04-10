import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: "https://chatapp-frontend-ruby.vercel.app",
		proxy: {
			"/api": {
				target: "https://chatapp-server-lilac.vercel.app",
			},
		},
	},
});
