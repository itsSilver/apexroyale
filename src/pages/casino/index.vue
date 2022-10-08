<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('site.title'),
  meta: [
    { name: 'description', content: t('site.desc') },

  ],
})
</script>

<template>
  <!-- <v-wrapper /> -->
  <div>
    sosa
  </div>
</template>

<route lang="yaml">
meta:
  layout: casino
</route>
