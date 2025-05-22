<template>
  <section class="space-y-24">
    <AppHeader />
    <AppHero />
    <AppFeatures />

    <AppFAQ />
    <AppCTA />
    <AppFooter />
  </section>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import AppFeatures from './components/AppFeatures.vue'
import AppCTA from './components/AppCTA.vue'
import AppFAQ from './components/AppFAQ.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .scrollbar::-webkit-scrollbar {
    @apply h-5 w-2;
  }

  .scrollbar::-webkit-scrollbar-track {
    @apply bg-neutral-50 dark:bg-neutral-800;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    @apply rounded-full bg-neutral-200 dark:bg-neutral-700;
  }
}
</style>
