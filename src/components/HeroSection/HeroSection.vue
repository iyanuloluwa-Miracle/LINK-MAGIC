<template>
  <section class="container mx-auto px-4 py-20">
    <div class="text-center mb-16">
      <h1 class="text-5xl font-bold text-white mb-4">Transform Your Links</h1>
      <p class="text-gray-300 text-xl">
        Create short, memorable links in seconds
      </p>
    </div>

    <div class="max-w-3xl mx-auto relative">
      <div class="backdrop-blur-lg bg-white/10 rounded-2xl p-2 shadow-xl">
        <div class="flex">
          <input
            v-model="url"
            type="url"
            placeholder="Paste your long URL here"
            class="flex-1 bg-transparent text-white placeholder-gray-400 px-4 py-3 focus:outline-none"
          />
          <button
            @click="shortenUrl"
            class="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors ml-2 flex items-center"
          >
            Shorten
            <svg
              class="w-5 h-5 ml-2"
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
        </div>
      </div>

      <!-- Decorative Circles as SVG -->
      <svg
        class="absolute -left-24 -top-24 opacity-30"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="#7B61FF" />
      </svg>
      <svg
        class="absolute -right-24 -bottom-24 opacity-30"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="#007BFF" />
      </svg>
    </div>

    <div class="flex items-center justify-center p-9">
      <div
        class="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-md w-full"
      >
        <!-- Success Header -->
        <div class="flex items-center gap-2 mb-6">
          <h2 class="text-white text-xl font-semibold">
            URL Shortened Successfully
          </h2>
          <span class="text-xl">✨</span>
        </div>

        <!-- Original URL Section -->
        <div class="mb-6">
          <label class="text-purple-200 text-sm block mb-2">Original URL</label>
          <div class="bg-purple-900/50 rounded-lg p-3">
            <p class="text-purple-300 text-sm truncate">
              {{ originalUrl }}
            </p>
          </div>
        </div>

        <!-- Shortened URL Section -->
        <div class="mb-6">
          <label class="text-purple-200 text-sm block mb-2"
            >Shortened URL</label
          >
          <div
            class="bg-purple-900/50 rounded-lg p-3 flex items-center justify-between"
          >
            <span class="text-purple-300">{{ shortenedUrl }}</span>
            <button
              @click="copyToClipboard"
              class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-1 rounded-lg transition-colors"
            >
              Copy
            </button>
          </div>
        </div>

        <!-- Status -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-green-400 rounded-full"></div>
            <span class="text-purple-200 text-sm"
              >Active and ready to share</span
            >
          </div>
          <span class="text-purple-300 text-sm">Valid for 30 days</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const originalUrl = ref(
  "https://very-long-example-url.com/withmanyparameters..."
);
const shortenedUrl = ref("linkmagic.io/x8Yk9");

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(shortenedUrl.value);
    // You could add a toast notification here
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};
</script>
