<template>
  <div id="about" class="border-2 border-black">
    <div class="container mx-auto min-h-[75vh] flex items-center justify-center">
      <div class="flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
        <!-- Circle for the Avatar/Photo -->
        <div class="about-image w-32 h-32 md:w-64 md:h-64 rounded-full mb-4 md:mb-0">
          <img
            src="../assets/fd.jpg"
            alt="Francis Doble"
            class="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover rounded border-2 border-black"
          />
        </div>

        <!-- Speech Bubble for About Me Text -->
        <div class="about-text ml-4 p-4 md:p-6 bg-white rounded-lg shadow-lg border-2 border-gray-800 max-w-[600px]">
          <h2 class="text-2xl md:text-3xl font-bold mb-2">About Me</h2>
          <p class="text-gray-700 text-md md:text-lg text-justify">
            I am Francis Doble, a 4th-year Computer Science undergraduate at De La Salle University-Manila. I am a goal-oriented and eager person with leadership skills developed through my co-curricular activities. <br><br>Through multiple internship experiences, I have gained practical knowledge in different areas, including data analysis, data engineering, project management, software development, and automation. <br><br> I'm always excited to take on new challenges and work on innovative projects.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Check if the screen width is larger than a specific breakpoint, e.g., 768px for tablets
      if(window.innerWidth > 600) {
        const aboutSection = document.getElementById('about');
        const imageDiv = aboutSection.querySelector('.about-image');
        const textDiv = aboutSection.querySelector('.about-text');
        const sectionPos = aboutSection.getBoundingClientRect();

        // Calculate the percentage of the section in view
        const scrollPercent = Math.min(1, (sectionPos.top) / window.innerHeight);

        // Adjust transform based on scroll percent
        imageDiv.style.transform = `translateX(${-50 * scrollPercent}px)`; // Adjust values as needed
        textDiv.style.transform = `translateX(${50 * scrollPercent}px)`; // Adjust values as needed
        
      }
    }
  }
};
</script>


<style scoped>
  .about-image, .about-text {
    transition: transform 10ms ease-out;
  }
</style>