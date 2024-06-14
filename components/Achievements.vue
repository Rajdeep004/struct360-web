<template>
  <div class="py-16" id="achievements">
    <div class="xl:container m-auto px-6 md:px-12">
      <div class="space-y-6 text-center">
        <h6 class="font-medium uppercase tracking-widest">Achievements</h6>
        <h1 class="h1">
          Delivering
          <span class="h1 underlineTxt relative after:!bg-accent/50">Excellence</span>
          with Our Expertise
        </h1>
      </div>
      <div
        class="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
        <div
          class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div class="relative space-y-8 py-12 p-8">
            <div aria-hidden="true"
              class="flex h-24 w-24 items-center justify-center rounded-full bg-pink-50 dark:bg-gray-700">
              <span class="text-3xl font-bold text-pink-600 dark:text-pink-300">500+</span>
            </div>

            <div class="space-y-2">
              <h5 class="h5 transition group-hover:text-accent">
                Projects
              </h5>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                We have Completed with 100% accuracy
              </p>
            </div>
            <!-- <a href="#" class="flex items-center justify-between group-hover:text-accent">
            <span class="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </a> -->
          </div>
        </div>
        <div
          class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div class="relative space-y-8 py-12 p-8">
            <div aria-hidden="true"
              class="flex h-24 w-24 items-center justify-center rounded-full bg-amber-50 dark:bg-gray-700">
              <span class="text-4xl font-bold text-amber-600 dark:text-pink-300">15+</span>
            </div>

            <div class="space-y-2">
              <h5 class="h5 transition group-hover:text-accent">
                US & Canada States/Provinces
              </h5>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                We are licensed for listed area
              </p>
            </div>
            <!-- <a href="#" class="flex items-center justify-between group-hover:text-accent">
            <span class="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </a> -->
          </div>
        </div>
        <div
          class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div class="relative space-y-8 py-12 p-8">
            <div aria-hidden="true"
              class="flex h-24 w-24 items-center justify-center rounded-full bg-green-50 dark:bg-gray-700">
              <span class="text-4xl font-bold text-green-600 dark:text-green-300">10+</span>
            </div>

            <div class="space-y-2">
              <h5 class="h5 transition group-hover:text-accent">
                Markets Served
              </h5>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                We are pioneered for more than listed markets for USA/CANADA
              </p>
            </div>
            <!-- <a href="#" class="flex items-center justify-between group-hover:text-accent">
            <span class="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading {
  text-decoration: none;
  display: inline-block;
  @apply p-0 md:p-4;
  /* padding: 15px; */
  position: relative;
}

.heading:hover::after {
  width: 100%;
  left: 0;
}

.heading::after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 4px;
  left: 0;
  position: absolute;
  @apply bg-fuchsia-400/75;
  transition: width 0.5s ease 0s, right 0.5s ease 0s;
  width: 0;
}
</style>