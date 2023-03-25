<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
useHead({
  bodyAttrs: {
    class: "bg-white dark:bg-dark text-gray-800 dark:text-gray-100",
  },
});
const { toggleDark, isDark } = useTheme();
</script>
