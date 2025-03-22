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

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-6">
                    <a 
                        href="#features" 
                        @click.prevent="scrollToSection('features')"
                        class="text-[#B4A5FF] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#9D6FFF]/20 focus:ring-offset-2 focus:ring-offset-[#1A103C] rounded-lg px-3 py-1"
                    >
                        Features
                    </a>
                    <a 
                        href="#hero" 
                        @click.prevent="scrollToSection('hero')"
                        class="bg-[#9D6FFF] text-white px-6 py-2 rounded-full hover:bg-[#8A5AFF] transition-all duration-200 shadow-lg hover:shadow-[#9D6FFF]/25 focus:outline-none focus:ring-2 focus:ring-[#9D6FFF]/50"
                    >
                        Get Started
                    </a>
                    <a 
                        href="https://buymeacoffee.com/dinaiyanu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 bg-[#FFDD00] text-gray-900 px-4 py-2 rounded-full hover:bg-[#FFED4A] transition-all duration-200 shadow-lg hover:shadow-[#FFDD00]/25 focus:outline-none focus:ring-2 focus:ring-[#FFDD00]/50"
                    >
                        <svg class="w-5 h-5" viewBox="0 0 884 1279" fill="none">
                            <path d="M791.109 297.518L790.231 297.002L788.201 296.383C789.018 297.072 790.04 297.472 791.109 297.518Z" fill="#0D0C22"/>
                            <path d="M803.896 388.891L802.916 389.166L803.896 388.891Z" fill="#0D0C22"/>
                            <path d="M791.484 297.377C791.359 297.361 791.237 297.332 791.118 297.29C791.111 297.371 791.111 297.453 791.118 297.534C791.252 297.516 791.379 297.462 791.484 297.377Z" fill="#0D0C22"/>
                            <path d="M791.113 297.529H791.244V297.447L791.113 297.529Z" fill="#0D0C22"/>
                            <path d="M803.111 388.726L804.591 387.883L805.142 387.573L805.641 387.04C804.702 387.444 803.846 388.016 803.111 388.726Z" fill="#0D0C22"/>
                            <path d="M793.669 299.515L792.223 298.138L791.243 297.605C791.77 298.535 792.641 299.221 793.669 299.515Z" fill="#0D0C22"/>
                            <path d="M430.019 1186.18C428.864 1186.68 427.852 1187.46 427.076 1188.45L427.988 1187.87C428.608 1187.3 429.485 1186.63 430.019 1186.18Z" fill="#0D0C22"/>
                            <path d="M641.187 1144.63C641.187 1143.33 640.551 1143.57 640.705 1148.21C640.705 1147.84 640.86 1147.46 640.929 1147.1C641.015 1146.27 641.084 1145.46 641.187 1144.63Z" fill="#0D0C22"/>
                            <path d="M619.284 1186.18C618.129 1186.68 617.118 1187.46 616.342 1188.45L617.254 1187.87C617.873 1187.3 618.751 1186.63 619.284 1186.18Z" fill="#0D0C22"/>
                            <path d="M281.304 1196.06C280.427 1195.3 279.354 1194.8 278.207 1194.61C279.136 1195.06 280.065 1195.51 280.684 1195.85L281.304 1196.06Z" fill="#0D0C22"/>
                            <path d="M247.841 1164.01C247.704 1162.66 247.288 1161.35 246.619 1160.16C247.093 1161.39 247.489 1162.66 247.806 1163.94L247.841 1164.01Z" fill="#0D0C22"/>
                            <path d="M472.623 590.836C426.682 610.503 374.546 632.802 306.976 632.802C278.71 632.746 250.58 628.868 223.353 621.274L270.086 1101.08C271.74 1121.13 280.876 1139.83 295.679 1153.46C310.482 1167.09 329.87 1174.65 349.992 1174.65C349.992 1174.65 416.254 1178.09 438.365 1178.09C462.161 1178.09 533.516 1174.65 533.516 1174.65C553.636 1174.65 573.019 1167.08 587.819 1153.45C602.619 1139.82 611.752 1121.13 613.406 1101.08L663.459 570.876C641.091 563.237 618.516 558.161 593.068 558.161C549.054 558.144 513.591 573.303 472.623 590.836Z" fill="#FFDD00"/>
                            <path d="M78.6885 386.132L79.4799 386.872L79.9962 387.182C79.5987 386.787 79.1603 386.435 78.6885 386.132Z" fill="#0D0C22"/>
                            <path d="M879.567 341.849L872.53 306.352C866.215 274.503 851.882 244.409 819.19 232.898C808.711 229.215 796.821 227.633 788.786 220.01C780.751 212.388 778.376 200.55 776.518 189.572C773.076 169.423 769.842 149.257 766.314 129.143C763.269 111.85 760.86 92.4243 752.928 76.56C742.604 55.2584 721.182 42.8009 699.88 34.559C688.965 30.4844 677.826 27.0375 666.517 24.2352C613.297 10.1947 557.342 5.03277 502.591 2.09047C436.875 -1.53577 370.983 -0.443234 305.422 5.35968C256.625 9.79894 205.229 15.1674 158.858 32.0469C141.91 38.224 124.445 45.6399 111.558 58.7341C95.7448 74.8221 90.5829 99.7026 102.128 119.765C110.336 134.012 124.239 144.078 138.985 150.737C158.192 159.317 178.251 165.846 198.829 170.215C256.126 182.879 315.471 187.851 374.007 189.968C438.887 192.586 503.87 190.464 568.44 183.618C584.408 181.863 600.347 179.758 616.257 177.304C634.995 174.43 647.022 149.928 641.499 132.859C634.891 112.453 617.134 104.538 597.055 107.618C594.095 108.082 591.153 108.512 588.193 108.942L586.06 109.252C579.257 110.113 572.455 110.915 565.653 111.661C551.601 113.175 537.515 114.414 523.394 115.378C491.768 117.58 460.057 118.595 428.363 118.647C397.219 118.647 366.058 117.769 334.983 115.722C320.805 114.793 306.661 113.611 292.552 112.177C286.134 111.506 279.733 110.801 273.333 110.009C272.241 109.878 271.149 109.748 270.058 109.617L265.683 108.96C259.283 108.168 252.868 107.304 246.47 106.367C219.935 102.804 193.279 98.1808 167.597 91.4414C161.695 89.9765 155.642 88.4364 149.89 86.5125C146.575 85.4245 143.261 84.3365 139.946 83.2485C134.667 81.6401 129.387 79.9665 124.107 78.2276C122.741 77.7499 121.374 77.2722 120.007 76.7945C095.469 69.5339 75.5198 57.8577 86.3919 31.2117C95.396 9.55728 127.789 -0.225541 149.89 0.00367279C151.089 0.0189508 152.287 0.0342288 153.486 0.0342288C156.581 0.0595069 159.676 0.0847849 162.771 0.135345L166.492 0.193188C170.214 0.274874 173.935 0.356559 177.657 0.457527C185.101 0.649463 192.534 0.942217 199.968 1.30158C207.402 1.66095 214.835 2.10461 222.269 2.59256C229.703 3.08052 237.136 3.63407 244.57 4.25763C251.295 4.83168 258.019 5.45523 264.744 6.13737C305.608 10.1947 346.104 16.3469 386.336 24.5647C434.079 34.3316 482.711 46.8168 527.062 64.6708C560.254 77.7651 593.445 92.6498 618.679 117.581C628.103 126.8 635.249 137.614 639.612 149.757C644.029 162.04 645.532 175.138 644.011 188.055C642.995 197.049 640.755 205.873 637.349 214.313C634.351 221.883 630.227 229.025 625.126 235.496C608.914 253.754 587.999 267.102 564.944 274.739C558.607 277.061 552.163 279.08 545.623 280.792C541.633 281.865 537.627 282.855 533.606 283.762C526.719 285.337 519.775 286.711 512.818 288.078C508.387 289.005 503.957 289.898 499.526 290.757C487.23 293.21 474.832 295.273 462.371 297.033C337.075 312.799 208.725 304.001 85.0359 270.937C81.0055 270.078 76.9751 269.186 72.9447 268.243C57.3658 264.365 42.7238 257.802 29.7359 248.917C16.748 240.032 5.69238 228.981 -3.0104 216.283C-11.7132 203.585 -18.0086 189.421 -21.6029 174.49C-25.1972 159.559 -26.0453 144.114 -24.1126 128.916C-22.1799 113.719 -17.4995 98.9939 -10.3033 85.4245C-3.10716 71.8551 6.44193 59.6565 17.9177 49.3989C29.3935 39.1413 42.6071 30.9825 56.9935 25.2941C88.8741 13.0272 122.53 6.30798 156.666 5.39468C216.635 3.85133 276.655 7.51396 336.067 16.3469C371.647 21.7946 407.061 28.6865 442.239 36.9989C506.775 51.9166 572.831 69.9712 632.361 98.9024C672.521 118.151 714.733 142.365 736.155 183.618C745.874 204.117 750.607 226.574 757.072 248.249C761.419 263.04 766.083 277.831 771.734 292.087C775.517 301.812 780.398 311.056 786.236 319.606C791.411 327.066 797.905 333.314 805.379 338.064C816.007 345.033 828.259 348.333 840.613 347.577C859.756 347.577 877.401 340.339 893.732 331.198C901.342 326.893 908.726 322.176 915.869 317.06C917.685 315.625 919.362 313.722 920.775 311.751C922.188 309.781 923.279 307.615 924.032 305.566C924.779 303.458 925.134 301.238 925.079 299.009C925.023 296.779 924.559 294.578 923.707 292.509L879.567 341.849Z" fill="#0D0C22"/>
                        </svg>
                        Buy me a coffee
                    </a>
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
                        <a 
                            href="#features"
                            @click="scrollToSection('features')"
                            class="text-[#B4A5FF] hover:text-white transition-colors duration-200 w-full text-center py-2"
                        >
                            Features
                        </a>
                        <a 
                            href="#hero"
                            @click="scrollToSection('hero')"
                            class="bg-[#9D6FFF] text-white px-6 py-2 rounded-full hover:bg-[#8A5AFF] transition-all duration-200 w-full max-w-[200px] text-center"
                        >
                            Get Started
                        </a>
                        <a 
                            href="https://www.buymeacoffee.com/your-username" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="flex items-center justify-center gap-2 bg-[#FFDD00] text-gray-900 px-4 py-2 rounded-full hover:bg-[#FFED4A] transition-all duration-200 w-full max-w-[200px]"
                        >
                            <svg class="w-5 h-5" viewBox="0 0 884 1279" fill="none">
                                <!-- Buy Me a Coffee SVG path (same as above) -->
                            </svg>
                            Buy me a coffee
                        </a>
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
            document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
        },
        closeMenuOnResize() {
            if (window.innerWidth >= 768 && this.isMenuOpen) {
                this.isMenuOpen = false;
                document.body.style.overflow = '';
            }
        },
        scrollToSection(sectionId) {
            this.isMenuOpen = false;
            document.body.style.overflow = '';
            
            const element = document.getElementById(sectionId);
            if (element) {
                const offset = 80; // Height of the fixed navbar
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
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