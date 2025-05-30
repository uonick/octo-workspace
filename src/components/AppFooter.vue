<template>
  <footer class="mt-20 w-full flex justify-center items-center">
    <div class="w-full max-w-7xl flex justify-end">
      <div class="border-neutral-800 flex">
        <div class="text-neutral-500 text-center text-xs py-3 inline-flex px-5 lg:px-0">
          2022-{{ currentYear }} ©<a href="https://uonick.com">uonick</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>
