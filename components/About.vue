<script setup>
	const expersties = ref([
		"Expert Coordination",
		"Detailed 3D modeling",
		"Collaboration with Different Stakeholders",
		"Full Project Support from Bid to Final phase",
		"24X7  workflow",
	]);
</script>

<template>
	<div
		id="about"
		as="section"
		class="m-4"
	>
		<div class="space-y-3">
			<div class="mb-8 space-y-6 text-center">
				<h6 class="font-medium uppercase tracking-widest">About us</h6>
				<h1 class="h1">
					Adding Value to Your
					<span class="h1 underlineTxt inline- relative after:!bg-accent/50">
						Construction Project
					</span>
				</h1>
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
	</div>
</template>

<style lang="postcss">
	/* .txtunderline */
</style>
