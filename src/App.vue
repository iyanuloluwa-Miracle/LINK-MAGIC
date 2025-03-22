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
import { handleShortUrl } from '../src/middleware/middleware';
import { useHead } from '@vueuse/head'


export default {
  components: {
    Navbar,
   HeroSection,
   Features,
   Footer
  },

  setup() {
    const gaId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID

    useHead({
      title: 'Link Magic - Transform Your Links',
      meta: [
        { name: 'description', content: 'Create short, memorable links in seconds with Link Magic. Transform long URLs into short, shareable links instantly.' },
        { property: 'og:title', content: 'Link Magic - Transform Your Links' },
        { property: 'og:description', content: 'Create short, memorable links in seconds with Link Magic.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://link-magic.vercel.app/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Link Magic - Transform Your Links' },
        { name: 'twitter:description', content: 'Create short, memorable links in seconds with Link Magic.' },
      ],
      script: [
        {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        },
      ],
    })
  },

   async created() {
    // Check for short URLs when component is created
    await handleShortUrl();
  }

  
};
</script>
