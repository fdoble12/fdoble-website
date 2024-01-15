<template>
    <div class="bg-white p-4 rounded-lg shadow-md border-2 border-black">
          <!-- Project Card Content -->
          <div class="mb-4">
            <img
              :src="project.img"
              :alt="project.title"
              class="w-full h-80 object-cover rounded border-2 border-black"
            />
          </div>
          <h3 class="text-lg md:text-xl text-blue-600 underline font-semibold mb-2">
            <a :href="project.url" class="hover:text-blue-800">{{ project.title }}</a>
          </h3>
          <p class="text-sm md:text-base text-gray-700 text-justify">{{ project.description }}</p>
        </div> 
</template>
<script>
    export default {
        props:{
        project: Object
    },
        name: 'ProjectCard',
    }
</script>

