<template>
    <div class="bg-gradient-to-r from-[#1A103C]/90 to-[#2D1B69]/90 backdrop-blur-md border-b border-white/10 fixed top-0 w-full z-50">
        <nav class="px-4 py-3 md:py-4">
            <div class="container mx-auto flex justify-between items-center">
                <!-- Logo Section -->
                <div class="flex items-center space-x-2">
                    <svg class="w-6 h-6 text-[#9D6FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span class="text-white text-lg md:text-xl font-bold tracking-wide">LinkMagic</span>
                </div>

                <!-- Mobile Menu Button -->
                <button 
                    @click="toggleMenu" 
                    class="md:hidden text-white hover:text-gray-300 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg 
                        :class="['w-6 h-6 transition-transform duration-200', isMenuOpen ? 'rotate-90' : '']"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            :d="isMenuOpen 
                                ? 'M6 18L18 6M6 6l12 12' 
                                : 'M4 6h16M4 12h16M4 18h16'"
                        />
                    </svg>
                </button>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-6">
                    <button class="text-[#B4A5FF] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#9D6FFF]/20 focus:ring-offset-2 focus:ring-offset-[#1A103C] rounded-lg px-3 py-1">
                        Features
                    </button>
                    <button class="bg-[#9D6FFF] text-white px-6 py-2 rounded-full hover:bg-[#8A5AFF] transition-all duration-200 shadow-lg hover:shadow-[#9D6FFF]/25 focus:outline-none focus:ring-2 focus:ring-[#9D6FFF]/50">
                        Get Started
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
            >
                <div 
                    v-if="isMenuOpen" 
                    class="md:hidden mt-4 pb-4"
                >
                    <div class="flex flex-col space-y-4 items-center">
                        <button class="text-gray-300 hover:text-white transition-colors duration-200 w-full text-center py-2 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg">
                            Features
                        </button>
                        <button class="bg-slate-700 text-gray-100 px-6 py-2 rounded-full hover:bg-slate-600 transition-all duration-200 shadow-lg hover:shadow-xl w-full max-w-[200px] focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-purple-900">
                            Get Started
                        </button>
                    </div>
                </div>
            </transition>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            // Prevent scrolling when menu is open
            document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
        },
        closeMenuOnResize() {
            if (window.innerWidth >= 768 && this.isMenuOpen) {
                this.isMenuOpen = false;
                document.body.style.overflow = '';
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.closeMenuOnResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.closeMenuOnResize);
        document.body.style.overflow = '';
    }
}
</script>