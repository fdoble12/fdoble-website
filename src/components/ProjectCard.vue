<template>
  <div class="bg-white p-4 pb-1 rounded-lg shadow-xl border-2 border-gray-600 flex flex-stretch flex-col hover:shadow-dark hover:transform-hover cursor-pointer hover:border-black hover:opacity-80 hover:border-4" @click="navigateToProject">
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
      <h3 class="text-lg sm:text-md md:text-xl text-blue-600 hover:underline font-semibold mb-2 hover:text-blue-800 sm:text-md">
        {{ project.title }}
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
    navigateToProject() {
      // Use window.location or router.push to navigate to the project URL
      window.open(this.project.url,'_blank')
      // If you're using a router (e.g., Vue Router), you can use router.push(this.project.url);
    }

  },
      name: 'ProjectCard',
    }
</script>
<style scoped>
.hover {
  transition: opacity 0.3s, box-shadow 0.3s;
}

.transform-hover {
  transition: transform 0.3s;
}

.hover:hover {
  opacity: 0.8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.hover:hover .transform-hover {
  transform: translateY(-4px);
}
</style>