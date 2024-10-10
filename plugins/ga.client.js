export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook("page:finish", () => {
		if (typeof window.gtag === "function") {
			gtag("config", "G-4QMWEQCWKR", {
				page_path: window.location.pathname,
			});
		}
	});
});
