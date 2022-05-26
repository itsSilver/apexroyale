<script setup lang="ts">
import { onMounted } from 'vue'
import { MainScene } from '../../VirtualEngine/MainScene'

const user = ''

onMounted(() => {
  const canvas = document.querySelector('canvas')
  console.log('🚀 ~ onMounted ~ canvas', canvas)
  if (canvas)
    // eslint-disable-next-line no-new
    new MainScene(canvas, user)
})
</script>

<template>
  <canvas class="h-screen w-full" />
</template>
