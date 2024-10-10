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
	plugins: ["~/plugins/ga.client.ts"],
	app: {
		head: {
			script: [
				{
					src: "https://www.googletagmanager.com/gtag/js?id=G-4QMWEQCWKR", // Replace with your Google Analytics ID
					async: true,
				},
				{
					children: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-4QMWEQCWKR');
					`,
					type: "text/javascript",
				},
			],
		},
	},
});
