<script setup lang="ts">
import { NButton, NDropdown } from 'naive-ui'

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

const showModal = ref(true)
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
const showM = () => {
  showModal.value = true
}
const closeModal = () => {
  console.log('modal close')
  showModal.value = false
  console.log('showModal.value', showModal.value)
}
const handleSelect = (key: string | number) => {
  // message.info(String(key))
  showModal.value = true
}
</script>

<template>
  <div class="flex justify-around items-center">
    <Branding />
    <n-dropdown trigger="hover" :options="options" @select="handleSelect">
      <n-button>
        Go For a Trip
      </n-button>
    </n-dropdown>
    <n-button type="success" @click="showM">
      Start Me up
    </n-button>
  </div>

  <Modal :show-modal="showModal" title="sho modal" @close-modal="closeModal" />
</template>
