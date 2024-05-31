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
            <div
                class="flex flex-col md:flex-row items-center justify-center gap-8 lg:divide-x-2 divide-accent"
            >
                <!-- part 1 -->
                <div class="flex items-center space-x-3 mb-4 md:mb-0 relative">
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
                <div class="flex flex-col lg:divide-y-2 divide-accent">
                    <!-- part 2.1-->
                    <div class="p-4 space-y-4">
                        <h6 class="h5">Head Office</h6>
                        <p class="text-lg">
                            <!-- <Icon
                                name="material-symbols:location-on-rounded"
                                class="text-accent text-2xl"
                            /> -->
                            437 Memorial Parkway, Red Deer County AB
                        </p>
                    </div>

                    <!-- part 2.2 -->
                    <div class="p-4 space-y-4">
                        <!-- Career email -->
                        <div class="space-x-1">
                            <Icon
                                name="ph:bag-fill"
                                class="text-accent text-2xl"
                            />
                            <a href="/careers" class="">
                                career@struct360.com
                            </a>
                        </div>
                        <!-- Social Icons -->
                        <div class="flex items-center gap-4">
                            <span class="font-semibold text-md"
                                >Social Links:</span
                            >
                            <Icon
                                name="bi:linkedin"
                                class="text-accent text-xl"
                            />
                            <Icon
                                name="cib:indeed"
                                class="text-accent text-xl"
                            />
                            <Icon
                                name="bi:instagram"
                                class="text-accent text-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="postcss"></style>
