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
  class: {
    type: String,
    default: '',
  },

})
</script>

<template>
  <component :is="$props.type" class="title-component" :class="$props.class">
    {{ $props.text }}
  </component>
</template>

<style scoped>

</style>
