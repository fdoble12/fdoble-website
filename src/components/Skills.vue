<template>
  <div id="skills" class="border-2 border-black bg-gray-800">
      <div class="container mx-auto my-4 md:my-12 px-10 md:w-[125vh] rounded-lg ">
        <h1 class="text-2xl md:text-3xl font-semibold text-gray-200 pb-0 md:pb-4">My Skills</h1>
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-8 py-4 ">
            <div v-for="(skill, index) in skills"
                :key="index" 
                class="w-[96px] h-[96px] sm:w-[96px] sm:h-[96px] md:w-[128px] md:h-[128px] p-4 shadow-2xl rounded-md shadow-inner text-center border-2 bg-gray-200 border-teal-400">
                <img :src="skill.img">
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            skills: [
    {
        title: "HTML",
        img: "./skills/1.png"
    },
    {
        title: "Javascript",
        img: "./skills/2.png"
    },
    {
        title: "CSS",
        img: "./skills/3.png"
    },
    {
        title: "TailwindCSS",
        img: "./skills/4.png"
    },
    {
        title: "Vue.js",
        img: "./skills/5.png"
    },
    {
        title: "NodeJS",
        img: "./skills/6.png"
    },
    {
        title: "Python Flask",
        img: "./skills/7.png"
    },
    {
        title: "MongoDB",
        img: "./skills/8.png"
    },
    {
        title: "MySQL",
        img: "./skills/9.png"
    },
    {
        title: "Microsoft SQL",
        img: "./skills/10.png"
    },
    {
        title: "Azure Data Factory",
        img: "./skills/11.png"
    },
    {
        title: "Apache NiFi",
        img: "./skills/12.png"
    },
    {
        title: "Knime Data Workflow",
        img: "./skills/13.png"
    },
    {
        title: "Microsoft PowerBI",
        img: "./skills/14.png"
    },
    {
        title: "Google Data Studio",
        img: "./skills/15.png"
    }
]

        }
    }
}
</script>

<style>

</style>