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
  </section>
</template>
