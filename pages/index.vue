<template>
  <main class="pb-10">
    <!-- Main navigation header -->
    <Nav />
    <section class="mx-auto mt-10 max-w-desktop px-5">
      <h2 class="item text-xl font-medium">Articles</h2>

      <ul class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <li :key="n.id" v-for="n in entities">
          <NuxtLink :to="`/entity/${n.id}`">
            <div
              :style="`background-image: url('${n.media[0].secure_url}')`"
              class="item relative h-[340px] w-full overflow-hidden rounded-xl bg-cover bg-center"
            >
              <div
                class="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 px-3 pb-5"
              >
                <div>
                  <h3 class="text-xl font-semibold text-white">
                    {{ n.title }}
                  </h3>
                  <p class="mt-1 text-sm text-white/60">
                    {{ n.price ? useCurrency(n.price) : n.location }}
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Entity } from "@prisma/client";
import { gsap } from "gsap";
// Set page title for SEO
useHead({ title: "Home" });
const { data: entities, error } = await useAsyncData<Entity[]>(
  "allEntities",

  () => $fetch(`/api/entities`),
  {
    default: () => [],
  }
);
// load topics and countries from api
const { data: countries } = await useAsyncData(() => useLoadCountries());
const { data: topics } = await useAsyncData(() => useLoadTopics());

onMounted(async () => {
  // Check if the user selected countries
  const countrySet = localStorage.getItem("countrySet");
  if (!countrySet) {
    return await navigateTo("/countries");
  }
  // Check if the user selected topics
  const topicsSet = localStorage.getItem("topicsSet");
  if (!topicsSet) {
    return await navigateTo("/topics");
  }
  // simple animations
  gsap.from(".item", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".item",
    },
  });
});
</script>

<style scoped></style>
