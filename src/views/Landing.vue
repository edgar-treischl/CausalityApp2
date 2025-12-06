<template>
  <section class="bg-gray-50 min-h-screen flex flex-col justify-center items-center text-center px-6">
    <!-- Hero -->
    <div class="max-w-3xl">
      <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        Welcome to CausalityApp2
      </h1>
      <p class="text-gray-700 text-lg md:text-xl mb-8">
        Analyze, visualize, and understand causal relationships effortlessly.
      </p>
      <router-link
        to="/about"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
      >
        Learn More
      </router-link>
    </div>

    <!-- Optional Illustration -->
     <div class="mt-16">
      <img :src="VueLogo" alt="Illustration" class="mx-auto rounded-lg shadow-lg" />
    </div>
  </section>

  <!-- Features Section -->
<!-- Features Section -->
<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-6 text-center">
    <h2 class="text-3xl font-bold text-gray-900 mb-12">Features</h2>

    <div class="grid md:grid-cols-3 gap-10">
      
      <!-- About Card -->
      <router-link
        to="/about"
        class="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
      >
        <svg class="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M12 12v.01M4 6h16M4 18h16"/>
        </svg>
        <h3 class="text-xl font-semibold mb-2">About Us</h3>
        <p class="text-gray-600">Learn more about our mission, values, and how we help you analyze causal relationships.</p>
      </router-link>

      <!-- Services Card -->
      <router-link
        to="/services"
        class="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
      >
        <svg class="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 13l4 4L19 7"/>
        </svg>
        <h3 class="text-xl font-semibold mb-2">Services</h3>
        <p class="text-gray-600">Discover the tools and services we provide to help you visualize and interpret your data.</p>
      </router-link>

      <!-- Contact Card -->
      <router-link
        to="/contact"
        class="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
      >
        <svg class="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8v4l3 3"/>
        </svg>
        <h3 class="text-xl font-semibold mb-2">Contact</h3>
        <p class="text-gray-600">Get in touch with us for support, questions, or to get started with our services.</p>
      </router-link>

    </div>
  </div>
</section>
</template>

<script setup>
import VueLogo from '../assets/vue.svg';
</script>
