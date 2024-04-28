<script setup>
const services = [
    {
        title: "Permit Planning Drawings",
        icon : "",
        caption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore."
    },
    {
        title: "ARCHITECTURAL RENDERING/DRAWINGS",
        icon : "",
        caption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore."
    },
    {
        title: "STRUCTURAL ENGINEERING/DRAWINGS",
        icon : "",
        caption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore."
    },
    {
        title: "MEP ENGINEERING/DRAWINGS",
        icon : "",
        caption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore."
    },
    {
        title: "AV DESIGN AND ENGINEERING",
        icon : "",
        caption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore."
    },
    {
        title: "CONSTRUCTION DRAWING SET PER PERMIT REQUIREMENTS",
        icon : "",
        caption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore."
    },
    {
        title: "BIM MODELING AND SUPPORT CLOUD SERVICES",
        icon : "",
        caption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore."
    },
    {
        title: "CONSTRUCTION SUPPORT/AS-BUILT DRAWINGS",
        icon : "",
        caption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore."
    },
]
</script>

<template >
    <UContainer id="services" as="section" >
        <div class="mb-12">
            <h5 class="h5">Our Services</h5>
            <h2 class="h2 mt-6 uppercase">We are a <span class="h2 underline underline-offset-auto decoration-8 decoration-accent/50"> Customer Service</span> Organisation</h2>
            <h3 class="h3 mt-2">that provides ...</h3>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <UCard 
                class="group bg-zinc-100 rounded-none p-4 max-w-md hover:mb-4 hover:-mt-4 hover:ring-2 hover:ring-accent hover:z-20 basicanimation justify-items-center"
                v-for="it,index in services"
                :key="index"
            >
                <Icon 
                    name="heroicons:clipboard-document-check-solid"
                    size="3.5rem"
                    class="mb-4 group-hover:text-accent  basicanimation"
                />
                <h4 class="h4 mb-2">{{ it.title }}</h4>
                <p class="text-gray-600">{{ it.caption }}</p>
            </UCard>
        </div>
    </UContainer>
</template>
