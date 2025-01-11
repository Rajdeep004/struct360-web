// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	colorMode: {
		preference: "light",
	},

	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],

	modules: [
		"@nuxt/ui",
		"nuxt-icon-tw",
		"nuxt-headlessui",
		"nuxt-swiper",
		"@vesp/nuxt-fontawesome",
	],

	plugins: ["~/plugins/ga.client.js"],

	app: {
		head: {
			script: [
				{
					src: "https://www.googletagmanager.com/gtag/js?id=G-M6RZSYPBYV",
					async: true,
				},
				{
					children: `window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', 'G-M6RZSYPBYV');
							`,
					type: "text/javascript",
				},
			],
		},
	},

	compatibilityDate: "2025-01-11",
});
