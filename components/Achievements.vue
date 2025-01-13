<template>
	<div
		class="py-16"
		id="achievements"
	>
		<div class="m-auto px-6 xl:container md:px-12">
			<div class="space-y-6 text-center">
				<h6 class="font-medium uppercase tracking-widest">Achievements</h6>
				<h2 class="h1">
					Delivering
					<span class="h1 underlineTxt">Excellence</span>
					with Our Expertise
				</h2>
			</div>
			<div
				class="mt-16 grid overflow-hidden border border-zinc-100 sm:grid-cols-2 lg:grid-cols-3"
			>
				<div
					class="hover:shadow-grey-600/10 group relative bg-white transition hover:z-[1] hover:!border-2 hover:!border-accent hover:shadow-2xl"
				>
					<div class="relative space-y-8 p-8 py-12">
						<div
							aria-hidden="true"
							class="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10"
						>
							<span class="text-3xl font-bold text-accent">500+</span>
						</div>

						<div class="space-y-2">
							<h4 class="h4 transition group-hover:text-accent">Projects</h4>
							<p class="text-gray-600 dark:text-gray-300">
								We have successfully completed over 500 projects, spanning
								commercial, residential, and industrial developments. With our
								expertise in structural engineering, BIM modeling, and wood
								framing, we guarantee that each project adheres to local codes
								while upholding the highest standards of safety, efficiency, and
								sustainability.
							</p>
						</div>
						<!-- <a href="#" class="flex items-center justify-between group-hover:text-accent">
            <span class="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </a> -->
					</div>
				</div>
				<div
					class="hover:shadow-grey-600/10 group relative bg-white transition hover:z-[2] hover:!border-2 hover:!border-accent hover:shadow-2xl"
				>
					<div class="relative space-y-8 p-8 py-12">
						<div
							aria-hidden="true"
							class="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10"
						>
							<span class="text-4xl font-bold text-accent">15+</span>
						</div>

						<div class="space-y-2">
							<h4 class="h4 transition group-hover:text-accent">
								US & Canada States/Provinces
							</h4>
							<p class="text-gray-600 dark:text-gray-300">
								STRUCT360 operates in more than 15 regions, including
								California, Texas, Ontario, and British Columbia. We offer a
								range of services from drywall design to truss bracing and BIM
								coordination, utilizing advanced tools like AutoCAD, Revit, and
								Enercalc to deliver innovative solutions for the construction
								markets in both the United States and Canada.
							</p>
						</div>
						<!-- <a href="#" class="flex items-center justify-between group-hover:text-accent">
            <span class="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </a> -->
					</div>
				</div>
				<div
					class="hover:shadow-grey-600/10 group relative bg-white transition hover:z-[3] hover:!border-2 hover:!border-accent hover:shadow-2xl"
				>
					<div class="relative space-y-8 p-8 py-12">
						<div
							aria-hidden="true"
							class="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10"
						>
							<span class="text-4xl font-bold text-accent">10+</span>
						</div>

						<div class="space-y-2">
							<h4 class="h4 transition group-hover:text-accent">
								Markets Served
							</h4>
							<p class="text-gray-600 dark:text-gray-300">
								We offer specialized solutions across various markets in the USA
								and Canada, encompassing commercial developments, residential
								projects, industrial facilities, healthcare institutions, and
								hospitality spaces. From designing efficient office buildings
								and sustainable homes to creating innovative hospitals and
								hotels, our commitment to precision, functionality, and
								compliance guarantees that every project meets the highest
								standards of quality and performance.
							</p>
						</div>
						<!-- <a href="#" class="flex items-center justify-between group-hover:text-accent">
            <span class="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </a> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.heading {
		text-decoration: none;
		display: inline-block;
		@apply p-0 md:p-4;
		/* padding: 15px; */
		position: relative;
	}

	.heading:hover::after {
		width: 100%;
		left: 0;
	}

	.heading::after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: "";
		display: block;
		height: 4px;
		left: 0;
		position: absolute;
		@apply bg-fuchsia-400/75;
		transition:
			width 0.5s ease 0s,
			right 0.5s ease 0s;
		width: 0;
	}
</style>
