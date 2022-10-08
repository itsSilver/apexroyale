<script setup lang="ts">
import { NCard, NModal } from 'naive-ui'
const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['closeModal'])
const handleClose = () => {
  emit('closeModal')
}
</script>

<template>
  <n-modal
    v-model:show="props.showModal"
    :mask-closable="false"
  >
    <n-card :title="title" closable class="bg-primary" @close="handleClose">
      Card Content
      <template #footer>
        #footer
      </template>
      <template #action>
        #action
      </template>
    </n-card>
  </n-modal>
</template>
