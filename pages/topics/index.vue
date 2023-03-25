<template>
  <main>
    <Topics />
  </main>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

await useAsyncData(() => useLoadTopics());

useHead({ title: "Countries" });

onMounted(async () => {
  const topicsSet = localStorage.getItem("topicsSet");
  if (topicsSet) {
    await navigateTo("/");
  }
  gsap.from(".item", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
  });
});
</script>
