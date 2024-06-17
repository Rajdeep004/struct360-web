<script setup>
	const navigation = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "#about" },
		{ name: "Services", href: "#services" },
		{ name: "Affilation", href: "#affilation" },
	];
</script>

<template>
	<footer class="bg-zinc-100 py-8 text-slate-900">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 lg:py-12">
			<div
				class="flex flex-col items-center justify-center gap-8 divide-accent md:flex-row lg:divide-x-2"
			>
				<!-- part 1 -->
				<div class="relative mb-4 flex items-center space-x-3 md:mb-0">
					<img
						src="/struct360 sec.svg"
						alt="Struct 360 Engineering Logo"
						class="h-40 w-auto"
					/>
					<Icon
						name="ri:trademark-fill"
						class="absolute right-[-20px] top-12 text-lg"
					/>
				</div>
				<!-- part 2 -->
				<div class="flex flex-col divide-accent lg:divide-y-2">
					<!-- part 2.1-->
					<div class="space-y-4 p-4">
						<h6 class="h5">Head Office</h6>
						<a
							class="text-lg hover:underline"
							href="https://maps.app.goo.gl/ueUEBCc2YPf176nA9"
						>
							<!-- <Icon
								name="material-symbols:location-on-rounded"
								class="text-accent text-2xl"
							/> -->
							121, Fortune Business Hub, Near Shell Petrol pump, Science City,
							Ahmedabad 380059
						</a>
					</div>

					<!-- part 2.2 -->
					<div class="space-y-4 p-4">
						<!-- Career email -->

						<a
							href="mailto:HR@struct360.com"
							class="group space-x-1"
						>
							<Icon
								name="ph:bag-fill"
								class="text-2xl text-accent group-hover:text-gray-800"
							/>
							<span class="group-hover:underline">HR@struct360.com</span>
						</a>

						<!-- Social Icons -->
						<div class="flex items-center gap-4">
							<span class="text-md font-semibold">Social Links:</span>
							<a
								href="https://in.linkedin.com/company/struct360"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Icon
									name="bi:linkedin"
									class="text-xl text-accent hover:text-gray-800"
								/>
							</a>
							<a
								href="https://in.indeed.com/cmp/Struct360"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Icon
									name="cib:indeed"
									class="text-xl text-accent hover:text-gray-800"
								/>
							</a>
							<a
								href="https://www.instagram.com/struct360?igsh=MWw1ZjBuNXdpbWJ2MA=="
								target="_blank"
								rel="noopener noreferrer"
							>
								<Icon
									name="bi:instagram"
									class="text-xl text-accent hover:text-gray-800"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped lang="postcss"></style>
