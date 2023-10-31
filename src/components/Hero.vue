<template>
<section class="container mx-auto bg-black text-white min-h-screen flex flex-col items-center justify-center" >    <!-- Top: Large Text with Animation -->
    <h1 class="text-2xl md:text-4xl lg:text-[90px] font-extrabold text-center m-4 p-8">
      FRANCIS DOBLE
    </h1>

    <!-- Bottom: Editable Introduction with Animation -->
    <div class="w-full md:w-1/2 p-2 pt-0">
        <!-- Placeholder for your introduction -->
        <div class="p-2 rounded-md text-gray-200 text-justify">
          I am Francis Doble, a 4th-year Computer Science student at De La Salle University-Manila. I am a goal-oriented and eager individual with leadership skills developed through my co-curricular activities. I have gained practical experience in various areas, including data analysis, data engineering, project management, software testing and development, and automation, through multiple internships. Additionally, I have acquired technical proficiency in Azure, Microsoft Power Tools, Python, JavaScript, Vue.js, Tailwind CSS, and database management tools like MongoDB and MySQL. My curiosity drives me to constantly learn and improve my skills. I'm always excited to take on new challenges and work on innovative projects.
      </div>
    </div>

    <button @click="downloadCV" class="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-4">
            Download CV
    </button>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    downloadCV() {
      // Define the path to the CV file in the public folder
      const cvFilePath = '/DOBLE_FRANCIS_CV 2023.pdf'; // Update the file name as needed

      // Create an anchor element for the download
      const anchor = document.createElement('a');
      anchor.href = cvFilePath;
      anchor.download = 'DOBLE_FRANCIS_CV 2023.pdf'; // Update the file name as needed

      // Trigger a click event on the anchor to start the download
      anchor.click();
    },
  }
};
</script>

<style scoped>
/* Define the animation effect */
@keyframes falling {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Apply the animation to both text and the introduction */
.falling-text {
  animation: falling 1s ease forwards;
}
</style>
