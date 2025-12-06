<template>
  <nav class="sticky top-0 z-50 bg-gray-900 shadow-md">
    <div class="flex justify-between items-center px-6 py-4">
      
      <!-- Logo on the left -->
      <h1 class="text-white font-bold text-xl">MyApp</h1>

      <!-- Links on the right -->
      <ul class="flex gap-10">
        <li v-for="item in navItems" :key="item.to">
          <router-link
            :to="item.to"
            class="flex items-center gap-2 text-gray-300 transition-all duration-200 relative hover:text-white"
            :class="isActive(item.to) ? 'text-white font-semibold' : ''"
          >
            <component :is="item.icon" class="w-5 h-5" />

            <span
              class="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                     after:bg-white hover:after:w-full after:transition-all after:duration-300"
              :class="isActive(item.to) ? 'after:w-full' : ''"
            >
              {{ item.label }}
            </span>
          </router-link>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";

// icons
import { HomeIcon, InformationCircleIcon, WrenchScrewdriverIcon, EnvelopeIcon } 
from "@heroicons/vue/24/outline";

const route = useRoute();

const navItems = [
  { label: "Home", to: "/", icon: HomeIcon },
  { label: "About", to: "/about", icon: InformationCircleIcon },
  { label: "Services", to: "/services", icon: WrenchScrewdriverIcon },
  { label: "Contact", to: "/contact",      icon: EnvelopeIcon }
];

const isActive = (path) => route.path === path;
</script>
