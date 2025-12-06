<template>
  <div class="container p-8">
    <!-- Title for Titanic Survival Stats -->
    <div class="flex justify-center mb-4">
      <h2 class="text-3xl font-bold text-gray-800">Titanic Survival Stats</h2>
    </div>

    <!-- Toggle buttons to switch between survival and class -->
    <div class="flex justify-center mb-4 space-x-4">
      <button
        class="px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition duration-300"
        :class="{ 'bg-blue-700': view === 'survival' }"
        @click="view = 'survival'"
      >
        Survival
      </button>
      <button
        class="px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition duration-300"
        :class="{ 'bg-blue-700': view === 'class' }"
        @click="view = 'class'"
      >
        Class
      </button>
    </div>

    <!-- Pie chart display based on the selected view -->
    <div class="flex justify-center">
      <Pie :data="chartData" :options="chartOptions" class="w-full h-72 md:h-96" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

// Example Titanic data
const titanicData = [
  { Class: '1st', Survived: 'No', Count: 123 },
  { Class: '1st', Survived: 'Yes', Count: 202 },
  { Class: '2nd', Survived: 'No', Count: 167 },
  { Class: '2nd', Survived: 'Yes', Count: 118 },
  { Class: '3rd', Survived: 'No', Count: 528 },
  { Class: '3rd', Survived: 'Yes', Count: 178 },
  { Class: 'Crew', Survived: 'No', Count: 696 },
  { Class: 'Crew', Survived: 'Yes', Count: 212 },
];

const classes = ['1st', '2nd', '3rd', 'Crew'];

const totalCount = titanicData.reduce((acc, item) => acc + item.Count, 0);

// Colors for each class
const classColors = {
  '1st': '#fa938e',
  '2nd': '#98bf45',
  '3rd': '#51cbcf',
  Crew: '#d397ff',
};

// Different opacity based on class
const opacityMap = {
  '1st': 0.9,
  '2nd': 0.7,
  '3rd': 0.5,
  Crew: 0.3,
};

// Computed data for chart
const classData = classes.map((pClass) => {
  const classTotal = titanicData
    .filter((item) => item.Class === pClass)
    .reduce((acc, item) => acc + item.Count, 0);
  return {
    id: pClass,
    label: `${pClass} Class:`,
    value: classTotal,
    percentage: (classTotal / totalCount) * 100,
    color: classColors[pClass],
  };
});

const survivalData = [
  {
    id: 'Yes',
    label: 'Survived:',
    value: titanicData.filter((item) => item.Survived === 'Yes').reduce((sum, item) => sum + item.Count, 0),
    percentage:
      (titanicData.filter((item) => item.Survived === 'Yes').reduce((sum, item) => sum + item.Count, 0) /
        totalCount) *
      100,
    color: classColors['3rd'],
  },
  {
    id: 'No',
    label: 'Did not survive:',
    value: titanicData.filter((item) => item.Survived === 'No').reduce((sum, item) => sum + item.Count, 0),
    percentage:
      (titanicData.filter((item) => item.Survived === 'No').reduce((sum, item) => sum + item.Count, 0) /
        totalCount) *
      100,
    color: classColors['1st'],
  },
];

const survivalClassData = [...titanicData]
  .sort((a) => (a.Survived === 'Yes' ? -1 : 1))
  .map((item) => {
    const baseColor = survivalData.find((d) => d.id === item.Survived).color;
    return {
      id: `${item.Class}-${item.Survived}`,
      label: `${item.Class} class:`,
      value: item.Count,
      percentage:
        (item.Count /
          (item.Survived === 'Yes'
            ? survivalData[0].value
            : survivalData[1].value)) *
        100,
      color: `${baseColor}${opacityMap[item.Class] || 1}`,
    };
  });

// Reactive state for view toggle
const view = ref('survival');

// Computed data based on the current view
const chartData = computed(() => {
  return view.value === 'survival'
    ? {
        labels: ['Survived', 'Did not survive'],
        datasets: [
          {
            data: [survivalData[0].value, survivalData[1].value],
            backgroundColor: [survivalData[0].color, survivalData[1].color],
          },
        ],
      }
    : {
        labels: ['1st', '2nd', '3rd', 'Crew'],
        datasets: [
          {
            data: classData.map((item) => item.value),
            backgroundColor: classData.map((item) => item.color),
          },
        ],
      };
});

const chartOptions = computed(() => ({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
}));
</script>

<style scoped>
.container {
  width: 100%;
}

.pie-chart-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
}

button {
  transition: background-color 0.3s ease;
}
</style>
