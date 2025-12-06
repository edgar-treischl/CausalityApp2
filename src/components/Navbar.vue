<template>
  <nav class="bg-gray-800 px-6 py-4 shadow-md">
    <ul class="flex gap-6">
      <li v-for="item in navItems" :key="item.to">
        <router-link
          :to="item.to"
          class="text-gray-300 hover:text-white transition-colors duration-200"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" }
];
</script>
