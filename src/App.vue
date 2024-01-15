<script setup>
import Navbar from './components/Nav.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import TrialExp from './components/TrialExp.vue';
import Skills from './components/Skills.vue';
</script>

<template>
  <div class="bg-black w-full h-screen">
    <Navbar />
    <Hero/>
    <About/>
    <Skills/>
    <TrialExp/>
    <Projects/>
    <Contact/>
  </div>
    
</template>

<style scoped>

</style>
