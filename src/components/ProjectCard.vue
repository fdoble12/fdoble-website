<template>
  <div class="bg-white p-4 pb-1 rounded-lg shadow-xl border-2 border-black flex flex-stretch flex-col">
    <!-- Project Card Content -->
    <div>
      <img
        :src="project.img"
        :alt="project.title"
        class="w-[360px] h-60 md:w-full md:h-60 object-cover rounded border-2 border-black"
      />
    </div>
    <div>
      <div class="pt-2">
      <h3 class="text-lg sm:text-md md:text-xl text-blue-600 underline font-semibold mb-2">
        <a :href="project.url" class="hover:text-blue-800 sm:text-md">{{ project.title }}</a>
      </h3>
      <p class="text-sm sm:text-xs md:text-base text-gray-700 text-justify">{{ project.description }}</p>
      </div>
    </div>
    <div class="py-2 gap-1 flex flex-wrap">
      <div v-for="(skill, index) in project.skills" :key="index" 
            :class="getSkillClass(skill)">{{ skill }}</div>
    </div>
    
  </div>
</template>

<script>
    export default {
        props:{
        project: Object
    },
    methods: {
    getSkillClass(skill) {
      switch (skill.toLowerCase()) {
        case 'html':
          return 'bg-red-500 text-white rounded-full px-2 py-1 text-xs mt-2';
        case 'javascript':
          return 'bg-yellow-500 text-white rounded-full px-2 py-1 text-xs mt-2';
        case 'css':
          return 'bg-blue-300 text-white rounded-full px-2 py-1 text-xs mt-2';
        case 'tailwind':
          return 'bg-blue-600 text-white rounded-full px-2 py-1 text-xs mt-2';
        case 'node.js':
          return 'bg-green-200 text-black rounded-full px-2 py-1 text-xs mt-2';
        case 'mongodb':
          return 'bg-green-800 text-white rounded-full px-2 py-1 text-xs mt-2';
        case 'kotlin':
          return 'bg-orange-500 text-white rounded-full px-2 py-1 text-xs mt-2';
        case 'vuejs':
          return 'bg-green-500 text-white rounded-full px-2 py-1 text-xs mt-2';
        case 'python':
          return 'bg-blue-800 text-white rounded-full px-2 py-1 text-xs mt-2';
        case 'text classifier':
          return 'bg-gray-800 text-white rounded-full px-2 py-1 text-xs mt-2';
        case 'flask':
          return 'bg-gray-600 text-white rounded-full px-2 py-1 text-xs mt-2';
        default:
          return 'bg-purple-500 text-white rounded-full px-2 py-1 text-xs mt-2';
      }
    },
  },
      name: 'ProjectCard',
    }
</script>

