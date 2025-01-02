<template>
 <div class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
  <Navbar/>
  <HeroSection/>
  <Features/>
 </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import HeroSection from "./components/HeroSection/HeroSection.vue";
import Features from "./components/Features/Features.vue";


export default {
  components: {
    Navbar,
    HeroSection,
    Features
  },

  
};
</script>
