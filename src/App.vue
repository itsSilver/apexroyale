<script setup lang="ts">
import { isDark } from '~/composables'
const { t } = useI18n()

useHead({
  title: t('site.title'),
  meta: [
    { name: 'description', content: t('site.desc') },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico',
      sizes: 'any',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
