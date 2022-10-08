<script setup lang="ts">
import { NConfigProvider, darkTheme, useOsTheme } from 'naive-ui'
import type { NDateLocale, NLocale } from 'naive-ui'

const osThemeRef = useOsTheme()

const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))

// const themeOverrides: GlobalThemeOverrides = {

// }

// const theme = ref<GlobalTheme | null>(darkTheme)

const locale = ref<NLocale | null>(null)
const dateLocale = ref<NDateLocale | null>(null)
</script>

<template>
  <n-config-provider :theme="theme" :locale="locale" :date-locale="dateLocale">
    <main>
      <Header />
      <section class="bg-purpleDark m-4 px-4 rounded-md py-12">
        <RouterView />
        <Footer />
      </section>
    </main>
  </n-config-provider>
</template>
