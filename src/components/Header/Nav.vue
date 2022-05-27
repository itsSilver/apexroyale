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
const handleSelect = (key: string | number) => {
  // message.info(String(key))
  console.log('sosa clicked')
}
</script>

<template>
  <Popover class="relative bg-transparent">
    <div class=" px-4 sm:px-4">
      <div class="flex justify-between items-center border-b-2 border-gray-700 py-4 md:justify-start md:space-x-10">
        <div class="flex justify-start items-center lg:w-0 lg:flex-1">
          <Logo />
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
          <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
          <n-dropdown trigger="hover" :options="options" @select="handleSelect">
            <n-button class="px-4 text-xl py-4 h-10 bg-cyan border-0 border-transparent">
              Go For a Trip
            </n-button>
          </n-dropdown>
        </div>
      </div>
    </div>
  </Popover>
</template>
