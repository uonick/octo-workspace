<template>
  <div class="container mx-auto max-w-6xl">
    <header class="mx-5 xl:mx-0">
      <nav class="pb-5 md:text-sm md:static md:block hidden">
        <div class="custom-screen items-center md:flex h-10">
          <div class="flex items-center justify-between py-5 md:block h-10"></div>
          <div
            class="flex-1 items-center mt-10 text-neutral-300 md:font-medium md:mt-0 md:flex hidden h-10"
          >
            <ul
              class="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0"
            >
              <li class="hover:text-neutral-50">
                <a class="block" href="/#features">Возможности</a>
              </li>
              <li class="hover:text-neutral-50">
                <a class="block" href="/#faqs">Вопросы и ответы</a>
              </li>
              <li class="hover:text-neutral-50">
                <a class="block" href="https://github.com/uonick/octo-workspace/releases">Релизы</a>
              </li>
            </ul>
            <div
              class="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0"
            >
              <a class="block hover:text-neutral-50" href="https://github.com/uonick/octo-workspace"
                >GitHub</a
              >
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts"></script>
