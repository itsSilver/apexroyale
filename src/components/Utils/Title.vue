<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'h4',
  },
})
</script>

<template>
  <component :is="type" class="text-gray-700 dark:text-gray-200">
    {{ text }}
  </component>
</template>
