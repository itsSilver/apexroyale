<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import type { GlobalTheme, NDateLocale, NLocale } from 'naive-ui'

const theme = ref<GlobalTheme | null>(darkTheme)

const locale = ref<NLocale | null>(null)
const dateLocale = ref<NDateLocale | null>(null)
</script>

<template>
  <n-config-provider :theme="theme" :locale="locale" :date-locale="dateLocale">
    <main class="text-gray-700 dark:text-gray-200 ">
      <Header />
      <section class="bg-purpleDark m-4 px-4 rounded-md py-12">
        <RouterView />
        <Footer />
      </section>
    </main>
  </n-config-provider>
</template>
