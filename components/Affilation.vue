<script setup>
const LogoGrid = [
    {
        id: "1",
        path: "/apega.png",
        alt: "Apega Logo"
    },
    {
        id: "2",
        path: "./aisc.png",
        alt: "AISC Logo"
    },
    {
        id: "3",
        path: "./PELS.png",
        alt: "PELS Logo"
    }
]
</script>

<template>
    <UContainer 
        id="affilation"
        as="section" 
        class="py-24 flex flex-col justify-center items-center space-y-12"
    >
        <div class="space-y-6 text-center">
            <h6 class="font-medium uppercase tracking-widest">Engineering Technology</h6>
            <h1 class="h1">Utilizing Industry Leading Software</h1>
        </div>
        
        <div class="flex items-center gap-16">
            <img 
                v-for="img in LogoGrid"
                :key="img.id"
                :src="img.path"
                :alt="img.alt"
                class="w-28 object-contain grayscale hover:grayscale-0 basicanimation"
            />
        </div>
    </UContainer>
</template>

<style scoped lang="postcss"></style>