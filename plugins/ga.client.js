export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook("page:finish", () => {
		if (typeof window.gtag === "function") {
			gtag("config", "G-M6RZSYPBYV", {
				page_path: window.location.pathname,
			});
		}
	});
});
