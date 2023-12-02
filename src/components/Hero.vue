<template>
<div id="experience" class="bg-teal-400 py-8 border-2 border-black">
  <section class="container mx-auto text-white min-h-screen flex flex-col items-center justify-center" >    <!-- Top: Large Text with Animation -->
    <h1 class="text-2xl text-black md:text-4xl lg:text-[90px] font-extrabold text-center m-4 p-8">
      Hi!
    </h1>
    <h1 class="text-2xl text-black md:text-4xl lg:text-[90px] font-extrabold text-center m-4 p-8">
      I'm Francis Doble
    </h1>

    <div class="w-full md:w-1/2 p-2 pt-0">
        <!-- Placeholder for your introduction -->
        <div class="p-2 rounded-md text-black text-center">
          4th Year Computer Science undergraduate at De La Salle University - Manila
      </div>
    </div>
  </section>
</div>

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
