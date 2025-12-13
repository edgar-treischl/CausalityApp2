<template>
  <div class="projects-container max-w-screen-xl mx-auto px-6 py-12">
    <h2 class="text-4xl font-bold text-center mb-8">My Projects</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card rounded-lg shadow-lg overflow-hidden bg-white transform transition-all hover:scale-105"
      >
        <router-link :to="'/projects/' + project.id" class="block">
          <!-- Project Image -->
          <div class="image-container w-full h-48">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-contain" />
          </div>

          <!-- Project Info -->
          <div class="p-4">
            <h3 class="text-2xl font-semibold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm">{{ project.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// Importing images in the script section
import Icon1 from '@/assets/images/practicer.png';  // Replace with actual image file paths
import Icon2 from '@/assets/images/icon.png';  // Replace with actual image file paths

export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: '1',
          title: "Practice R Package",
          description: "Practice R does this.",
          image: Icon1, // Use the imported image for project 1
        },
        {
          id: '2',
          title: "Project 2",
          description: "This is a brief description of Project 2.",
          image: Icon2, // Use the imported image for project 2
        },
      ],
    };
  },
};
</script>
