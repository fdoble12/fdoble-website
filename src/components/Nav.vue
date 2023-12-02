<template>
    <nav class="bg-[#303030] border-b-2 border-black p-4 fixed w-full mb-16 md:mb-18 z-40">
      <div class="container mx-auto flex flex-wrap justify-between items-center">
        <div class="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-0">
          <a href="#hero" class="text-white hover:text-teal-400">Francis Doble</a>
        </div>
        <div class="md:flex items-center space-x-4 md:space-x-6">
          <a href="#trialExp" class="text-white hover:text-teal-200">Experience</a>
          <a href="#projects" class="text-white hover:text-teal-200">Projects</a>
          <a href="#contact" class="text-white hover:text-teal-200">Contact</a>
          
        </div>
      </div>
    </nav>
  </template>

<script>
export default {
  name: 'Nav',
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

  