<script setup>
import { faCircle, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
const isFlipped = ref(false);
const services = ref(
    [
        {
            title: "Value Engineering/Bid Planning",
            icon: "",
            caption:
                "EVERY FOR NEED TO BE PERMITTED AND IT IS ESSENTIAL STEP FOR ANY OWNER AND INVESTOR TO GET IT RIGHT",
            services: [
                "DEVELOPMENT PERMIT DRAWINGS",
                "VALUE ENGINEERING",
                "COST-CONSTRUCTION MATRIX",
                "PRE-BID DRAWINGS/MODELING",
                "PERMIT APPLICATIONS/CHECKLISTS",
            ],
        },
        {
            title: "ARCHITECTURAL RENDERING",
            icon: "",
            caption:
                "YOUR IMAGINATION OF ANY PROJECT COMES TO LIVE AFTER MODELING AND PROPER VISUALIATION WITH MODERN TECHNOLOGIES",
            services: [
                "PRELIMINARY DRAWINGS COORDINATION",
                "3D MODELING WITH BIM INTEGRATION",
                "DRAWINGS STANDARDS PER IBC/IRC",
                "3D VISULISATION ",
                "ANIMATION WALK THROUGH",
                "AS-BUILT OR EXISTING DEMO DRAWING",
            ],
        },
        {
            title: "STRUCTURAL ENGINEERING/DRAWINGS",
            icon: "",
            caption:
                "MAKING YOUR PROJECT EFFICIENT WITH CLIMATE RESILIENT AND SUSTAIBLE WITH PROPER STRUCTURAL SYSTEM",
            services: [
                "BID AND VALUE ENGINEERING",
                "LOAD CALCULATIONS",
                "PEMB MODELING AND CHECK",
                "STEEL STRUCTURAL MODELING/DRAWINGS",
                "CONCRETE DESIGN",
                "WOOD/WALL PANEL DESIGN",
                "INTERIOR/EXTERIOR FRAMING CHECK",
                "PROTOTYPE/FRANCHISE STRUCTURAL MODELING",
                "PERMIT PLANNING AND STAMPING FOR ALL US/CANADA REGIONS",
                "CONSTRUCTION SUPPORT",
                "SPECIALTY ENGINEERINGS",
            ],
        },
        {
            title: "MEP ENGINEERING/DRAWINGS",
            icon: "",
            caption:
                "MAKING ANY PROJECT SUCCESSFUL, PROPER MEP PLANNING NEED TO BE ESTABLISHED THROUGHT THE PROJECT DURATION AND AFTER CONSTRUCTION ALSO",
            services: [
                "COM CHECK",
                "MEP PLANS AND DRAWINGS",
                "RTU PLANS AND FRAMING CHECK",
                "ENERGY AUDIT",
                "EV AND SOLAR PLANNING AND DESIGN",
                "EXISTING AS-BUILT MEP REMODELI",
            ],
        },
        {
            title: "AV DESIGN AND ENGINEERING",
            icon: "",
            caption:
                "EVERY ENTERTAINMENT VENUE NEEDS TO BE WELL PLANNED AND ABLE TO DELIVER TOP QUALITY END PRODUCT FOR PEOPLE TO ENJOY",
            services: [
                "AV PLANNING",
                "SCHEDULING",
                "AV BIM MODELING",
                "INTEGRATION OF INDUSTRY TOOLS",
                "AVIXA AND CTS SPECIALTY",
                "TECHNOLOGY AND AV PLANS",
                "DRAWINGS",
                "INTERIOR FRAMING SUPPORT CHECK",
            ],
        },
        {
            title: "CONSTRUCTION DRAWING SET PER PERMIT REQUIREMENTS",
            icon: "",
            caption:
                "IT IS IMPORTANT TO GET YOUR CONSTRUCTION DRAWINGS AS PER COUNTY/CITY CHECKLIST",
            services: [
                "STAMPING OF ANY CD DRAWINGS",
                "PERMIT REQUIREMENTS CONSIDERATION",
                "APPLICATION CHECKLIST AND DOCUMENT PREPARATIONS",
                "SPECIFICATION AND PACAKGE PLANNING",
                "DEVELOPMENT AND CONSTRUCTION PERMIT COORDINATION",
                "CITY/COUNTY COMMENTS COORDINATION OR APPROVAL",
            ],
        },
        {
            title: "BIM MODELING AND SUPPORT CLOUD SERVICES",
            icon: "",
            caption:
                "GET THE PROJECT IN REAL TIME WITH MODER TECHNOLOGY BEFOR THE CONSTRUCTION",
            services: [
                "3D-4D MODELING",
                "SCHEDULING AND QUANTITY CHECK",
                "SCAN TO BIM",
                "POINT CLOUD CHECK",
                "EXISTING REAL TIME MODELING",
                "CLASH DETECTION",
                "LOD100-500 MODELING AND COORDINATION",
                "REAL-TIME SITE PLAN DRAWINGS",
                "CONSTRUCTION ",
                "CONSTRUCTION SAAS SOFTWARE COORDINATION",
                "4D SIMULATION",
            ],
        },
        {
            title: "CONSTRUCTION SUPPORT/AS-BUILT DRAWINGS",
            icon: "",
            caption:
                "WE ARE HERE TO SUPPORT WHEN YOUR PROJECT IS STUCK AND NEED AS-BUILT CONSTRUCTION SUPPORT",
            services: [
                "TRUSS PACAKGE REVIEW",
                "SHOP DRAWINGS REVIEW",
                "SPECIFICATIONS COORDINATION",
                "AS-BUILT MODELING AND CONSTRUCTION CHECK",
                "QUICK VALUE ENGINEERING AND MODELING",
                "CONTRACTOR SPECIFIC QUESTIONS",
            ],
        },
    ].map((it) => {
        return {
            ...it,
            isFlipped: ref(false),
        };
    })
);
</script>

<template>
    <div id="services" as="section" class="m-4 flex flex-col items-center justify-center">
        <div class="space-y-6 text-center mb-8">
            <h6 class="font-medium uppercase tracking-widest">Our Services</h6>
            <h1 class="h1">
                We are a
                <span class="h1 underlineTxt relative inline-block after:!bg-accent/50">Customer service</span>
                that provides
            </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <UCard v-for="(it, index) in services" :key="index" @mouseover="it.isFlipped = true"
                @mouseleave="it.isFlipped = false"
                class="flip-card group bg-zinc-100 rounded-none p-4 max-w-md hover:mb-4 hover:-mt-4 hover:ring-2 hover:ring-accent hover:z-20 basicanimation justify-items-center">
                <div class="flip-card-inner transition-all ease-in-out">
                    <font-awesome :icon="faScrewdriverWrench"
                        class="mb-4 group-hover:text-accent basicanimation text-5xl" />
                    <h4 class="h4 mb-2">
                        {{ it.isFlipped ? "Our Services" : it.title }}
                    </h4>
                    <ul v-if="it.isFlipped">
                        <li v-for="i in it.services" v-text="i" class="list-disc" />
                    </ul>
                    <p v-else class="text-gray-600" v-text="it.caption" />
                </div>
            </UCard>
        </div>
    </div>
</template>

<style scoped>
.flip-card {
    perspective: 1000px;
}

.flip-card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.75s;
    transform-style: preserve-3d;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    backface-visibility: hidden;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(360deg);
}
</style>
