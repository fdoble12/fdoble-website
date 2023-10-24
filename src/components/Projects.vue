<template>
    <section id="projects" class="bg-gray-900 py-16 min-h-[70vh]">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl text-gray-100 font-semibold mb-4">Projects</h2>
  
        <!-- Project Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Project Card 1 -->
          <div class="bg-white p-4 rounded-lg shadow-md">
            <div class="mb-0">
              <img
                src="../assets/disqussip.png"
                alt="Project 1"
                class="w-full h-80 object-cover rounded"
              />
            </div>
            <h3 class="text-xl underline font-semibold mb-2"><a href="https://github.com/nicapos/discussion-forum" class="hover:text-blue-500"> Disqussip </a></h3>
            <p class="text-gray-700 text-justify">A web application that allows users to create and participate in discussion forums. Built using Node.js (Express), Handlebars, and MongoDB, that handled the user interface, API calls, and data storage of the application.</p>
          </div>
  
          <!-- Project Card 2 -->
          <div class="bg-white p-4 rounded-lg shadow-md">
            <div class="mb-0">
              <img
                src="../assets/lashout.png"
                alt="Project 2"
                class="w-full h-80 object-cover rounded"
              />
            </div>
            <h3 class="text-xl underline font-semibold mb-2"><a href="https://github.com/leimons/LashOutMNL" class="hover:text-blue-500"> LashoutMnl </a></h3>
            <p class="text-gray-700 text-justify">Lash Out MNL Beauty Lounge is a beauty services parlor that operates at BF Homes Almanza, Las Pinas City, Philippines. It was founded by Ms. Nicole Suriaga in 2020, during the COVID-19 pandemic. This web application is created using Vue, NodeJS Express, and MongoDB</p>
          </div>
          
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Projects',
  };
  </script>
  