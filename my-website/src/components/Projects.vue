<template>
    <section id="projects" class="bg-gray-100 py-16 min-h-[70vh]">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-semibold mb-4">Projects</h2>
  
        <!-- Project Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Project Card 1 -->
          <div class="bg-white p-4 rounded-lg shadow-md">
            <div class="mb-4">
              <img
                src="https://via.placeholder.com/200"
                alt="Project 1"
                class="w-full h-40 object-cover rounded"
              />
            </div>
            <h3 class="text-xl font-semibold mb-2">Project 1</h3>
            <p class="text-gray-700">Description of Project 1 goes here.</p>
          </div>
  
          <!-- Project Card 2 -->
          <div class="bg-white p-4 rounded-lg shadow-md">
            <div class="mb-4">
              <img
                src="https://via.placeholder.com/200"
                alt="Project 2"
                class="w-full h-40 object-cover rounded"
              />
            </div>
            <h3 class="text-xl font-semibold mb-2">Project 2</h3>
            <p class="text-gray-700">Description of Project 2 goes here.</p>
          </div>
  
          <!-- Project Card 3 -->
          <div class="bg-white p-4 rounded-lg shadow-md">
            <div class="mb-4">
              <img
                src="https://via.placeholder.com/200"
                alt="Project 3"
                class="w-full h-40 object-cover rounded"
              />
            </div>
            <h3 class="text-xl font-semibold mb-2">Project 3</h3>
            <p class="text-gray-700">Description of Project 3 goes here.</p>
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
  