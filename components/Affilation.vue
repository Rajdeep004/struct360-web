<script setup>
	const affilation_base = "/img/affilations/";
	const software_base = "/img/softwares/";

	const Affilations = [
		{
			id: "1",
			path: affilation_base + "CFSEI.png",
			alt: "CFSEI",
			size: "w-36",
		},
		{
			id: "2",
			path: affilation_base + "AGC.png",
			alt: "AGC",
			size: "w-36",
		},
		{
			id: "3",
			path: affilation_base + "APEGA.png",
			alt: "APEGA",
			size: "!w-20",
		},
		{
			id: "4",
			path: affilation_base + "AISC.png",
			alt: "AISC",
		},
		{
			id: "5",
			path: affilation_base + "ASCE.png",
			alt: "ASCE",
		},
		{
			id: "6",
			path: affilation_base + "AISI.png",
			alt: "AISI",
		},

		{
			id: "7",
			path: affilation_base + "AWC.png",
			alt: "AWC",
			size: "w-48",
		},
		{
			id: "8",
			path: affilation_base + "AWCI.svg",
			alt: "AWCI",
			size: "w-48",
		},
		{
			id: "9",
			path: affilation_base + "CWC.png",
			alt: "AWC",
			size: "w-24",
		},
		// {
		//     id: "10",
		//     path: affilation_base + "PELS.png",
		//     alt: "PELS",
		//     size: "w-32"
		// },
	];

	const Softwares = [
		{
			id: "1",
			path: software_base + "AutoCAD.png",
			alt: "AutoCAD",
			size: "w-32",
		},
		{
			id: "2",
			path: software_base + "Revit.png",
			alt: "Revit",
			size: "w-28",
		},
		{
			id: "3",
			path: software_base + "RISA3D.svg",
			alt: "RISA",
			size: "w-32",
		},
		{
			id: "4",
			path: software_base + "CSI.svg",
			alt: "CSI",
			size: "w-40",
		},

		{
			id: "5",
			path: software_base + "Enercalc.png",
			alt: "Enercalc",
			size: "w-40",
		},
		{
			id: "6",
			path: software_base + "hilti.png",
			alt: "hilti",
			size: "w-40",
		},
		{
			id: "7",
			path: software_base + "SST.png",
			alt: "SST",
			size: "w-28",
		},
	];

	const markets = ref([
		"Motel/Leisure",
		"Restaurant",
		"Retail",
		"C store",
		"k-12",
		"Health care",
		"Entertainment",
		"Cultural",
		"Commercial",
		"Residential",
		"Higher Education",
		"civic / recreations",
		"Hospitality",
		"Distribution center",
		"Retail",
		"Grocery Food market",
		"Commercial Food Kitchen",
		"Stadium Facility AND Ssoreboard",
		"Government",
		"Financial",
	]);
	let i = ref(0);
	onMounted(() => {
		setInterval(() => {
			i.value = i.value === markets.value.length - 1 ? 0 : i.value + 1;
		}, 1500);
	});
</script>

<template>
	<section
		id="markets"
		class="mx-4 flex snap-y snap-mandatory flex-col items-center justify-center gap-16 lg:mx-2"
	>
		<div class="snap-center space-y-8">
			<div class="space-y-6 text-center">
				<h6 class="font-medium uppercase tracking-widest">MARKETS SERVING</h6>
				<h2 class="h1 capitalize">
					Centering With
					<span class="h1 underlineTxt inline-block capitalize">
						Innovative
					</span>
					Design
				</h2>
			</div>
			<div class="flex flex-wrap items-center justify-center gap-16">
				<h3 class="h3 capitalize text-accent">
					{{ markets[i] }}
				</h3>
			</div>
		</div>

		<div class="snap-center space-y-8">
			<div class="space-y-6 text-center">
				<h6 class="font-medium uppercase tracking-widest">
					Engineering Technology
				</h6>
				<h2 class="h1 capitalize">
					Utilizing Industry
					<span class="h1 underlineTxt inline-block capitalize">Leading</span>
					Software
				</h2>
			</div>
			<div class="flex flex-wrap items-center justify-center gap-16">
				<img
					v-for="img in Softwares"
					:key="img.id"
					:src="img.path"
					:alt="img.alt"
					class="basicanimation object-contain grayscale hover:grayscale-0"
					:class="img.size"
				/>
			</div>
		</div>

		<div
			id="affilation"
			class="snap-center space-y-8"
		>
			<div class="space-y-6 text-center">
				<h6 class="font-medium uppercase tracking-widest">
					MEMBERSHIPS & AFFILIATIONS
				</h6>
				<h2 class="h1 capitalize">
					Colloborating With
					<span class="h1 underlineTxt inline-block">Different</span>
					Organizations
				</h2>
			</div>
			<div class="flex flex-wrap items-center justify-center gap-16">
				<img
					v-for="img in Affilations"
					:key="img.id"
					:src="img.path"
					:alt="img.alt"
					class="basicanimation w-28 object-contain grayscale hover:grayscale-0"
					:class="img.size"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped lang="postcss"></style>
