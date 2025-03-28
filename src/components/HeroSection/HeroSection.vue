<template>
  <section id="hero" class="container mx-auto px-4 pt-24 md:pt-32 pb-16">
    <!-- Hero Text -->
    <div class="text-center mb-12 md:mb-16">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
        Transform Your Links
      </h1>
      <p class="text-[#B4A5FF] text-lg md:text-xl max-w-2xl mx-auto">
        Create short, memorable links in seconds
      </p>
    </div>


    

    

    <!-- URL Input Section -->
    <div class="max-w-3xl mx-auto relative z-10">
      <div class="backdrop-blur-lg bg-[#2D1B69]/30 rounded-2xl p-2 shadow-xl border border-[#9D6FFF]/20">
        <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-2">
          <input
            v-model="url"
            type="url"
            placeholder="Paste your long URL here"
            class="flex-1 bg-[#1A103C]/50 text-white placeholder-[#B4A5FF]/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D6FFF]/50 rounded-xl border border-[#9D6FFF]/20"
            required
            aria-label="URL to shorten"
          />
          <button
            type="submit"
            :disabled="urlStore.isLoading"
            class="bg-[#9D6FFF] text-white px-6 sm:px-8 py-3 rounded-xl hover:bg-[#8A5AFF] transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#9D6FFF]/50 shadow-lg hover:shadow-[#9D6FFF]/25"
          >
            <span>{{ urlStore.isLoading ? 'Shortening...' : 'Shorten' }}</span>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>

    <!-- Results Card -->
    <div class="flex items-center justify-center p-6 md:p-9 mt-8">
      <div
        v-if="urlStore.shortenedUrl"
        class="bg-[#2D1B69]/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 max-w-md w-full shadow-lg border border-[#9D6FFF]/20"
      >
        <!-- Success Header -->
        <div class="flex items-center gap-2 mb-4 md:mb-6">
          <h2 class="text-white text-lg md:text-xl font-semibold">
            URL Shortened Successfully
          </h2>
          <span class="text-xl" aria-hidden="true">✨</span>
        </div>

        <!-- Original URL Section -->
        <div class="mb-4 md:mb-6">
          <label for="original-url" class="text-purple-200 text-sm block mb-2">Original URL</label>
          <div class="bg-purple-900/50 rounded-lg p-3">
            <p id="original-url" class="text-purple-300 text-sm truncate">
              {{ urlStore.originalUrl }}
            </p>
          </div>
        </div>

        <!-- Shortened URL Section -->
        <div class="mb-4">
          <label for="shortened-url" class="text-purple-200 text-sm block mb-2">Shortened URL</label>
          <div
            class="bg-purple-900/50 rounded-lg p-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:justify-between"
          >
            <span id="shortened-url" class="text-purple-300 break-all">
              {{ urlStore.shortenedUrl }}
            </span>
            <button
              @click="urlStore.copyToClipboard"
              class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-1.5 rounded-lg transition-colors w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-purple-400/50"
            >
              {{ urlStore.copied ? 'Copied!' : 'Copy' }}
            </button>
          </div>
        </div>

        <div v-if="urlStore.error" class="text-red-400 text-sm mt-4">
          {{ urlStore.error }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useUrlStore } from '../../stores/urlStore';

const urlStore = useUrlStore();
const url = ref('');

const handleSubmit = () => {
  urlStore.shortenUrl(url.value);
};
</script>
