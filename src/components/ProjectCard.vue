<template>
  <div class="projects-container max-w-screen-xl mx-auto px-6 py-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Project 1 -->
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card rounded-lg shadow-lg overflow-hidden bg-white transform transition-all hover:scale-105"
      >
        <a :href="project.link" class="block">
          <!-- Project Image -->
          <div class="image-container w-full h-48">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-contain" />
          </div>

          <!-- Project Info -->
          <div class="p-4">
            <h3 class="text-2xl font-semibold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm">{{ project.description }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// Importing images in the script section
import Icon1 from '@/assets/images/practicer.png';  // Replace with actual image file paths
import Icon2 from '@/assets/images/icon.png';  // Replace with actual image file paths

export default {
  name: 'ProjectCard',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project 1",
          description: "This is a short description of Project 1. It shows what the project is about.",
          image: Icon1, // Use the imported image for project 1
          link: "/projects/project1",
        },
        {
          id: 2,
          title: "Project 2",
          description: "This is a brief description of Project 2. Another example project for demonstration.",
          image: Icon2, // Use the imported image for project 2
          link: "/projects/project2",
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-container {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.project-card {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.image-container {
  width: 100%;
  height: 12rem; /* Fixed height to maintain uniformity across all images */
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-card img {
  object-fit: contain; /* Ensures that the entire image is visible and maintains aspect ratio */
  width: 100%;
  height: 100%;
}

.project-card .p-4 {
  padding: 1rem;
}

@media (min-width: 640px) {
  .projects-container {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
</style>
