<script setup>
    const affilation_base = "/img/affilations/";
    const software_base = "/img/softwares/";

    const Affilations = [
        {
            id: "1",
            path: affilation_base + "CFSEI.png",
            alt: "CFSEI Logo",
            size: "w-36",
        },
        {
            id: "2",
            path: affilation_base + "AGC.png",
            alt: "AGC Logo",
            size: "w-36",
        },
        {
            id: "3",
            path: affilation_base + "APEGA.png",
            alt: "APEGA Logo",
            size: "!w-20",
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
        //     size: "w-32"
        // },
        {
            id: "8",
            path: affilation_base + "AWC.png",
            alt: "AWC Logo",
            size: "w-48",
        },
    ];

    const Softwares = [
        {
            id: "1",
            path: software_base + "AutoCAD.png",
            alt: "AutoCAD Logo",
            size: "w-32",
        },
        {
            id: "2",
            path: software_base + "Revit.png",
            alt: "Revit Logo",
            size: "w-28",
        },
        {
            id: "3",
            path: software_base + "RISA3D.png",
            alt: "RISA3D Logo",
            size: "w-32",
        },
        {
            id: "4",
            path: software_base + "SAP 2000.png",
            alt: "SAP 2000 Logo",
            size: "w-32",
        },

        {
            id: "5",
            path: software_base + "Enercalc.png",
            alt: "Enercalc Logo",
            size: "w-40",
        },
        {
            id: "6",
            path: software_base + "hilti.png",
            alt: "hilti Logo",
            size: "w-40",
        },
    ];

    const markets = ref([
        "Motel/Leisure",
        "Restaurant",
        "Retail",
        "C store",
        "k-12",
        "Health care",
        "Entertainment",
        "Cultural",
        "Commercial",
        "Residential",
        "Higher Education",
        "civic/recreations",
        "Hospitality",
        "Distribution center",
        "Retail",
        "Grocery Food market",
        "Commercial Food Kitchen",
        "Stadium And Sport Venue Rendering and Experience",
        "Government",
        "Financial",
    ]);
    let i = ref(0);
    onMounted(() => {
        setInterval(() => {
            i.value = i.value === markets.value.length - 1 ? 0 : i.value + 1;
        }, 1500);
    });
</script>

<template>
    <UContainer
        id="affilation"
        as="section"
        class="py-24 flex flex-col justify-center items-center gap-16"
    >
        <div class="space-y-8">
            <div class="space-y-6 text-center">
                <h6 class="font-medium uppercase tracking-widest">
                    MARKETS SERVING
                </h6>
                <h1 class="h1">
                    CENTERING WITH
                    <span
                        class="h1 underlineTxt relative inline-block after:!bg-accent/50"
                        >INNOVATIVE</span
                    >
                    DESIGN
                </h1>
            </div>
            <div class="flex items-center justify-center flex-wrap gap-16">
                <h3 class="h3 text-accent uppercase">
                    {{ markets[i] }}
                </h3>
            </div>
        </div>

        <div class="space-y-8">
            <div class="space-y-6 text-center">
                <h6 class="font-medium uppercase tracking-widest">
                    Engineering Technology
                </h6>
                <h1 class="h1 uppercase">
                    Utilizing Industry
                    <span
                        class="h1 underlineTxt relative inline-block after:!bg-accent/50"
                        >Leading</span
                    >
                    Software
                </h1>
            </div>
            <div class="flex items-center justify-center flex-wrap gap-16">
                <img
                    v-for="img in Softwares"
                    :key="img.id"
                    :src="img.path"
                    :alt="img.alt"
                    class="object-contain grayscale hover:grayscale-0 basicanimation"
                    :class="img.size"
                />
            </div>
        </div>

        <div class="space-y-8">
            <div class="space-y-6 text-center">
                <h6 class="font-medium uppercase tracking-widest">
                    MEMBERSHIPS & AFFILIATIONS
                </h6>
                <h1 class="h1">
                    COLLOBORATING WITH
                    <span
                        class="h1 underlineTxt relative inline-block after:!bg-accent/50"
                        >DIFFERENT</span
                    >
                    ORGANIZATIONS
                </h1>
            </div>
            <div class="flex justify-center items-center gap-16 flex-wrap">
                <img
                    v-for="img in Affilations"
                    :key="img.id"
                    :src="img.path"
                    :alt="img.alt"
                    class="w-28 object-contain grayscale hover:grayscale-0 basicanimation"
                    :class="img.size"
                />
            </div>
        </div>
    </UContainer>
</template>

<style scoped lang="postcss"></style>
