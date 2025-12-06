<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">About Our App</h1>
      <p class="text-gray-600 text-lg sm:text-xl">
        Built with <span class="font-semibold text-blue-600">Vue.js</span> and <span class="font-semibold text-green-500">Tailwind CSS</span> for modern web experiences.
      </p>
    </div>

    <!-- Two-column layout -->
    <div class="flex flex-col lg:flex-row gap-12 items-center">
      <!-- Text Column -->
      <div class="lg:w-1/2 space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">Why Choose Our App?</h2>
        <p class="text-gray-700">
          Our application leverages Vue.js reactive components and Tailwind CSS utility-first styling to deliver a fast, responsive, and modern user interface.
        </p>
        <p class="text-gray-700">
          With reusable components and simple customization, building features has never been easier.
        </p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
          Learn More
        </button>
      </div>

      <!-- Illustration Column -->
      <div class="lg:w-1/2 flex justify-center">
        <img src="@/assets/vue.svg" alt="Vue Illustration" class="w-64 h-64 object-contain rounded-lg shadow-lg"/>
      </div>
    </div>

    <!-- Features Section -->
    <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
        <h3 class="text-xl font-bold mb-2">Reactive Components</h3>
        <p class="text-gray-600">All components react to state changes automatically, making your UI dynamic and seamless.</p>
      </div>
      <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
        <h3 class="text-xl font-bold mb-2">Utility-first Styling</h3>
        <p class="text-gray-600">Tailwind CSS allows fast styling with small, composable classes without writing custom CSS.</p>
      </div>
      <div class="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
        <h3 class="text-xl font-bold mb-2">Responsive Design</h3>
        <p class="text-gray-600">Layouts automatically adjust to any screen size using Tailwind’s responsive utilities.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed yet; reactive props or API calls could go here in future
</script>

<style scoped>
/* Optional: subtle hover animation for the illustration */
img {
  transition: transform 0.3s;
}
img:hover {
  transform: scale(1.05);
}
</style>
