<script>
    import { onMount } from 'svelte';
    import { Linkedin, Instagram, Facebook, Github, Minus } from 'lucide-svelte';
    import foto from '$lib/assets/foto.png';

    let isLoaded = false;
    let showInitialName = true;
    let showContent = false;
    let textContent;
    let imageContent;
    let typedText = '';
    const fullText = 'ERGIT';
    let currentIndex = 0;

    onMount(() => {
        // Typing animation
        const typingInterval = setInterval(() => {
            if (currentIndex < fullText.length) {
                typedText += fullText[currentIndex];
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    showInitialName = false;
                    setTimeout(() => {
                        showContent = true;
                        isLoaded = true;
                    }, 200);
                }, 2000);
            }
        }, 200);
    });
</script>

<div class="relative min-h-screen bg-[#1f1f1f] overflow-hidden">
    <!-- Initial Name Animation -->
    {#if showInitialName}
        <div class="fixed inset-0 flex items-center justify-center z-[100] initial-name bg-[#1f1f1f]">
            <div class="relative">
                <h1 class="text-[150px] sm:text-[200px] md:text-[250px] font-bold tracking-tighter typing-animation">
                    <span class="text-gradient-white">{typedText}</span>
                    <span class="cursor">|</span>
                </h1>
                <div class="absolute -inset-4 bg-orange-500/5 blur-3xl rounded-full"></div>
            </div>
        </div>
    {/if}

    <!-- Main Content -->
    <div class="transition-opacity duration-300" class:opacity-0={!showContent}>
        <!-- Background gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent pointer-events-none"></div>

        <main class="relative min-h-screen flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-20 gap-6 md:gap-8 lg:gap-9 overflow-hidden">
            <!-- Social Links with Vertical Line -->
            <div class="relative z-10 hidden lg:flex flex-col items-center">
                <div class="w-[1px] h-32 bg-gradient-to-b from-transparent via-orange-500/50 to-transparent mb-6"></div>
                <div class="flex flex-col gap-6">
                    <a 
                        href="/" 
                        class="transform hover:scale-110 hover:-translate-x-1 transition-all duration-300 text-white hover:text-orange-500"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a 
                        href="/" 
                        class="transform hover:scale-110 hover:-translate-x-1 transition-all duration-300 text-white hover:text-orange-500"
                    >
                        <Instagram size={24} />
                    </a>
                    <a 
                        href="/" 
                        class="transform hover:scale-110 hover:-translate-x-1 transition-all duration-300 text-white hover:text-orange-500"
                    >
                        <Facebook size={24} />
                    </a>
                    <a 
                        href="/" 
                        class="transform hover:scale-110 hover:-translate-x-1 transition-all duration-300 text-white hover:text-orange-500"
                    >
                        <Github size={24} />
                    </a>
                </div>
                <div class="w-[1px] h-32 bg-gradient-to-b from-transparent via-orange-500/50 to-transparent mt-6"></div>
            </div>

            <!-- Main Content -->
            <div class="flex-1 text-white z-10 text-center lg:text-left pt-16 sm:pt-20 lg:pt-0" class:fade-in={isLoaded} bind:this={textContent}>
                <div class="slide-up">
                    <p class="flex items-center justify-center lg:justify-start gap-2 text-base sm:text-lg font-light mb-4">
                        <Minus size="24" class="text-orange-500"/> 
                        <span class="text-gray-400">Hello there, I am</span>
                    </p>
                </div>
                
                <div class="slide-up" style="animation-delay: 200ms">
                    <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-[150px] font-bold leading-none tracking-tighter mb-2">
                        <span class="text-gradient-white">Ergit</span>
                    </h1>
                </div>
                
                <div class="slide-up" style="animation-delay: 400ms">
                    <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-[150px] font-bold leading-none tracking-tighter">
                        <span class="text-gradient-orange">Beqiri</span>
                    </h1>
                </div>

                <div class="slide-up" style="animation-delay: 600ms">
                    <p class="text-lg sm:text-xl text-gray-400 mt-4 sm:mt-6">Full stack developer with a deep connection with Svelte</p>
                </div>

                <div class="slide-up" style="animation-delay: 800ms">
                    <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                        <a 
                            href="/contact" 
                            class="group relative px-6 py-3 bg-white text-black rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
                        >
                            <span class="relative z-10 group-hover:text-white transition-colors duration-300">Hire me</span>
                            <div class="absolute inset-0 bg-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </a>
                        <a 
                            href="/portfolio" 
                            class="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                            Portfolio
                        </a>
                    </div>
                </div>
            </div>

            <!-- Image Section -->
            <div 
                class="relative flex-1 flex justify-center items-center z-10 fade-in-delay mt-8 lg:mt-0" 
                style="animation-delay: 1000ms"
                bind:this={imageContent}
            >
                <div class="relative group w-full max-w-sm sm:max-w-md md:max-w-lg">
                    <!-- Main Image Container -->
                    <div class="relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm">
                        <!-- Image -->
                        <img 
                            src={foto} 
                            alt="Profile" 
                            class="relative z-10 w-full h-full object-cover transform transition-all duration-500 group-hover:scale-[1.02]"
                            style="opacity: 0.9"
                        >
                        
                        <!-- Subtle Overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <!-- Border Effect -->
                        <div class="absolute inset-0 border border-orange-500/10 rounded-2xl"></div>
                    </div>

                    <!-- Background Effects -->
                    <div class="absolute -inset-4 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent rounded-3xl blur-2xl group-hover:from-orange-500/10 transition-all duration-500"></div>
                    
                    <!-- Decorative Elements -->
                    <div class="absolute -top-2 -right-2 w-16 sm:w-24 h-16 sm:h-24 bg-orange-500/5 rounded-full blur-xl"></div>
                    <div class="absolute -bottom-2 -left-2 w-20 sm:w-32 h-20 sm:h-32 bg-orange-500/5 rounded-full blur-xl"></div>
                </div>
            </div>

            <!-- Mobile Social Links -->
            <div class="flex lg:hidden justify-center gap-6 mt-8">
                <a href="/" class="transform hover:scale-110 transition-all duration-300 text-white hover:text-orange-500">
                    <Linkedin size={24} />
                </a>
                <a href="/" class="transform hover:scale-110 transition-all duration-300 text-white hover:text-orange-500">
                    <Instagram size={24} />
                </a>
                <a href="/" class="transform hover:scale-110 transition-all duration-300 text-white hover:text-orange-500">
                    <Facebook size={24} />
                </a>
                <a href="/" class="transform hover:scale-110 transition-all duration-300 text-white hover:text-orange-500">
                    <Github size={24} />
                </a>
            </div>
        </main>
    </div>
</div>

<style>
    .text-gradient-white {
        background: linear-gradient(to right, #ffffff, #a3a3a3);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    .text-gradient-orange {
        background: linear-gradient(to right, #f97316, #ea580c);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    .fade-in {
        opacity: 0;
        animation: fadeIn 1s ease forwards;
    }

    .fade-in-delay {
        opacity: 0;
        animation: fadeIn 1s ease forwards;
    }

    .slide-up {
        opacity: 0;
        transform: translateY(20px);
        animation: slideUp 0.8s ease forwards;
    }

    .initial-name {
        animation: fadeOut 1.5s ease forwards;
    }

    .typing-animation {
        position: relative;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
    }

    .cursor {
        display: inline-block;
        width: 4px;
        margin-left: 2px;
        animation: blink 1s step-end infinite;
        background: linear-gradient(to bottom, #ffffff, #a3a3a3);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.5;
            transform: scale(1.1);
        }
        to {
            opacity: 0;
            transform: scale(1.2);
        }
    }

    @keyframes blink {
        from, to {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
</style>
  