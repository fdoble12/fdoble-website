<template>
  <div id="experience" class="bg-gray-100 py-8">
    <div class="container mx-auto">
      <h2 class="text-3xl font-semibold text-gray-800 mb-6">My Experiences</h2>

      <carousel :itemsToShow="1" :wrapAround="true" :autoplay="false">
        <slide v-for="(experience, index) in experiences" :key="index">
          <div class="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row">
            <div class="md:w-2/5 pr-4">
              <img v-bind:src="experience.image" class="w-full h-full">
            </div>
            <div class="md:w-3/5">
              <h3 class="text-2xl font-semibold text-gray-800 mb-2">{{ experience.title }}</h3>
              <p class="text-gray-700 text-justify">{{ experience.description }}</p>
            </div>
          </div>
        </slide>
      </carousel>
      
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'Experience',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      experiences: [
        {
          image: 'rogomi.jpeg',
          title: 'Software Tester Intern at Rogomi Incorporated',
          description: 'As an intern at Rogomi Inc., my main role was to do software testing for the projects that the company was handling. Aside from that, I was given a project to develop a chatbot using Facebook Meta API and Javascript. My stint at Rogomi exposed me to an Agile development environment and several technologies that are used for different software development projects.',
        },
        {
          image: 'shopee.jpeg',
          title: 'Seller Operations - Strategy and Planning Intern at Shopee Philippines',
          description: 'During my internship, I had the opportunity to work on a diverse set of tasks. I analyzed KPIs for Seller Support agents, automated data pulling tasks using Google AppScript, created dashboards with Google Data Studio, and conducted evaluation of seller operations cases. This experience allowed me to develop strong analytical, automation, and data visualization skills while gaining a deep understanding of e-commerce operations.',
        }
        ,
        {
          image: 'pg.JPG',
          title: 'IT Intern at Procter & Gamble Philippines',
          description: 'During my internship at P&G with the Manufacturing IT team, I co-led a dashboard project that monitored the master data health of over 100 global manufacturing sites. I also automated the data ETL process for various dashboard projects. Additionally, I managed the successful implementation of software solutions across multiple manufacturing sites. This experience provided valuable insights into the critical role of data integrity and automation in optimizing manufacturing processes.',
        }
        ,
        {
          image: 'atram.jpeg',
          title: 'Data Team Intern at ATR Asset Management Group',
          description: 'During my internship at ATRAM, I handled several projects that are focused mainly on data management and automation. I was able to utilize tools and platforms such as Azure. This experience provided the significance of efficient data management and automation.',
        }
        ,
        {
          image: 'globe.jpeg',
          title: 'CX Data Insighting and Analytics Intern at Globe Telecom',
          description: 'During my internship at Globe, I analyzed responses from an organization-wide survey with over 20,000 participants, providing crucial insights into employee feedback. I also developed interactive dashboards using Google Data Studio to effectively communicate these insights to different business units and stakeholders. This experience deepened my data analysis skills and underscored the importance of clear data visualization for informed decision-making within the organization.',
        }
      ],
    };
  },
};
</script>

<style scoped>
/* Add any custom styling for your experiences section here */
</style>