<template>
 <div class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
  <Navbar/>
  <HeroSection/>
 </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import HeroSection from "./components/HeroSection/HeroSection.vue";


export default {
  components: {
    Navbar,
    HeroSection
  },

  
};
</script>
