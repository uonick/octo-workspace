<template>
  <section id="faqs" class="py-16 lg:py-24 max-w-6xl mx-auto px-5 md:px-0">
    <div class="px-10 text-neutral-400 xl:px-0">
      <div class="max-w-xl text-center xl:mx-auto">
        <h2 class="text-neutral-50 text-3xl font-extrabold sm:text-4xl">Вопросы и ответы</h2>
        <p class="mt-3">
          Если не нашли подходящий ответ, всегда можно спросить на
          <a href="https://github.com/uonick/octo-workspace/issues" class="underdivne">GitHub</a>
        </p>
      </div>
      <div class="mt-12">
        <div
          class="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3 duration-1000 delay-300 opacity-1"
        >
          <div class="space-y-3">
            <div class="group">
              <div class="flex items-center justify-between font-semibold text-neutral-100">
                Где хранятся мои данные?
              </div>
              <p class="mt-3 text-neutral-400">
                Ваши данные строго конфиденциальны и хранятся исключительно на вашем устройстве.
                Никакая синхронизация с облаками или другими серверами не осуществляется. Безопасность
                ваших данных — наш приоритет
              </p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="group">
              <div class="flex items-center justify-between font-semibold text-neutral-100">
                Приложение собирает данные?
              </div>
              <p class="mt-3 text-neutral-400">
                Нет, приложение не собирает ваши данные. Подключение к интернету происходит при запросе
                обновлений раз в 30 минут и при старте приложения. Без интернета, проверку обновлений
                придется выполнять самостоятельно
              </p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="group">
              <div class="flex items-center justify-between font-semibold text-neutral-100">
                Почему приложение бесплатное?
              </div>
              <p class="mt-3 text-neutral-400">
                Проект начался как решение для одного пользователя, но затем мы решили делиться им
                бесплатно с широкой аудиторией. Наша цель — сделать его доступным для всех
              </p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="group">
              <div class="flex items-center justify-between font-semibold text-neutral-100">
                Приложению можно доверять?
              </div>
              <p class="mt-3 text-neutral-400">
                Да, каждая версия приложения проходит проверку от Apple (для компьютеров с macOS). Вы
                также можете самостоятельно
                <a href="https://www.virustotal.com/gui/home/upload" class="underdivne" target="_blank"
                  >загрузить ee</a
                >
                для дополнительной проверки. Наша цель - обеспечить вам безопасность и надежность
              </p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="group">
              <div class="flex items-center justify-between font-semibold text-neutral-100">
                Планируется-ли сделать его платным?
              </div>
              <p class="mt-3 text-neutral-400">
                Нет, такие планы отсутствуют. Приложение изначально создавалось с учетом бесплатного
                доступа для пользователей
              </p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="group">
              <div class="flex items-center justify-between font-semibold text-neutral-100">
                Для кого подойдет приложение?
              </div>
              <p class="mt-3 text-neutral-400">
                Для фрилансеров, которые хотят контролировать свое время и финансы. Приложение поможет
                отслеживать время работы, выставлять счета и акты, хранить заметки и следить за оплатой.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
