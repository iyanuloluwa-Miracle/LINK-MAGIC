<template>
  <footer class="text-white pt-12 pb-8 relative">
    <!-- Profile Section -->
    <div class="container mx-auto px-4 mb-12">
      <div class="max-w-4xl mx-auto bg-gradient-to-br from-[#2D1B69]/50 to-[#1A103C]/50 rounded-2xl p-6 backdrop-blur-sm border border-[#9D6FFF]/20">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <!-- Profile Image -->
          <div class="relative">
            <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-[#9D6FFF]/30 shadow-lg shadow-[#9D6FFF]/20">
              <img 
                src="../../assets/creator.svg" 
                alt="Dina Iyanuloluwa" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="absolute -bottom-2 -right-2 bg-[#9D6FFF] rounded-full p-2">
              <span class="text-xl">✨</span>
            </div>
          </div>
          
          <!-- Profile Info -->
          <div class="text-center md:text-left">
            <h2 class="text-2xl font-bold mb-2 bg-gradient-to-r from-[#9D6FFF] to-[#B4A5FF] bg-clip-text text-transparent">
              Dina Iyanuloluwa
            </h2>
            <p class="text-[#B4A5FF] mb-4">
              Software Engineer & Creator of Link Magic
            </p>
            <div class="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://x.com/Dina_iyanex" 
                target="_blank" 
                rel="noopener noreferrer"
                class="bg-[#2D1B69] hover:bg-[#3B238C] px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 border border-[#9D6FFF]/20"
              >
                <span>🐦</span> Follow on X
              </a>
              <a 
                href="https://github.com/iyanuloluwa-Miracle" 
                target="_blank" 
                rel="noopener noreferrer"
                class="bg-[#2D1B69] hover:bg-[#3B238C] px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 border border-[#9D6FFF]/20"
              >
                <span>👨‍💻</span> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
        </div>
        
    <!-- Footer Content -->
    <div class="container mx-auto px-4 text-center">
      <div class="mb-6">
        <a 
          href="https://github.com/iyanuloluwa-Miracle/LINK-MAGIC" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block bg-[#9D6FFF] hover:bg-[#8A5AFF] text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#9D6FFF]/25 mb-6"
        >
          ⭐ Star the Repo
        </a>
      </div>

      <p class="mb-4 text-[#B4A5FF]">
        Follow our updates 📢 on 
        <a 
          href="https://twitter.com/linkmagic" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-[#9D6FFF] hover:text-[#8A5AFF] transition-colors"
        >
          X
        </a>
      </p>

      <p class="text-sm text-[#B4A5FF]/70">
        © 2025 Link Magic | All rights reserved.
      </p>
    </div>

    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-20 left-0 w-72 h-72 bg-[#9D6FFF]/5 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-20 right-0 w-96 h-96 bg-[#9D6FFF]/5 rounded-full blur-3xl"></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
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
</style>