<template>
  <div id="cocurriculars" class="bg-gray-100 border-2 border-black py-8">
    <div class="container mx-auto min-h-[60vh] px-6">
      <h2 class="text-xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">Co-curricular Experiences</h2>

      <div class="flex items-center justify-center mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div v-for="(experience, index) in experiences" :key="index">
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col justify-center items-center sm:flex-row border-2 border-black">
              <div class="mb-2">
                <img v-bind:src="experience.image" class="w-full h-full">
              </div>
              <div class="sm:w-3/5">
                <h3 class="text-lg md:text-2xl font-semibold text-gray-800 mb-1 md:mb-2">{{ experience.title }}</h3>
                <p class="text-gray-700 text-justify text-sm md:text-base">{{ experience.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Cocurriculars',
  data() {
    return {
      experiences: [
        {
          image: 'bp.jpg',
          title: 'Batch President',
          description: 'In my second year of college, I was elected as the Batch President of Computer Batch 2024. During my stint, I was able to oversee 7 committees with 50 officers, and delivered over 8 projects for approximately 300 students of the batch. The experiences I had during my term helped me develop my leadership and organizational skills.',
        },
        {
          image: 'cp.jpeg',
          title: 'College President',
          description: 'During my third year, I became the College President of Computer Studies Government (CSG). I was the given the opportunity to spearhead more than 12 projects for over 3,000 students under the College of Computer Studies. Moreover, I was also able to collaborate with 8 organizations under the college and oversee the college government with 8 commitees and 80 officers.',
        }
      ],
    };
  },
};
</script>

<style scoped>
/* Add any custom styling for your experiences section here */
</style>