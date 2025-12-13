<template>
  <div class="project-detail py-16 max-w-screen-xl mx-auto">
    <!-- Project Title -->
    <h1 class="text-4xl font-bold text-center text-gray-900 mb-8">{{ project.title }}</h1>

    <div class="project-content grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Project Image -->
      <div class="image-container w-full max-w-xs mx-auto md:max-w-sm">
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-contain rounded-lg shadow-sm" />
      </div>

      <!-- Project Information -->
      <div class="project-info flex flex-col justify-between space-y-8">
        <!-- Project Description -->
        <div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Project Description</h2>
          <p class="text-lg text-gray-600 leading-relaxed">{{ project.description }}</p>
        </div>

        <!-- Technologies Used -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800">Technologies Used</h3>
          <ul class="flex flex-wrap gap-4">
            <li v-for="tech in project.technologies" :key="tech" class="text-gray-700 text-lg bg-gray-100 px-4 py-2 rounded-full shadow-sm">
              {{ tech }}
            </li>
          </ul>
        </div>

        <!-- Visit Project Button -->
        <div>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block py-3 px-10 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-sm hover:bg-blue-700 focus:outline-none"
          >
            Visit Project →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Use ES module syntax to import images
import Icon1 from '@/assets/images/practicer.png'; // Replace with your actual image paths
import Icon2 from '@/assets/images/icon.png'; // Replace with your actual image paths

export default {
  name: 'ProjectDetail',
  props: {
    projectId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // Sample project data (you can replace this with data from an API or database)
      projects: [
        {
          id: '1',
          title: 'Practice R Package',
          description: 'The Practice R Package helps you improve your R skills through various exercises and challenges.',
          image: Icon1, // Use the imported image for project 1
          link: 'https://edgar-treischl.github.io/PracticeR/',
          technologies: ['Vue.js', 'Node.js', 'MongoDB'],
        },
        {
          id: '2',
          title: 'Project 2',
          description: 'Detailed description of Project 2.',
          image: Icon2, // Use the imported image for project 2
          link: '/projects/project2',
          technologies: ['React', 'Firebase', 'CSS'],
        },
      ],
    };
  },
  computed: {
    // Find the project based on the projectId from the URL
    project() {
      return this.projects.find((project) => project.id === this.projectId) || {};
    },
  },
};
</script>

<style scoped>
.project-detail {
  background-color: #f4f7fc; /* Subtle light background */
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.project-title {
  font-family: 'Poppins', sans-serif; /* More modern font */
  color: #333;
}

.project-detail img {
  border-radius: 8px;
  object-fit: contain; /* Ensures the entire image is visible */
}

.project-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-info h2,
.project-info h3 {
  color: #333;
}

.project-info p {
  color: #555;
  line-height: 1.7;
}

.project-info ul {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  gap: 8px;
}

.project-info li {
  font-size: 1rem;
  color: #4a4a4a;
  background-color: #e4e7eb;
  padding: 6px 12px;
  border-radius: 9999px; /* Rounded pill shape */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.project-info a {
  text-decoration: none;
  background-color: #007bff; /* Button color */
  padding: 12px 30px;
  font-size: 1.125rem;
  border-radius: 50px; /* Rounded button */
  color: white;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.project-info a:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.project-info a:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}

/* Responsive Styles */
@media (min-width: 768px) {
  .project-detail {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  .project-content {
    gap: 16px;
  }
}
</style>
