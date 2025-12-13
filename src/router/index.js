import { createRouter, createWebHashHistory } from 'vue-router';

// Import pages
import Landing from '../views/Landing.vue'; // Home page (Hero will go here)
import About from '../views/About.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';
import Projects from '../views/Projects.vue';
import ProjectDetail from '../views/ProjectDetail.vue'; // Import the new ProjectDetail page

const routes = [
  { path: '/', component: Landing },  // Landing page route (Hero included here)
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/projects/:projectId', component: ProjectDetail, props: true }, // Dynamic route for project details
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
