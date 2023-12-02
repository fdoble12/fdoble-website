<template>
    <div id="trialExp" class="border-2 border-black">
        <div class="container mx-auto px-64 py-8">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Internship Experiences</h2>
        <ul>
            <!-- Loop through experiences using v-for -->
            <li v-for="(experience, index) in experiences" :key="index" class="py-4 border-2 border-black">
            <div class="flex justify-between items-center">
                <!-- Left side: Experience details -->
                <div class="mx-10">
                    <div class="font-bold text-lg">{{ experience.role }} at {{ experience.company }}</div>
                    <div class="text-gray-600">{{ experience.duration }}</div>
                    <!-- Description will show/hidden based on the 'expanded' property -->
                    <div v-if="experience.expanded" class="text-gray-800 mt-2">
                        <ul>
                            <li v-for="(desc,index) in experience.description" :key="index">
                                {{ desc }}
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Right side: Button to toggle description -->
                <button @click="toggleExperience(index)" class="mx-10">
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
          duration: "Current",
          description: ["- Visualized and analyzed data gathered from wide-range of employee survey"],
          expanded: false,
        },
        {
          company: "Procter & Gamble",
          role: "IT Intern",
          duration: "2023",
          description: ["- Co-led a dashboard project utilized by over 100 global manufacturing sites", "- Created a data ETL pipeline for data from various manufacturing sites' database","- Managed multiple implementations of different plants' software solutions"],
          expanded: false,
        },
        {
          company: "ATRAM Group",
          role: "Data Intern",
          duration: "2023",
          description: ["- Created multiple data ETL pipelines for the company's data warehouse","- Developed a web application that allows users from other BUs to handle missing data from the data warehouse"],
          expanded: false,
        },
        {
          company: "Shopee Philippines",
          role: "Seller Operations-Strategy and Planning Intern",
          duration: "2022",
          description: ["- Analyzed the KPIs of Seller Support agents","- Automated multiple data ingestion tasks of the team","- Handled the data scrubbing of various seller support cases"],
          expanded: false,
        },
        {
          company: "Rogomi Incorporated",
          role: "Student Intern",
          duration: "2022",
          description: ["- Developed a Facebook chatbot using Meta API and Python", "- Performed software testing on multiple software projects"],
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

</style>