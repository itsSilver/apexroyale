<script setup lang="ts">
import { isDark, preferredDark } from '~/composables'
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
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
