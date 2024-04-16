import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Options can be added here if necessary, for example:
			out: 'build' // Specifies the output directory for the built server files
		})
	},
	preprocess: vitePreprocess()
};

export default config;
