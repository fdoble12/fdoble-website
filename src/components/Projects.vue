<template>
  <section id="projects" class="bg-violet-400 border-2 border-black md:py-8">
    <h2 class="text-2xl md:text-4xl text-black font-semibold mb-4">Projects</h2>
    <div class="container mx-auto grid grid-cols-3 gap-2 w-[140vh]">
      <ProjectCard v-for="(project,index) in projects" :key="index" :project="project"></ProjectCard>
    </div>
  </section>
</template>
  
  <script>
  import ProjectCard from './ProjectCard.vue';
  export default {
    name: 'Projects',
    components: {
      ProjectCard
    },
    data(){
      return{
        projects: [
          {
            title: "Real Estate Website",
            description: "A real estate website that shows details about a real estate firm and its featured listings. The website was created using Vue.js, Vue router, and Tailwind CSS.",
            img: "../src/assets/filcrest.png",
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
  };
  </script>
  