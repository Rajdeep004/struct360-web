<script setup>
	const isFormOpen = ref(false);
	watch(isFormOpen, () => {
		console.log("value of isFormOpen is", isFormOpen.value);
	});
</script>

<template>
	<div class="space-y-12">
		<Hero @form="isFormOpen = !isFormOpen" />
		<button
			class="fixed bottom-48 end-0 z-50 -mx-6 hidden -rotate-90 rounded-lg bg-accent px-4 py-2 text-white md:inline-flex"
			@click="isFormOpen = true"
		>
			Inquiry
		</button>
		<Inquiry
			:isOpen="isFormOpen"
			@toggle="(x) => (isFormOpen = x)"
		/>
		<About />
		<!-- <Projects /> -->
		<Services />
		<Achievements />
		<Affilation class="space-y-24" />
		<Footer />
	</div>
</template>
