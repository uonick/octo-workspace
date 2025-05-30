<template>
  <section>
    <div wrapperclassname="max-w-xs h-[13rem] top-12 inset-0" class="relative">
      <div
        class="absolute m-auto blur-[160px] max-w-xs h-[13rem] top-12 inset-0"
        style="
          background: linear-gradient(
            180deg,
            #7c3aed 0%,
            rgba(152, 103, 240, 0.984375) 0.01%,
            rgba(237, 78, 80, 0.2) 100%
          );
        "
      ></div>
      <div class="relative">
        <div class="custom-screen py-28 relative">
          <div class="relative z-10 duration-1000 delay-300 opacity-1">
            <div class="max-w-xl mx-auto text-center">
              <h2
                class="text-neutral-50 text-3xl font-semibold  from-sky-200 to-violet-500 bg-gradient-to-br text-transparent bg-clip-text"
              >
                Следи за финансами и временем в одном приложении
              </h2>
              <p class="mt-5 text-neutral-300 px-5 lg:px-0">
                Простой интерфейс, никаких оплат или сторонних сервисов – приложение создано для
                удобства без лишних заморочек
              </p>
            </div>
            <div class="flex justify-center font-medium text-white py-5">
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
          <img
            alt="Background pattern"
            loading="lazy"
            width="2880"
            height="1358"
            decoding="async"
            class="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
            src="/img/bg.webp"
          />
        </div>
      </div>
    </div>
  </section>
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
