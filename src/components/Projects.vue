<template>
    <section id="projects" class="bg-violet-400 border-2 border-black md:py-8 min-h-[70vh]">
      <div class="container mx-auto p-6 md:p-0">
        <h2 class="text-2xl md:text-4xl text-black font-semibold mb-4">Projects</h2>
  
        <!-- Project Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded-lg shadow-md border-2 border-black">
            <div class="mb-4">
              <img
                src="../assets/filcrest.png"
                alt="Project 2"
                class="w-full h-80 object-cover rounded border-2 border-black"
              />
            </div>
            <h3 class="text-lg md:text-xl text-blue-600 underline font-semibold mb-2"><a href="https://filcrestrealty.vercel.app/" class="hover:text-blue-800"> Real Estate Website </a></h3>
            <p class="text-sm md:text-base text-gray-700 text-justify">A real estate website that shows details about a real estate firm and its featured listings. <span class="font-bold">The website was created using Vue.js, Vue router, and Tailwind CSS.</span></p>
          </div>
          <!-- Project Card 1 -->
          <div class="bg-white p-4 rounded-lg shadow-md border-2 border-black">
            <div class="mb-4">
              <img
                src="../assets/disqussip.png"
                alt="Project 1"
                class="w-full h-80 object-cover rounded border-2 border-black"
              />
            </div>
            <h3 class="text-lg md:text-xl text-blue-600 underline font-semibold mb-2"><a href="https://github.com/nicapos/discussion-forum" class="hover:text-blue-800"> Disqussip </a></h3>
            <p class="text-sm md:text-base text-gray-700 text-justify">A web application that allows users to create and participate in discussion forums. <span class="font-bold">Built using Node.js (Express), Handlebars, and MongoDB</span>, that handled the user interface, API calls, and data storage of the application.</p>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-md border-2 border-black">
            <div class="mb-4">
              <img
                src="../assets/yt-sent.png"
                alt="Project 3"
                class="w-full h-80 object-cover rounded border-2 border-black"
              />
            </div>
            <h3 class="text-lg md:text-xl text-blue-600 underline font-semibold mb-2"><a href="https://github.com/fdoble12/yt-sentiments-webapp" class="hover:text-blue-800"> YouTube Comments Sentiment Analysis Web Application </a></h3>
            <p class="text-sm md:text-base text-gray-700 text-justify">A simple web application that applies sentiment analysis on comments from YouTube videos.<span class="font-bold"> This app uses Vue.js, Flask, Flair Classifier, and YouTube Data API</span></p>
          </div>

          <!-- Project Card 2 -->
          <div class="bg-white p-4 rounded-lg shadow-md border-2 border-black">
            <div class="mb-4">
              <img
                src="../assets/lashout.png"
                alt="Project 2"
                class="w-full h-80 object-cover rounded border-2 border-black"
              />
            </div>
            <h3 class="text-lg md:text-xl underline text-blue-600 font-semibold mb-2"><a href="https://github.com/leimons/LashOutMNL" class="hover:text-blue-800"> LashoutMnl </a></h3>
            <p class="text-sm md:text-base text-gray-700 text-justify">Lash Out MNL Beauty Lounge is a beauty services parlor that operates at BF Homes Almanza, Las Pinas City, Philippines. This web application is <span class="font-bold">created using Vue, NodeJS Express, and MongoDB</span> to handle the booking services of the lash studio.</p>
          </div>

          <!-- Project Card 3 -->
          <div class="bg-white p-4 rounded-lg shadow-md border-2 border-black">
            <div class="mb-4">
              <img
                src="../assets/yc.png"
                alt="Project 3"
                class="w-full h-80 object-cover rounded border-2 border-black"
              />
            </div>
            <h3 class="text-lg md:text-xl text-blue-600 underline font-semibold mb-2"><a href="https://github.com/donnielle-andres/MOBDEVE-MCO" class="hover:text-blue-800"> Coffee Ordering Android Application </a></h3>
            <p class="text-sm md:text-base text-gray-700 text-justify">This coffee ordering application is inspired by Yardstick coffee's coffee ordering application. Users are able to select from a wide-range of drinks selection and place an order, selecting their delivery address. This Android app was<span class="font-bold"> developed using Kotlin and Google Maps API.</span></p>
          </div>
          
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Projects',
  };
  </script>
  