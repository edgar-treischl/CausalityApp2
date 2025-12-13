<template>
  <main class="page-main py-12">
    <section class="w-full px-6">
      <div class="flex flex-col md:flex-row md:flex-row-reverse items-center gap-10">

        <!-- Text Column -->
        <div class="md:w-7/12 text-right space-y-6">
          <h1 class="text-6xl md:text-4xl font-heading font-bold leading-tight">
            Edgar J. Treischl
          </h1>
          <h2 class="text-sm md:text-base font-heading font-semibold uppercase tracking-wider">
            Social scientist and R enthusiast
          </h2>

          <!-- Social Links -->
          <div class="flex justify-end gap-4 mt-2 text-xl">
            <a 
              v-for="link in socialLinks" 
              :key="link.label" 
              :href="link.url" 
              target="_blank" 
              rel="noopener noreferrer" 
              :aria-label="link.label"
              class="text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110"
            >
              <font-awesome-icon :icon="link.icon" />
            </a>
          </div>

          <!-- Description -->
          <p class="mt-1 text-xs md:text-sm leading-tight font-text">
            I am a social scientist and most of my research is about evaluation, survey research, and causality. I am also an R enthusiast with a broader view on data science topics such as data visualization, NLP, machine learning. In my spare time I go jogging, swimming, or do a bike tour.
          </p>

          <!-- Action Link -->
          <a 
            href="/about" 
            class="inline-block mt-6 text-gray-600 hover:underline font-text text-lg"
          >
            Read More &rarr;
          </a>
        </div>

        <!-- Image Column -->
        <div class="md:w-5/12 flex justify-center md:justify-end">
          <img 
            src="@/assets/images/circles.png" 
            alt="Hero Image" 
            class="w-full h-auto rounded-lg" 
            width="500" 
            height="500" 
          />
        </div>

      </div>
    </section>
  </main>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';  // Correct solid import for PDF icon

export default {
  name: 'Hero',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      socialLinks: [
        { icon: faGithub, url: "https://github.com/edgar-treischl", label: "GitHub" },
        { icon: faGoogle, url: "https://scholar.google.com/citations?user=hOhulnUAAAAJ&hl=en", label: "Google Scholar" },
        { icon: faLinkedin, url: "https://www.linkedin.com/in/dr-edgar-treischl-b681791b2/?originalSubdomain=de", label: "LinkedIn" },
        { icon: faFilePdf, url: "/media/CV_Treischl.pdf", label: "CV PDF" }
      ]
    };
  }
};
</script>

<style scoped>
/* Scoped styles for the Hero component */
.page-main {
  max-width: 100%;
}

.font-heading {
  font-family: 'Arial', sans-serif;
}

.font-text {
  font-family: 'Georgia', serif;
}

.text-gray-600 {
  color: #4a4a4a;
}

.text-gray-900 {
  color: #1a1a1a;
}

.text-xl {
  font-size: 1.25rem;
}
</style>
