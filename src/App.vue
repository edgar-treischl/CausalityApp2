<script setup>
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
]

const selectedPerson = ref(people[0])
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <Listbox v-model="selectedPerson">
      <div class="relative w-72">
        <ListboxButton
          class="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          <span class="block truncate">{{ selectedPerson.name }}</span>
        </ListboxButton>

        <ListboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5"
        >
          <ListboxOption
            v-for="person in people"
            :key="person.id"
            :value="person"
            as="template"
            v-slot="{ active, selected }"
          >
            <li
              class="
                cursor-pointer select-none py-2 pl-3 pr-4
                data-[active]:bg-blue-600
                data-[active]:text-white
                data-[selected]:bg-blue-500
                data-[selected]:text-white
                data-[inactive]:text-gray-900
              "
              :data-active="active ? '' : null"
              :data-selected="selected ? '' : null"
              :data-inactive="!active ? '' : null"
            >
              {{ person.name }}
            </li>
          </ListboxOption>
        </ListboxOptions>
      </div>
    </Listbox>
  </div>
</template>
