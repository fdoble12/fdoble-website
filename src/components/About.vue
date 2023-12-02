<template>
  <div id="about" class="border-2 border-black">
    <div class="container mx-auto min-h-[75vh] flex items-center justify-center ">
    <div class="flex items-center justify-center p-8">
      <!-- Circle for the Avatar/Photo -->
      <div class="w-64 h-64 rounded-full">
        <img
                src="fd.jpg"
                alt="Project 2"
                class="w-64 h-64 rounded-full object-cover rounded border-2 border-black"
              />
      </div>

      <!-- Speech Bubble for About Me Text, with a max-width to make it narrower -->
      <div class="ml-4 p-6 bg-white rounded-lg shadow-lg border-2 border-gray-800" style="max-width: 600px;">
        <h2 class="text-2xl font-bold mb-2">About Me</h2>
        <p class="text-gray-700 text-md text-justify">
          I am Francis Doble, a 4th-year Computer Science undergraduate at De La Salle University-Manila. I am a goal-oriented and eager individual with leadership skills developed through my co-curricular activities.<br><br> Through multiple internship experiences, I have gained practical knowledge in different areas, including data analysis, data engineering, project management, software development, and automation. <br><br> I'm always excited to take on new challenges and work on innovative projects.
        </p>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'About',
};
</script>
