<script setup>
	import {
		faPenToSquare,
		faHandshake,
		faBuilding,
	} from "@fortawesome/free-regular-svg-icons";
	import { faMedal } from "@fortawesome/free-solid-svg-icons";
	const features = [
		{
			title: "Expertise in Building Codes",
			description:
				"It is hard to navigate through complex building codes and regulations. STRUCT360 ensures that your project is in line with the latest standards, thereby enhancing safety and performance.",
			icon: faPenToSquare,
		},
		{
			title: "Commitment to Excellence",
			description:
				"Our commitment is from the initial planning to the final handover, always exceeding expectations. Whether your project is big or small, STRUCT360 is a reliable partner with deep industry knowledge and practical experience",
			icon: faMedal,
		},
		{
			title: "Customer-Centric Approach",
			description:
				"At STRUCT360, we combine innovative thinking with technical expertise to produce outstanding results. Our emphasis on precision, collaboration, and sustainability ensures that your ideas come to life seamlessly",
			icon: faHandshake,
		},
		{
			title: "Let’s Build Something Remarkable",
			description:
				"Beyond delivering projects, we are creating experiences that leave a mark. Partner with us to see how a team that values excellence makes all the difference.",
			icon: faBuilding,
		},
	];
	const expersties = ref([
		"Expert Coordination",
		"Detailed 3D modeling",
		"Collaboration with Different Stakeholders",
		"Full Project Support from Bid to Final phase",
		"24X7  workflow",
	]);
</script>

<template>
	<section
		id="about"
		class="z-20 m-4"
	>
		<div class="space-y-3">
			<div class="mb-8 space-y-6 text-center">
				<h6 class="font-medium uppercase tracking-widest">Why STRUCT360?</h6>
				<h2 class="h1">
					Adding Value to Your
					<span class="h1 underlineTxt">Construction Project</span>
				</h2>
			</div>
			<p class="container mx-auto text-justify">
				Any delay in construction project due to improper coordination between
				design consultants??
				<br />
				<br />
				STRUCT360 provides one-stop services for your whole construction
				projects under one-roof. Our services range from your initial
				imagination, bid planning to BIM modeling to construction drawings and
				final coordination with contractors for any construction issues. Our
				highly skilled engineers and modelers help and distribute your project
				workload with efficient engineering methods.
			</p>
			<div class="container mx-auto border border-accent pl-16 lg:pl-12">
				<ul class="flex list-disc flex-col lg:flex-row lg:gap-8">
					<li
						v-for="(it, index) in expersties"
						:key="index"
						v-text="it"
					/>
				</ul>
			</div>
		</div>
	</section>
</template>
