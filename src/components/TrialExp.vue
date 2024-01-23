<template>
    <div id="trialExp" class="border-2 border-black">
      <div class="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8">
        <h2 class="text-xl md:text-3xl font-semibold text-gray-800 mb-6">Internship Experiences</h2>
        <ul class="border-2 border-black">
          <!-- Loop through experiences using v-for -->
          <li
            v-for="(experience, index) in experiences"
            :key="index"
            class="py-2 md:py-4 border-2 border-black cursor-pointer"
            @click="toggleExperience(index)"
          >
            <div class="flex flex-col sm:flex-row justify-between cursor-pointer">
              <!-- Left side: Experience details -->
              <div class="lg:mb-4 mx-6 md:mx-10 sm:mb-0 sm:mr-10">
                <div class="underline-on-hover">
                  <div class="font-bold text-sm md:text-xl">{{ experience.role }}</div>
                  <div class="italic text-sm md:text-lg">{{ experience.company }}</div>
                </div>
                <div class="text-gray-600 text-xs md:text-base  ">{{ experience.duration }}</div>
                <!-- Description will show/hidden based on the 'expanded' property -->
                <div v-if="experience.expanded" class="text-gray-800 mt-2">
                  <ul class="list-disc mx-4 text-sm lg:text-lg">
                    <li v-for="(desc, index) in experience.description" :key="index">
                      {{ desc }}
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Right side: Button to toggle description -->
              <button class="mx-2 sm:mx-10">
                <!-- Conditional rendering for '+' or 'x' based on the 'expanded' property -->
                <span v-if="experience.expanded" class="text-2xl font-bold">-</span>
                <span v-else class="text-2xl font-bold">+</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>

<script>
export default {
    name:'TrialExp',
  data() {
    return {
      // Sample data for experiences
      experiences: [
        {
          company: "Globe Telecom",
          role: "CX Data Insighting and Analytics Intern",
          duration: "2023",
          description: ["Collected and analyzed data gathered from organization-wide employee survey","Visualized data insights through dashboards and presentations for other BUs and stakeholders"],
          expanded: false,
        },
        {
          company: "Procter & Gamble",
          role: "IT Intern",
          duration: "2023",
          description: ["Co-led a dashboard project utilized by over 100 global manufacturing sites","Managed multiple implementations of different plants' software solutions","Created a data pipeline that optimized the handling of data from various manufacturing plants for a dashboard monitoring project"],
          expanded: false,
        },
        {
          company: "ATRAM Group",
          role: "Data Intern",
          duration: "2023",
          description: ["Created data ETL pipelines and optimized the data ingestion process for the company's data warehouse","Developed a web application that allowed users from other BUs to handle missing data from the data warehouse"],
          expanded: false,
        },
        {
          company: "Shopee Philippines",
          role: "Seller Operations-Strategy and Planning Intern",
          duration: "2022",
          description: ["Analyzed the KPIs of Seller Support agents","Automated multiple data ingestion tasks of the team","Handled the data scrubbing of various seller support cases"],
          expanded: false,
        },
        {
          company: "Rogomi Incorporated",
          role: "Student Intern",
          duration: "2022",
          description: ["Developed a Facebook chatbot using Meta API and Python", "Performed software testing on multiple software projects"],
          expanded: false,
        },
        // Add more experiences as needed
      ],
    };
  },
  methods: {
    toggleExperience(index) {
      this.experiences[index].expanded = !this.experiences[index].expanded;
    },
  },
};
</script>

<style>
.underline-on-hover:hover {
  text-decoration: underline;
}
</style>