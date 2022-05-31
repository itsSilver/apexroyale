<script setup lang="ts">
import { NButton, NDropdown, NModal } from 'naive-ui'

const options = [
  {
    label: 'Marina Bay Sands',
    key: 'marina bay sands',
    disabled: true,
  },
  {
    label: 'Brown\'s Hotel, London',
    key: 'brown\'s hotel, london',
  },
  {
    label: 'Atlantis Bahamas, Nassau',
    key: 'atlantis nahamas, nassau',
  },
  {
    label: 'The Beverly Hills Hotel, Los Angeles',
    key: 'the beverly hills hotel, los angeles',
  },

]
// const message = useMessage()

const showModal = ref(false)
// const cancelCallback = () => {
//   message.info(
//     'I don\'t know why nobody told you how to unfold your love',
//     {
//       closable: true,
//       duration: 5000,
//     },
//   )
// }
// const submitCallback = () => {
//   message.success('Submit')
// }

const handleSelect = (key: string | number) => {
  // message.info(String(key))
  showModal.value = true
}
</script>

<template>
  <div class="flex justify-around items-center">
    <Branding />
    <n-dropdown trigger="hover" :options="options" @select="handleSelect">
      <n-button class="px-4 text-xl py-4 h-10 bg-cyan border-0 border-transparent">
        Go For a Trip
      </n-button>
    </n-dropdown>
  </div>
  <n-button @click="showModal = true">
    Start Me up
  </n-button>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    title="Dialog"
    content="Are you sure?"
    positive-text="Submit"
    negative-text="Cancel"
  />
</template>
