<script setup>
const isFormOpen = ref(false);
watch(isFormOpen, () => {
	console.log("value of isFormOpen is", isFormOpen.value);
});

useSeoMeta({
	title: "STRUCT360",
	meta: [
		{
			name: "description",
			content: `STRUCT360 provides one-stop services for your whole construction projects under one-roof. Our services range from your initial imagination, bid planning to BIM modeling to construction drawings and final coordination with contractors for any construction issues. Our highly skilled engineers and modelers help and distribute your project workload with efficient engineering methods.`,
		},
		// Open Graph / Facebook
		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: 'https://www.struct360.com/' },
		{ property: 'og:title', content: 'STRUCT360' },
		{ property: 'og:description', content: 'STRUCT360 provides one-stop services for your whole construction projects under one-roof. Our services range from your initial imagination, bid planning to BIM modeling to construction drawings and final coordination with contractors for any construction issues. Our highly skilled engineers and modelers help and distribute your project workload with efficient engineering methods.' },
		{ property: 'og:image', content: 'https://www.struct360.com/struct360%20sec.svg' },
		// Twitter
		{ property: 'twitter:card', content: 'summary_large_image' },
		{ property: 'twitter:url', content: 'https://www.struct360.com/' },
		{ property: 'twitter:title', content: 'STRUCT360' },
		{ property: 'twitter:description', content: 'STRUCT360 provides one-stop services for your whole construction projects under one-roof. Our services range from your initial imagination, bid planning to BIM modeling to construction drawings and final coordination with contractors for any construction issues. Our highly skilled engineers and modelers help and distribute your project workload with efficient engineering methods.' },
		{ property: 'twitter:image', content: 'https://www.struct360.com/struct360%20sec.svg' },
		{
			name: "keywords",
			content: `#woodframingconsultants #americanwoodframing #woodcontractors #structuralengineergeorgia #woodceiling #PEMBstructural #drywall #spfwood #lvlframing #wallstud #designconsultant #nydesigner #usadesignconsultant #americandrywallandceiling #canadadesignconsultant #structuralengineerinnewyork #structuralengineerinflorida #structuralengineerinalabama #architectingeorgia #architectincalifornia #structuralengineerincalifornia #structuralengineerinvirginia #structuralengineerinnorthcarolina #structuralengineerinsouthcarolina #structuralengineerinnewjersey #structuralengineerinoregon #architectinoregon #architectinwashington #restaurantconsultant #franchisedesign #ICFwallconstruction #ICFframing #steelconstruction #AISC #ASCE #AWCI #CFSEI #wallframing #coldformedframing #BIM #BIMmodeling #buildinginformationmodeling #REVIT #REVITmodeling #MEP #permitplanning #bidplanning #suppertservices #rendering #C-storeengineering #C-store #scantobim`,
		},
	],
});
</script>

<template>
	<main class="space-y-24">
		<Hero @form="isFormOpen = !isFormOpen" />
		<button
			class="fixed bottom-48 end-0 z-50 -mx-6 hidden -rotate-90 rounded-lg bg-accent px-4 py-2 text-white md:inline-flex"
			@click="isFormOpen = true">
			Inquiry
		</button>
		<Inquiry :isOpen="isFormOpen" @toggle="(x) => (isFormOpen = x)" />
		<About />
		<!-- <Projects /> -->
		<Services class="!mt-36" />
		<Achievements />
		<Affilation class="space-y-24" />
		<Footer />
	</main>
</template>
