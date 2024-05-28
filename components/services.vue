<script setup>
const isFlipped = ref(false);
const services = ref(
  [
    {
      title: "Permit Planning",
      icon: "",
      caption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore.",
      services:
        "1 Sommmeee additional info.... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore",
    },
    {
      title: "ARCHITECTURAL RENDERING",
      icon: "",
      caption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore.",
      services:
        "2 Sommmeee additional info.... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore",
    },
    {
      title: "STRUCTURAL ENGINEERING/DRAWINGS",
      icon: "",
      caption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore.",
      services:
        "3 Sommmeee additional info.... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore",
    },
    {
      title: "MEP ENGINEERING/DRAWINGS",
      icon: "",
      caption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore.",
      services:
        "4 Sommmeee additional info.... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore",
    },
    {
      title: "AV DESIGN AND ENGINEERING",
      icon: "",
      caption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore.",
      services:
        "Sommmeee additional info.... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore",
    },
    {
      title: "CONSTRUCTION DRAWING SET PER PERMIT REQUIREMENTS",
      icon: "",
      caption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore.",
      services:
        "Sommmeee additional info.... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore",
    },
    {
      title: "BIM MODELING AND SUPPORT CLOUD SERVICES",
      icon: "",
      caption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore.",
      services:
        "Sommmeee additional info.... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore",
    },
    {
      title: "CONSTRUCTION SUPPORT/AS-BUILT DRAWINGS",
      icon: "",
      caption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore.",
      services:
        "Sommmeee additional info.... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum distinctio voluptatem ex debitis recusandae exercitationem rerum doloremque maiores molestias voluptas, placeat veniam autem aperiam fugit enim beatae impedit inventore",
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
  <UContainer id="services" as="section">
    <div class="mb-12">
      <h5 class="h5">Our Services</h5>
      <h2 class="h1 mt-6">
        We are a
        <span class="h1 underlineTxt relative inline-block after:!bg-accent/50">
          Customer Service</span
        >
        Organisation
      </h2>
      <h3 class="h3 mt-2">that provides ...</h3>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
    >
      <UCard
        v-for="(it, index) in services"
        :key="index"
        @mouseover="it.isFlipped = true"
        @mouseleave="it.isFlipped = false"
        class="flip-card group bg-zinc-100 rounded-none p-4 max-w-md hover:mb-4 hover:-mt-4 hover:ring-2 hover:ring-accent hover:z-20 basicanimation justify-items-center"
      >
        <div class="flip-card-inner transition-all ease-in-out">
          <Icon
            name="heroicons:clipboard-document-check-solid"
            size="3.5rem"
            class="mb-4 group-hover:text-accent basicanimation"
          />
          <h4 class="h4 mb-2">
            {{ it.isFlipped ? "Our Services" : it.title }}
          </h4>
          <p class="text-gray-600">
            {{ it.isFlipped ? it.services : it.caption }}
          </p>
        </div>
      </UCard>
    </div>
  </UContainer>
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
