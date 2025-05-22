<template>
  <section id="faqs" class="py-16 lg:py-24 max-w-6xl mx-auto px-5 md:px-0">
    <div class="px-10 text-neutral-300 xl:px-0">
      <div class="max-w-xl text-center xl:mx-auto">
        <h2 class="text-neutral-50 text-3xl font-extrabold sm:text-4xl">Вопросы и ответы</h2>
        <p class="mt-3">
          Если не нашли подходящий ответ, всегда можно спросить на
          <a href="https://github.com/uonick/octo-workspace/issues" class="underline">GitHub</a>
        </p>
      </div>
      <div class="mt-12">
        <ul
          class="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3 duration-1000 delay-300 opacity-1"
        >
          <li class="space-y-3">
            <summary class="flex items-center justify-between font-semibold text-neutral-100">
              Где хранятся мои данные?
            </summary>
            <p class="leading-relaxed">
              Ваши данные строго конфиденциальны и хранятся исключительно на вашем устройстве.
              Никакая синхронизация с облаками или другими серверами не осуществляется. Безопасность
              ваших данных — наш приоритет
            </p>
          </li>
          <li class="space-y-3">
            <summary class="flex items-center justify-between font-semibold text-neutral-100">
              Приложение собирает данные?
            </summary>
            <p class="leading-relaxed">
              Нет, приложение не собирает ваши данные. Подключение к интернет происходит при запросе
              обновлений раз в 30 минут и при старте приложения. Без интернета, проверку обновлений
              придется выполнять самостоятельно
            </p>
          </li>
          <li class="space-y-3">
            <summary class="flex items-center justify-between font-semibold text-neutral-100">
              Почему приложение бесплатное?
            </summary>
            <p class="leading-relaxed">
              Проект начался как решение для одного пользователя, но затем мы решили делиться им
              бесплатно с широкой аудиторией. Наша цель — сделать его доступным для всех
            </p>
          </li>
          <li class="space-y-3">
            <summary class="flex items-center justify-between font-semibold text-neutral-100">
              Приложению можно доверять?
            </summary>
            <p class="leading-relaxed">
              Да, каждая версия приложения проходит проверку от Apple (для компьютеров с macOS). Вы
              также можете самостоятельно
              <a href="https://www.virustotal.com/gui/home/upload" class="underline" target="_blank"
                >загрузить ee</a
              >
              для дополнительной проверки. Наша цель - обеспечить вам безопасность и надежность
            </p>
          </li>
          <li class="space-y-3">
            <summary class="flex items-center justify-between font-semibold text-neutral-100">
              Планируется-ли сделать его платным?
            </summary>
            <p class="leading-relaxed">
              Нет, такие планы отсутствуют. Приложение изначально создавалось с учетом бесплатного
              доступа для пользователей
            </p>
          </li>
          <li class="space-y-3">
            <summary class="flex items-center justify-between font-semibold text-neutral-100">
              Для кого подойдет приложение?
            </summary>
            <p class="leading-relaxed">
              Приложение идеально подходит для тех, кто работает по часовой ставке, таких как
              программисты, дизайнеры, верстальщики, юристы, копирайтеры или фрилансеры в сфере
              маркетинга
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
