<template>
  <nav class="sticky top-0 z-50 bg-white shadow-md backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      
      <!-- Logo (Only the icon, no text) -->
      <router-link to="/" class="flex items-center gap-2 cursor-pointer">
        <img :src="Icon" alt="App Icon" class="w-10 h-10 transition-transform duration-300 hover:scale-110" />
      </router-link>

      <!-- Desktop Links -->
      <ul class="hidden md:flex gap-8 items-center">
        <li v-for="item in navItems" :key="item.to">
          <router-link
            :to="item.to"
            class="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            :class="isActive(item.to) ? 'text-gray-900 font-semibold' : ''"
          >
            <span
              class="after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-900 hover:after:w-full after:transition-all after:duration-300"
              :class="isActive(item.to) ? 'after:w-full' : ''"
            >
              {{ item.label }}
            </span>
          </router-link>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-600 hover:text-gray-900 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white backdrop-blur-md border-t border-gray-100">
      <ul class="flex flex-col px-6 py-4 gap-4">
        <li v-for="item in navItems" :key="item.to">
          <router-link
            :to="item.to"
            class="block text-gray-600 hover:text-gray-900 font-medium"
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
import Icon from '@/assets/images/icon.png';  // Import the icon image

// Mobile menu state
const mobileMenuOpen = ref(false);

// Current route
const route = useRoute();

// Navigation links
const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

// Active link function
const isActive = (path) => route.path === path;
</script>

<style scoped>
/* Logo hover animation */
nav img {
  transition: transform 0.3s ease-in-out;
}
nav img:hover {
  transform: scale(1.1);
}

/* Add underline animation for active link */
nav a span {
  position: relative;
}
nav a span::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0%;
  background-color: #1F2937; /* Dark Gray */
  transition: width 0.3s ease-in-out;
}
nav a:hover span::after, nav a.active span::after {
  width: 100%;
}
</style>
