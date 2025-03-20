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
				"Navigating complex building codes and structural regulations can be challenging. STRUCT360's structural engineering and BIM consulting services ensure your project complies with the latest industry standards, enhancing safety, efficiency, and performance.",
			icon: faPenToSquare,
		},
		{
			title: "Commitment to Excellence",
			description:
				"From initial project planning to final handover, STRUCT360 is committed to delivering exceptional structural engineering and BIM solutions. Whether it's a large-scale construction or a small project, our engineering consultants bring deep industry expertise and practical experience to exceed expectations.",
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
				"Beyond just delivering projects, STRUCT360 creates engineering solutions that make a lasting impact. Partner with our expert structural engineers and BIM consultants to experience the difference that precision, innovation, and excellence bring to every project.",
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
				Is Your Construction Project Delayed Due to Poor Coordination Between
				Structural Engineers & Design Consultants?
				<br />
				<br />
				STRUCT360 offers expert structural engineering and BIM modeling
				services, providing one-stop construction solutions for projects across
				commercial, industrial, and residential sectors. From bid planning to
				construction drawings and final contractor coordination, our highly
				skilled engineers deliver efficient project execution. Whether it's
				steel frame structures, prefabricated buildings, or advanced BIM
				solutions, we ensure seamless integration and precision-driven
				engineering methods.
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
