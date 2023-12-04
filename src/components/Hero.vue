<template>
  <div id="experience" class="bg-teal-400 py-8 border-2 border-black">
    <section class="container mx-auto text-white min-h-screen flex flex-col items-center justify-center">
      <!-- Top: Large Text with Animation -->
      <h1 class="text-2xl text-black md:text-4xl lg:text-[90px] font-extrabold text-center m-4 p-8 falling-text">
        Hi!
      </h1>
      <h1 class="text-2xl text-black md:text-4xl lg:text-[90px] font-extrabold text-center m-4 p-8 falling-text">
        I'm Francis Doble
      </h1>

      <div class="w-full md:w-1/2 p-2 pt-0">
        <!-- Typing animation container -->
        <div id="typing-container" class="p-2 rounded-md text-xl text-black text-center">
          <!-- Placeholder for typing text -->
        </div>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  mounted() {
    this.typeText();
  },
  methods: {
    typeText() {
      const text = "4th Year Computer Science undergraduate at De La Salle University - Manila";
      const typingContainer = document.getElementById('typing-container');
      let i = 0;

      function typeWriter() {
        if (i < text.length) {
          typingContainer.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, 40); // Adjust typing speed here
        } else {
          // Wait for 5 seconds before restarting
          setTimeout(() => {
            typingContainer.innerHTML = '';
            i = 0;
            typeWriter();
          }, 2000); // 5 second delay
        }
      }

      typeWriter();
    }
  }
};
</script>

<style scoped>
/* Define the animation effect */
@keyframes falling {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Apply the animation to both text elements */
.falling-text {
  animation: falling 1s ease forwards;
}
</style>
