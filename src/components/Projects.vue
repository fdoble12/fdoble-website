<template>
  <section id="projects" class="bg-violet-400 border-2 border-black py-4 md:py-8">
    <div class="container mx-auto px-6 py-2 md:p-0 md:w-[160vh]">
      <h2 class="text-2xl md:text-4xl text-black font-semibold mb-4">Projects</h2>

      <!-- Project Cards -->
      <swiper
        v-if="isSmallScreen"
        class="grid grid-cols-1"
        :modules="modules"
        :space-between="50"
        :pagination="{ clickable: true}"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          v-for="(project, index) in projects"
          :key="index"
          class="pb-10"
        > 
          <ProjectCard :project="project"></ProjectCard>
        </swiper-slide>
      </swiper>

      <!-- Display cards without carousel for larger screens -->
      <div v-else class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard v-for="(project, index) in projects" :key="index" :project="project"></ProjectCard>
      </div>
    </div>
  </section>
</template>
  
  <script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import ProjectCard from '../components/ProjectCard.vue'

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  export default {
    name: 'Projects',
    components: {
      Swiper,
      SwiperSlide,
      ProjectCard
    },
    data(){
      return{
        isSmallScreen: false,
        swiperOptions: {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        projects: [
          {
            title: "Real Estate Website",
            description: "A real estate website that shows details of a real estate firm and its featured listings.",
            img: "/projects/filcrest.png",
            url: "https://filcrestrealty.vercel.app/",
            skills: ["HTML","CSS","JavaScript","VueJS","TailwindCSS"]
          },
          {
            title: "Disqussip",
            description: "A web application that allows users to create and participate in discussion forums.",
            img: "/projects/disqussip.png",
            url: "https://github.com/nicapos/discussion-forum",
            skills: ["HTML","CSS","JavaScript","Node.js","MongoDB"]
          },
          {
            title: "Sentiment Analysis Web Application",
            description: "A simple web application that applies sentiment analysis on comments from YouTube videos.",
            img: "/projects/yt-sent.png",
            url: "https://github.com/fdoble12/yt-sentiments-webapp",
            skills: ["VueJS","Python","Flask","Text Classifier","Machine Learning"]
          },
          {
            title: "LashoutMnl",
            description: "This web application handles the booking services of LashOut MNL studio.",
            img: "/projects/lashout.png",
            url: "https://github.com/leimons/LashOutMNL",
            skills: ["VueJS","Node.js","MongoDB"]
          },
          {
            title: "Coffee Ordering Android Application",
            description: "Users are able to choose and place an order, as well as selecting their delivery address.",
            img: "/projects/yc.png",
            url: "https://github.com/donnielle-andres/MOBDEVE-MCO",
            skills:["Google API", "Kotlin"]
          }
        ],

      }
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
    mounted() {
      // Check screen size on mount
      this.isSmallScreen = window.innerWidth < 640;
      // Watch for screen size changes
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      // Remove event listener to prevent memory leaks
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        // Update isSmallScreen based on screen width
        this.isSmallScreen = window.innerWidth < 640;
      },
    },
  };
  </script>
  