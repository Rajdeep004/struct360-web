<script setup>
    const val = ref(false);
</script>

<template>
    <div class="space-y-12">
        <Hero />
        <button
            class="px-4 py-2 bg-accent text-white rounded-lg fixed z-50 end-0 -rotate-90 hidden md:inline-flex -mx-6 bottom-48"
            @click="val = !val"
        >
            Inquiry
        </button>
        <Inquiry v-if="val" />
        <About />
        <!-- <Projects /> -->
        <Services />
        <Stas />
        <Affilation class="space-y-24"/>
        <Footer />
    </div>
</template>
