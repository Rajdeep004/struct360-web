<script setup></script>

<template>
	<div class="bg-zinc-100">
		<div
			as="section"
			id="projects"
			class="container mx-auto px-4 py-12"
		>
			<Swiper
				:modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
				:slides-per-view="1"
				:loop="true"
				:navigation="true"
				:pagination="{
					el: '#swiper-pagination',
					clickable: true,
				}"
				:autoplay="{
					delay: 4000,
					disableOnInteraction: true,
				}"
			>
				<SwiperSlide v-for="i in 10">
					<div
						class="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row"
					>
						<div>
							<h2 class="h2 text-accent">Project title # {{ i }}</h2>
							<h6 class="h6 text-center">CTA button</h6>
						</div>
						<img
							src="/img/projects/p1.png"
							alt="project"
							class="lg:w-1/3"
						/>
					</div>
				</SwiperSlide>
				<div class="flex"><div id="swiper-pagination" /></div>
			</Swiper>
		</div>
	</div>
</template>

<style scoped lang="postcss">
	#projects {
		--swiper-navigation-size: 2rem;
		--swiper-navigation-color: #211b08;
		--swiper-pagination-color: #211b08;
	}
	#swiper-pagination {
		color: blue;
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1rem;
	}
</style>
