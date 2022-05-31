<script setup lang="ts">
import { NButton, NDropdown } from 'naive-ui'
import { api } from '~/composables'
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
const handleSelect = (key: string | number) => {
  // message.info(String(key))
  console.log('sosa clicked', api)
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
</template>
