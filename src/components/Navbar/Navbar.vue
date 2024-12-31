<template>
    <div class="bg-gradient-to-r from-purple-900 to-purple-800 border-b border-white/20">
        <nav class="px-4 py-3 md:py-4">
            <div class="container mx-auto flex justify-between items-center">
                <!-- Logo Section -->
                <div class="flex items-center space-x-2">
                    <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span class="text-white text-lg md:text-xl font-bold">LinkMagic</span>
                </div>

                <!-- Mobile Menu Button -->
                <button 
                    @click="isMenuOpen = !isMenuOpen" 
                    class="md:hidden text-white hover:text-gray-300"
                >
                    <svg 
                        v-if="!isMenuOpen" 
                        class="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg 
                        v-else 
                        class="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-6">
                    <button class="text-gray-300 hover:text-white transition-colors duration-200">
                        Features
                    </button>
                    <button class="bg-slate-700 text-gray-100 px-6 py-2 rounded-full hover:bg-slate-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                        Get Started
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div 
                v-if="isMenuOpen" 
                class="md:hidden mt-4 pb-4"
            >
                <div class="flex flex-col space-y-4 items-center">
                    <button class="text-gray-300 hover:text-white transition-colors duration-200 w-full text-center py-2">
                        Features
                    </button>
                    <button class="bg-slate-700 text-gray-100 px-6 py-2 rounded-full hover:bg-slate-600 transition-all duration-200 shadow-lg hover:shadow-xl w-full max-w-[200px]">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false
        }
    }
}
</script>