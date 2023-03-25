<template>
  <main>
    <Countries />
  </main>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
await useAsyncData(() => useLoadCountries());
useHead({ title: "Select Countries" });

onMounted(async () => {
  const countrySet = localStorage.getItem("countrySet");
  if (countrySet) {
    await navigateTo("/topics");
  }
  gsap.from(".item", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
  });
});
</script>
