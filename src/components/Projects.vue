<template>
  <section id="projects" class="bg-violet-400 border-2 border-black md:py-8 min-h-[70vh]">
    <div class="container mx-auto p-6 md:p-0">
      <h2 class="text-2xl md:text-4xl text-black font-semibold mb-4">Projects</h2>

      <!-- Project Cards -->
      <swiper
        v-if="isSmallScreen"
        class="grid grid-cols-1"
        :modules="modules"
        :space-between="50"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          v-for="(project, index) in projects"
          :key="index"
        > 
          <ProjectCard :project="project"></ProjectCard>
        </swiper-slide>
      </swiper>

      <!-- Display cards without carousel for larger screens -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            description: "A real estate website that shows details about a real estate firm and its featured listings. The website was created using Vue.js, Vue router, and Tailwind CSS.",
            img: "/filcrest.png",
            url: "https://filcrestrealty.vercel.app/"
          },
          {
            title: "Disqussip",
            description: "A web application that allows users to create and participate in discussion forums. Built using Node.js (Express), Handlebars, and MongoDB, it handles the user interface, API calls, and data storage of the application.",
            img: "../src/assets/disqussip.png",
            url: "https://github.com/nicapos/discussion-forum"
          },
          {
            title: "YouTube Comments Sentiment Analysis Web Application",
            description: "A simple web application that applies sentiment analysis on comments from YouTube videos. This app uses Vue.js, Flask, Flair Classifier, and YouTube Data API.",
            img: "../src/assets/yt-sent.png",
            url: "https://github.com/fdoble12/yt-sentiments-webapp"
          },
          {
            title: "LashoutMnl",
            description: "Lash Out MNL Beauty Lounge is a beauty services parlor that operates at BF Homes Almanza, Las Pinas City, Philippines. This web application is created using Vue, NodeJS Express, and MongoDB to handle the booking services of the lash studio.",
            img: "../src/assets/lashout.png",
            url: "https://github.com/leimons/LashOutMNL"
          },
          {
            title: "Coffee Ordering Android Application",
            description: "This coffee ordering application is inspired by Yardstick coffee's coffee ordering application. Users are able to select from a wide range of drinks and place an order, selecting their delivery address. This Android app was developed using Kotlin and Google Maps API.",
            img: "../src/assets/yc.png",
            url: "https://github.com/donnielle-andres/MOBDEVE-MCO"
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
  