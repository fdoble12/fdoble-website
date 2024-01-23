<template>
  <div id="cocurriculars" class="bg-gray-100 border-2 border-black py-8">
    <div class="container mx-auto md:w-[120vh] px-6">
      <h2 class="text-xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">Co-curricular Experiences</h2>
      <swiper
      :pagination="{ clickable: true}"
      :modules="modules"
      navigation
      :scrollbar="{ draggable: true }"
      >
        <swiper-slide v-for="(experience, index) in experiences" :key="index">
          <div class="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row border-2 border-black">
            <div class="w-full h-full md:w-3/5 md:h-3/5 md:pr-4"> 
              <img v-bind:src="experience.image">
            </div>
            <div class="md:w-4/5 py-2 md:py-0 px-4">
              <h3 class="text-lg md:text-2xl font-semibold text-gray-800 mb-1 md:mb-2">{{ experience.title }}</h3>
              <p class="text-gray-700 text-justify text-sm md:text-base">{{ experience.description }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>

    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation,Pagination],
      };
    },
  name: 'Cocurriculars',
  data() {
    return {
      experiences: [
        {
          image: 'cp.jpeg',
          title: 'College President',
          description: 'During my third year, I became the College President of Computer Studies Government (CSG). I was given the opportunity to spearhead more than 12 projects for over 3,000 students under the College of Computer Studies. Moreover, I was also able to collaborate with 8 organizations under the college and oversee the college government with 8 commitees and 80 officers.',
        },
        {
          image: 'bp.jpg',
          title: 'Batch President',
          description: 'In my second year of college, I was elected as the Batch President of Computer Batch 2024. During my stint, I was able to oversee 7 committees with 50 officers, and delivered over 8 projects for approximately 300 students of the batch. The experiences I had during my term helped me develop my leadership and organizational skills.',
        }
      ],
    };
  },
};
</script>

<style scoped>
/* Add any custom styling for your experiences section here */
</style>