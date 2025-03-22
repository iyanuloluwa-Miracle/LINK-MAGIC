<template>
  <section class="text-white px-6 py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-3xl md:text-4xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-[#9D6FFF] to-[#B4A5FF] bg-clip-text text-transparent">
        Features
      </h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-11">
      <!-- Simple Process Card -->
      <div class="group feature-card">
        <div class="relative overflow-hidden bg-gradient-to-br from-[#2D1B69]/50 to-[#1A103C]/50 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 border border-[#9D6FFF]/20 backdrop-blur-sm">
          <div class="absolute inset-0 bg-gradient-to-br from-[#9D6FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative z-10">
            <div class="text-[#9D6FFF] text-3xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <img src="../../assets/user.svg" alt="user" class="w-8 mx-auto"/>
            </div>
            <h3 class="text-lg font-semibold mb-3 group-hover:text-[#9D6FFF] transition-colors text-center">Simple Process</h3>
            <p class="text-[#B4A5FF] text-center text-sm group-hover:text-white transition-colors">
              Quick and intuitive process - just paste and click
            </p>
          </div>
        </div>
      </div>

      <!-- Link Processing Card -->
      <div class="group feature-card">
        <div class="relative overflow-hidden bg-gradient-to-br from-[#2D1B69]/50 to-[#1A103C]/50 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 border border-[#9D6FFF]/20 backdrop-blur-sm">
          <div class="absolute inset-0 bg-gradient-to-br from-[#9D6FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative z-10">
            <div class="text-[#9D6FFF] text-3xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <img src="../../assets/link.svg" alt="link" class="w-8 mx-auto"/>
            </div>
            <h3 class="text-lg font-semibold mb-3 group-hover:text-[#9D6FFF] transition-colors text-center">Link Processing</h3>
            <p class="text-[#B4A5FF] text-center text-sm group-hover:text-white transition-colors">
              Handles any URL length with smart compression
            </p>
          </div>
        </div>
      </div>

      <!-- Protected Card -->
      <div class="group feature-card">
        <div class="relative overflow-hidden bg-gradient-to-br from-[#2D1B69]/50 to-[#1A103C]/50 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 border border-[#9D6FFF]/20 backdrop-blur-sm">
          <div class="absolute inset-0 bg-gradient-to-br from-[#9D6FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative z-10">
            <div class="text-[#9D6FFF] text-3xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <img src="../../assets/security.svg" alt="security" class="w-8 mx-auto"/>
            </div>
            <h3 class="text-lg font-semibold mb-3 group-hover:text-[#9D6FFF] transition-colors text-center">Protected</h3>
            <p class="text-[#B4A5FF] text-center text-sm group-hover:text-white transition-colors">
              Enterprise-grade security with full encryption
            </p>
          </div>
        </div>
      </div>

      <!-- Dependable Card -->
      <div class="group feature-card">
        <div class="relative overflow-hidden bg-gradient-to-br from-[#2D1B69]/50 to-[#1A103C]/50 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 border border-[#9D6FFF]/20 backdrop-blur-sm">
          <div class="absolute inset-0 bg-gradient-to-br from-[#9D6FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative z-10">
            <div class="text-[#9D6FFF] text-3xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <img src="../../assets/bussiness.svg" alt="business" class="w-7 mx-auto"/>
            </div>
            <h3 class="text-lg font-semibold mb-3 group-hover:text-[#9D6FFF] transition-colors text-center">Dependable</h3>
            <p class="text-[#B4A5FF] text-center text-sm group-hover:text-white transition-colors">
              99.9% uptime guarantee for all links, ensuring access anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features"
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
.feature-card:nth-child(4) { animation-delay: 0.4s; }

/* Optional: Add hover animation for the images */
.feature-card:hover img {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>