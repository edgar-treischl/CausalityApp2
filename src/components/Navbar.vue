<template>
  <nav class="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-md shadow-md">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 cursor-pointer">
        <img :src="Logo" alt="MyApp Logo" class="w-10 h-10" />
        <span class="text-white font-bold text-xl">MyApp</span>
      </router-link>

      <!-- Desktop Links -->
      <ul class="hidden md:flex gap-8 items-center">
        <li v-for="item in navItems" :key="item.to">
          <router-link
            :to="item.to"
            class="relative text-gray-200 hover:text-white transition-colors duration-200 font-medium"
            :class="isActive(item.to) ? 'text-white font-semibold' : ''"
          >
            <span
              class="after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                     after:bg-white hover:after:w-full after:transition-all after:duration-300"
              :class="isActive(item.to) ? 'after:w-full' : ''"
            >
              {{ item.label }}
            </span>
          </router-link>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-200 hover:text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-gray-900/90 backdrop-blur-md">
      <ul class="flex flex-col px-6 py-4 gap-4">
        <li v-for="item in navItems" :key="item.to">
          <router-link
            :to="item.to"
            class="block text-gray-200 hover:text-white font-medium"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Logo from '@/assets/vue.svg';

// Mobile menu state
const mobileMenuOpen = ref(false);

// Current route
const route = useRoute();

// Navigation links
const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

// Active link function
const isActive = (path) => route.path === path;
</script>

<style scoped>
/* Optional: subtle hover scale on logo */
nav img {
  transition: transform 0.3s;
}
nav img:hover {
  transform: scale(1.1);
}
</style>
