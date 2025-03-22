<template>
 <div class="min-h-screen bg-gradient-to-br from-[#1A103C] via-[#2D1B69] to-[#3B238C]">
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

export default {
  components: {
    Navbar,
   HeroSection,
   Features,
   Footer
  }
};
</script>
