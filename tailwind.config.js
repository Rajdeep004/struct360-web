/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	colorMode: {
		preference: "light",
	},
	theme: {
		extend: {
			transform: ["hover"],
			perspective: ["hover"],
			colors: {
				text: "#211b08",
				bkg: "#fcfcfc",
				primary: "#253858",
				secondary: "#aeb446",
				accent: "#7D0875",
			},
		},
	},
	variants: {
		extend: {
			transform: ["hover", "group-hover"],
			perspective: ["hover", "group-hover"],
		},
	},
	plugins: [],
};
