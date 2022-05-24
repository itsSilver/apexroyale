<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'a',
  },
  class: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
})
const router = useRouter()
const openUrl = (url: any) => {
  if (url) {
    router.push(url)
    console.log(url)
  }
}
</script>

<template>
  <component :is="$props.type" v-if="$props.type === 'a'" class="link-component" :class="$props.class" :href="$props.url">
    {{ $props.text }}
  </component>
  <component :is="$props.type" v-if="$props.type === 'button'" class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm " :class="$props.class" :href="$props.url" @click="openUrl($props.url)">
    {{ $props.text }}
  </component>
</template>

<style scoped>

</style>
