<script setup>
const p = defineProps({
	isOpen: Boolean,
});
import {
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/vue";

const countries = ref(["Canada", "USA", "India"]);
const states = ref([]);
const cities = ref([]);
const formdata = ref({
	name: "",
	phone: "",
	email: "",
	message: "",
	country: ref(countries[0]),
	state: "",
	city: "",
	// cretedAt: new Date(Date.now()).toLocaleString(),
});
const submitForm = async () => {
	p.isOpen = false;
	// console.log(formdata);
	//   await useFetch('url',{
	//     method: "post",
	//     query: formData
	//   })
};
</script>

<template>
	<TransitionRoot appear :show="p.isOpen" as="template">
		<Dialog as="div" class="relative z-50">
			<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
				leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 bg-black/25" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="flex min-h-full items-center justify-center p-4 text-center">
					<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95">
						<DialogPanel
							class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
							<!-- <DialogTitle
                                as="h3"
                                class="h3 leading-6 text-gray-900"
                            >
                                Inquiry Form
                            </DialogTitle> -->
							<div class="flex w-full shrink-0 flex-col lg:flex-row">
								<Icon name="maki:cross-11"
									class="basicanimation absolute right-6 top-4 cursor-pointer text-lg text-black hover:scale-110"
									@click="$emit('toggle', false)" />
								<div class="card-body items-center justify-center gap-8">
									<img src="/struct360 sec.svg" alt="Struct 360 Logo" class="w-56" />
									<!-- <div>
                                        <h3 class="h3 text-center text-primary">
                                            Any Queries??
                                        </h3>
                                        <h6
                                            class="h5 text-center text-emerald-600"
                                        >
                                            Let us know
                                        </h6>
                                    </div> -->
								</div>
								<form action="https://formsubmit.co/info@struct360.com" method="POST"
									class="card-body space-y-2 lg:w-1/2">
									<h2 class="h3 lg:h1 mb-8">Inquiry Now!</h2>
									<UFormGroup label="Name">
										<UInput placeholder="Peter John" type="text" name="Name"
											icon="i-heroicons-user-circle" v-model="formdata.name" />
									</UFormGroup>
									<UFormGroup label="Contact Number">
										<UInput placeholder="+1-909-909-9999" type="tel" name="Contact"
											icon="i-heroicons-phone" v-model="formdata.phone" />
									</UFormGroup>

									<UFormGroup label="Email">
										<UInput placeholder="you@example.com" type="email" name="Email"
											icon="i-heroicons-envelope" v-model="formdata.email" />
									</UFormGroup>
									<UFormGroup label="Country">
										<UInput placeholder="Canada" type="text" name="Country"
											v-model="formdata.country" />
									</UFormGroup>
									<UFormGroup label="State">
										<UInput placeholder="Columbia" type="text" name="State" v-model="formdata.state" />
									</UFormGroup>
									<UFormGroup label="City">
										<UInput placeholder="Leticia" type="text" name="City" v-model="formdata.city" />
									</UFormGroup>
									<UFormGroup label="Inquiry">
										<UTextarea placeholder="Message" type="text" name="Message"
											v-model="formdata.message" />
									</UFormGroup>
									<button
										class="rounded-lg bg-accent px-4 py-2 font-semibold text-white hover:bg-accent/90"
										@click="val = !val">
										Submit
									</button>
								</form>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<style>
.card-body {
	display: flex;
	display: flex;
	flex: 1 1 auto;
	flex-direction: column;
	flex-direction: column;
	padding: var(--padding-card, 2rem
			/* 32px */
		);
	gap: 0.5rem
		/* 8px */
	;
}

.card-body :where(p) {
	flex-grow: 1;
}

.card.image-full>.card-body {
	position: relative;
	z-index: 20;
	--tw-text-opacity: 1;
	color: var(--fallback-nc, oklch(var(--nc) / var(--tw-text-opacity)));
}

.card.compact .card-body {
	padding: 1rem
		/* 16px */
	;
	font-size: 0.875rem
		/* 14px */
	;
	line-height: 1.25rem
		/* 20px */
	;
}

.card-compact .card-body {
	padding: 1rem
		/* 16px */
	;
	font-size: 0.875rem
		/* 14px */
	;
	line-height: 1.25rem
		/* 20px */
	;
}

.card-normal .card-body {
	padding: var(--padding-card, 2rem
			/* 32px */
		);
	font-size: 1rem
		/* 16px */
	;
	line-height: 1.5rem
		/* 24px */
	;
}
</style>
