<script setup lang="ts">
const router = useRouter()

const { t } = useI18n()
</script>

<template>
  <div>
    <Title :text="t('site.title')" type="h6" class="text-3xl text-redish" />
    <Link :text="t('site.title')" type="a" class="text-3xl text-grayish" url="https://google.com" />
    <Link :text="t('site.title')" type="button" class="text-base bg-cyan hover:bg-redishHover text-textDark font-bold" url="/casino" />
    <div>
      <button
        btn m-3 text-sm
        @click="router.push(`/casino`)"
      >
        Apex
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
