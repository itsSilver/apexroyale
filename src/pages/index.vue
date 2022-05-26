<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <Title text="Casino" />
    <button
      btn m-3 text-sm
      @click="router.push(`/casino`)"
    >
      Apex
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
