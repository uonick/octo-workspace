<template>
  <div class="duration-1000 delay-300 opacity-1">
    <div class="space-y-7 max-w-3xl mx-auto text-center">
      <h1
        class="text-4xl bg-clip-text text-transparent font-extrabold mx-auto sm:text-6xl from-slate-100 to-slate-400 bg-gradient-to-br"
      >
        Бесплатное приложение для работы на фрилансе
      </h1>
      <p class="max-w-xl mx-auto text-neutral-300">
        Контролируйте ваше время и проекты, храните заметки, выставляйте счета и акты, следите за
        оплатой офлайн
      </p>
      <div class="flex justify-center font-medium text-white">
        <a
          class="py-4 px-10 text-center rounded-full items-center bg-purple-600 hover:bg-purple-500 active:bg-purple-700 flex justify-between space-x-3 text-lg"
          :href="downloadLinks.mac"
          ><div>Скачать {{ version }} для macOS</div>
          <ArrowDownCircleIcon class="h-7 w-7" />
        </a>
      </div>
      <div class="flex justify-center font-medium text-sm text-white">
        а так же для&nbsp;<a :href="downloadLinks.windows" class="underline">Windows</a
        >&nbsp;и&nbsp;<a :href="downloadLinks.linux" class="underline">Linux</a>
      </div>
    </div>
    <div class="relative mt-16 sm:mt-28 flex justify-center items-center">
      <div
        class="absolute mx-auto blur-[160px] max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 from-10% via-75%"
      ></div>
      <div class="relative mx-auto">
        <a href="/img/screenshot.webp" target="_blank">
          <img
            alt="Screenshot"
            loading="lazy"
            width="1200"
            height="691"
            class="rounded-2xl"
            src="@/assets/screenshot.webp"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { version } from '../../package.json'
import { ArrowDownCircleIcon } from '@heroicons/vue/20/solid'

const github = import.meta.env.VITE_GITHUB_DOWNLOAD_LINK
const downloadLinks = {
  mac: github.replaceAll('%version%', version).replace('%ext%', 'dmg'),
  linux: github.replaceAll('%version%', version).replace('%ext%', 'deb'),
  windows: github.replaceAll('%version%', version).replace('%ext%', 'exe')
}
</script>
