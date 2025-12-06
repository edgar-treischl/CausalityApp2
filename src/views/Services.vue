<template>
  <section class="services-content p-8">
    <h2 class="text-3xl font-bold mb-6 text-center">Our Services</h2>
    <!-- Main content with two cards: Left for text and Right for Pie Chart -->
    <div class="flex flex-wrap gap-8 justify-center">
      <!-- Left Column: Titanic Explanation (Card 1) -->
      <div class="w-full md:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-xl">
        <h3 class="text-2xl font-semibold mb-4">Understanding Titanic Data</h3>
        <p class="text-gray-700 mb-4">
          The Titanic dataset provides data on passengers aboard the Titanic, including their class, survival status, and the number of people in each category.
          <br />
          The pie chart visualizations will help you understand the distribution of passengers by their class and survival status.
        </p>
        <p class="text-gray-700 mb-4">
          The chart is divided into two views: "Survival" and "Class." In the "Survival" view, you can see how many passengers survived versus those who did not. In the "Class" view, you can compare the number of passengers across different classes (1st, 2nd, 3rd, and Crew).
        </p>
        <p class="text-gray-700">
          By visualizing this data, we can learn more about the Titanic's passengers and their fate during the disaster.
        </p>
      </div>

      <!-- Right Column: Titanic Pie Chart (Card 2) -->
      <div class="w-full md:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-xl">
        <!--  <h3 class="text-2xl font-semibold mb-4">Titanic Pie Chart</h3> -->
        <!-- Titanic Pie Chart Component (Directly inside the card) -->
        <TitanicPieChart />
      </div>
    </div>
  </section>
</template>

<script setup>
import TitanicPieChart from '@/components/TitanicPieChart.vue';
</script>

<style scoped>
.services-content {
  background-color: #f9fafb;
}
</style>
