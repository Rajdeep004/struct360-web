<script setup>
const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "#about" },
	{ name: "Services", href: "#services" },
	{ name: "Affilation", href: "#affilation" },
];
</script>

<template>
	<footer class="bg-zinc-100 text-slate-900 py-8">
		<div class="container lg:py-12 mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col md:flex-row items-center justify-center gap-8 lg:divide-x-2 divide-accent">
				<!-- part 1 -->
				<div class="flex items-center space-x-3 mb-4 md:mb-0 relative">
					<img src="/struct360 sec.svg" alt="Struct 360 Engineering Logo" class="h-40 w-auto" />
					<Icon name="ri:trademark-fill" class="absolute right-[-20px] top-12 text-lg" />
				</div>
				<!-- part 2 -->
				<div class="flex flex-col lg:divide-y-2 divide-accent">
					<!-- part 2.1-->
					<div class="p-4 space-y-4">
						<h6 class="h5">Head Office</h6>
						<a class="text-lg hover:underline" href="https://maps.app.goo.gl/9yaLg4voLmLJE7oc9">
							<!-- <Icon
								name="material-symbols:location-on-rounded"
								class="text-accent text-2xl"
							/> -->
							121, Fortune Business Hub, Near Shell Petrol pump, Science City, Ahmedabad 380059
						</a>
					</div>

					<!-- part 2.2 -->
					<div class="p-4 space-y-4">
						<!-- Career email -->

						<a href="mailto:HR@struct360.com" class="space-x-1 group">
							<Icon name="ph:bag-fill" class="text-accent text-2xl group-hover:text-gray-800" />
							<span class="group-hover:underline">HR@struct360.com</span>
						</a>

						<!-- Social Icons -->
						<div class="flex items-center gap-4">
							<span class="font-semibold text-md">Social Links:</span>
							<a href="https://in.linkedin.com/company/struct360" target="_blank" rel="noopener noreferrer">
								<Icon name="bi:linkedin" class="text-accent text-xl hover:text-gray-800" />
							</a>
							<a href="https://in.indeed.com/cmp/Struct360" target="_blank" rel="noopener noreferrer">
								<Icon name="cib:indeed" class="text-accent text-xl hover:text-gray-800" />
							</a>
							<a href="https://www.instagram.com/struct360?igsh=MWw1ZjBuNXdpbWJ2MA==" target="_blank"
								rel="noopener noreferrer">
								<Icon name="bi:instagram" class="text-accent text-xl hover:text-gray-800" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped lang="postcss"></style>
