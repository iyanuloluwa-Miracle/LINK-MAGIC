<template>
 <div class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
  <Navbar/>
  <HeroSection/>
  <Features/>
  <Footer/>

 </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import HeroSection from "./components/HeroSection/HeroSection.vue";
import Features from "./components/Features/Features.vue";
import Footer from "./components/Footer/Footer.vue";
import { handleShortUrl } from '../src/middleware/middleware';


export default {
  components: {
    Navbar,
   HeroSection,
   Features,
   Footer
  },

   async created() {
    // Check for short URLs when component is created
    await handleShortUrl();
  }

  
};
</script>
