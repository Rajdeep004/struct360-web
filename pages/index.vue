<script setup>
    const isFormOpen = ref(false);
    watch(isFormOpen, ()=>{
        console.log("value of isFormOpen is", isFormOpen.value);
    })
</script>

<template>
    <div class="space-y-12">
        <Hero @form="isFormOpen = !isFormOpen"/>
        <button
            class="px-4 py-2 bg-accent text-white rounded-lg fixed z-50 end-0 -rotate-90 hidden md:inline-flex -mx-6 bottom-48"
            @click="isFormOpen = true"
        >
            Inquiry
        </button>
        <Inquiry :isOpen="isFormOpen" @toggle="(x) => isFormOpen = x"/>
        <About />
        <!-- <Projects /> -->
        <Services />
        <Stas />
        <Affilation class="space-y-24"/>
        <Footer />
    </div>
</template>
