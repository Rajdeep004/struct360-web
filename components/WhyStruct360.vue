<script setup>
	const features = [
		{
			title: "Expertise in Building Codes",
			description:
				"It is hard to navigate through complex building codes and regulations. STRUCT360 ensures that your project is in line with the latest standards, thereby enhancing safety and performance.",
			icon: "🏆",
		},
		{
			title: "Commitment to Excellence",
			description:
				"Our commitment is from the initial planning to the final handover, always exceeding expectations. Whether your project is big or small, STRUCT360 is a reliable partner with deep industry knowledge and practical experience",
			icon: "💳",
		},
		{
			title: "Customer-Centric Approach",
			description:
				"At STRUCT360, we combine innovative thinking with technical expertise to produce outstanding results. Our emphasis on precision, collaboration, and sustainability ensures that your ideas come to life seamlessly",
			icon: "👨‍💼",
		},
		{
			title: "Let’s Build Something Remarkable",
			description:
				"Beyond delivering projects, we are creating experiences that leave a mark. Partner with us to see how a team that values excellence makes all the difference.",
			icon: "✨",
		},
	];
</script>

<template>
	<section class="container mx-auto px-6 py-20">
		<div class="gap- mx-auto flex flex-col">
			<!-- Left Section -->
			<div class="flex flex-col justify-center pt-8">
				<div class="mb-8 space-y-6 text-center">
					<h6 class="font-medium uppercase tracking-widest">Why STRUCT360?</h6>
					<h2 class="h1">
						Adding Value to Your
						<span class="h1 underlineTxt">Construction Project</span>
					</h2>
				</div>
			</div>

			<!-- Right Section -->
			<div class="">
				<div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
					<div
						v-for="feature in features"
						:key="feature.title"
						class="flex items-start gap-4 bg-zinc-100 p-6 hover:ring-2 hover:ring-accent"
					>
						<span class="text-3xl">{{ feature.icon }}</span>
						<div>
							<h3 class="mb-2 text-lg font-semibold text-black">
								{{ feature.title }}
							</h3>
							<p class="text-sm leading-relaxed text-gray-600">
								{{ feature.description }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
