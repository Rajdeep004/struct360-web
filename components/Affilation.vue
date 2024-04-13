<script setup>
const affilation_base = "/img/affilations/";
const software_base =  "/img/softwares/";

const Affilations = [
    {
        id: "1",
        path: affilation_base + "CFSEI.png",
        alt: "CFSEI Logo",
    },
    {
        id: "2",
        path: affilation_base + "AGC.png",
        alt: "AGC Logo",
    },
    {
        id: "3",
        path: affilation_base + "APEGA.png",
        alt: "APEGA Logo",
    },
    {
        id: "4",
        path: affilation_base + "AISC.png",
        alt: "AISC Logo",
    },
    {
        id: "5",
        path: affilation_base + "ASCE.png",
        alt: "ASCE Logo",
    },
    {
        id: "6",
        path: affilation_base + "AISI.png",
        alt: "AISI Logo",
    },
    // {
    //     id: "7",
    //     path: affilation_base + "PELS.png",
    //     alt: "PELS Logo",
    // },
    {
        id: "8",
        path: affilation_base + "AWC.png",
        alt: "AWC Logo",
    },
    
];

const Softwares = [
    {
        id: "1",
        path: software_base + "AutoCAD.png",
        alt: "AutoCAD Logo",
    },
    {
        id: "2",
        path: software_base + "Revit.png",
        alt: "Revit Logo",
    },
    {
        id: "3",
        path: software_base + "RISA3D.png",
        alt: "RISA3D Logo",
    },
    {
        id: "4",
        path: software_base + "SAP 2000.png",
        alt: "SAP 2000 Logo",
    },
    
    {
        id: "5",
        path: software_base + "Enercalc.png",
        alt: "Enercalc Logo",
    },
    {
        id: "6",
        path: software_base + "hilti.png",
        alt: "hilti Logo",
    },
    
];
</script>

<template>
    <UContainer id="affilation" as="section" class="py-24 flex flex-col justify-center items-center space-y-12">
        <div class="space-y-6 text-center">
            <h6 class="font-medium uppercase tracking-widest">
                Engineering Technology
            </h6>
            <h1 class="h1">Utilizing Industry Leading Software</h1>
        </div>

        <div class="flex items-center justify-center flex-wrap gap-16">
            <img 
                v-for="img in Softwares" 
                :key="img.id" 
                :src="img.path" 
                :alt="img.alt"
                class="w-28 object-contain grayscale hover:grayscale-0 basicanimation" 
            />
        </div>

        <div class="space-y-6 text-center">
            <!-- <h6 class="font-medium uppercase tracking-widest">
               
            </h6> -->
            <h1 class="h1">Our affiliations | Memberships</h1>
        </div>

        <div class="flex justify-center items-center gap-16 flex-wrap">
            <img v-for="img in Affilations" :key="img.id" :src="img.path" :alt="img.alt"
                class="w-28 object-contain grayscale hover:grayscale-0 basicanimation" />
        </div>
    </UContainer>
</template>

<style scoped lang="postcss"></style>