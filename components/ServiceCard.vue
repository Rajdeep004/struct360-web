<script setup lang="ts">
	interface Service {
		icon: string;
		title: string;
		caption: string;
		services: string[];
	}

	const props = defineProps<{
		service: Service;
	}>();

	const isFlipped = ref(false);

	const toggleFlip = () => {
		isFlipped.value = !isFlipped.value;
	};

	// Ensure keyboard accessibility
	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			toggleFlip();
		}
	};
</script>

<template>
	<div
		class="flip-card-container"
		@mouseenter="toggleFlip"
		@mouseleave="toggleFlip"
		@keypress="handleKeyPress"
		tabindex="0"
		role="button"
		:aria-label="`${service.title} service information. Press Enter to view details`"
		:aria-expanded="isFlipped"
	>
		<div
			class="flip-card"
			:class="{ 'is-flipped': isFlipped }"
		>
			<div class="flip-card-inner">
				<!-- Front of card -->
				<div
					class="flip-card-front"
					:aria-hidden="isFlipped"
				>
					<UCard
						class="card-content"
						hover
					>
						<div class="flex h-full flex-col items-start p-8">
							<div class="service-icon-wrapper mb-6">
								<font-awesome
									:icon="service.icon"
									class="basicanimation mb-4 text-5xl group-hover:text-accent"
								/>
							</div>
							<h4 class="h4 capatalise mb-2">{{ service.title }}</h4>
							<p class="text-gray-600">{{ service.caption }}</p>
							<div class="pt-2">
								<UButton
									color="primary"
									variant="ghost"
									label="View Services"
									trailing-icon="i-heroicons-arrow-right"
									class="transition-transform group-hover:translate-y-1"
								/>
							</div>
						</div>
					</UCard>
				</div>

				<!-- Back of card -->
				<div
					class="flip-card-back"
					:aria-hidden="!isFlipped"
				>
					<UCard
						class="card-content"
						hover
					>
						<div class="flex h-full flex-col p-8">
							<!-- <div class="service-list-wrapper mb-6">
								<UIcon
									name="i-heroicons-list-bullet"
									class="text-4xl text-accent"
								/>
							</div> -->
							<h4 class="h4 mb-2">Our Services</h4>
							<ul class="w-full space-y-1 text-left">
								<li
									v-for="item in service.services"
									:key="item"
									class="flex items-start gap-3 text-gray-700"
								>
									<UIcon
										name="i-heroicons-check-circle"
										class="mt-1 flex-shrink-0 text-accent"
									/>
									<span>{{ item }}</span>
								</li>
							</ul>
						</div>
					</UCard>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="postcss">
	.flip-card-container {
		perspective: 1000px;
		@apply h-[30rem] w-full cursor-pointer outline-none;
	}

	.flip-card-container:focus-visible {
		/* outline: 2px solid var(--color-accent); */
		outline-offset: 4px;
		border-radius: 0px;
	}

	.flip-card {
		position: relative;
		width: 100%;
		height: 100%;
		/* text-align: center; */
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
		transform-style: preserve-3d;
	}

	.flip-card.is-flipped {
		transform: rotateY(180deg);
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
	}

	.card-content {
		width: 100%;
		height: 100%;
	}

	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		transform-style: preserve-3d;
	}

	.flip-card-back {
		transform: rotateY(180deg);
	}

	.service-icon-wrapper,
	.service-list-wrapper {
		@apply flex h-16 w-16 items-center justify-center rounded-full;
		transition: transform 0.3s ease;
	}

	.flip-card-container:hover .service-icon-wrapper,
	.flip-card-container:hover .service-list-wrapper {
		transform: scale(1.1);
	}

	@media (prefers-reduced-motion: reduce) {
		.flip-card {
			transition: transform 0.1s;
		}

		.service-icon-wrapper,
		.service-list-wrapper {
			transition: none;
		}
	}
</style>
