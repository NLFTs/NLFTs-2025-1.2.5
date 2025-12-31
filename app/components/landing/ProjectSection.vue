<template>
  <section ref="projectSection" class="relative py-40 px-6 overflow-hidden">
    <div class="container mx-auto mb-32">
      <div ref="headerText" class="max-w-3xl">
        <span class="text-[#38bdf8] font-mono tracking-[0.5em] block mb-4">SELECTED ARTIFACTS</span>
        <h2 class="text-5xl md:text-7xl font-bold text-white leading-none uppercase">
          Proven <span class="text-transparent stroke-text">Concepts</span> <br/>
          Into Reality.
        </h2>
      </div>
    </div>

    <div class="container mx-auto space-y-64">
      <div class="project-item group grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 overflow-hidden rounded-2xl aspect-video bg-slate-900 relative">
          <div class="project-image absolute inset-0 bg-gradient-to-tr from-sky-900/40 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop" 
            alt="Dabyan UI" 
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
          />
        </div>
        <div class="lg:col-span-5 project-info">
          <span class="text-[#38bdf8] font-bold text-sm mb-4 block">01 / ECOSYSTEM</span>
          <h3 class="text-4xl md:text-5xl font-bold text-white mb-6">Dabyan Engine</h3>
          <p class="text-slate-400 text-lg leading-relaxed mb-8">
            Infrastruktur version control revolusioner yang bekerja secara lokal. Memberikan privasi total tanpa mengorbankan kolaborasi tim. Didesain untuk developer yang menghargai aset digital mereka.
          </p>
          <div class="flex gap-4">
            <span class="px-4 py-1 border border-white/10 text-xs text-slate-300 rounded-full">Rust</span>
            <span class="px-4 py-1 border border-white/10 text-xs text-slate-300 rounded-full">Vue 3</span>
            <span class="px-4 py-1 border border-white/10 text-xs text-slate-300 rounded-full">System Architecture</span>
          </div>
        </div>
      </div>

      <div class="project-item group grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5 order-2 lg:order-1 project-info lg:text-right">
          <span class="text-[#38bdf8] font-bold text-sm mb-4 block">02 / PERFORMANCE</span>
          <h3 class="text-4xl md:text-5xl font-bold text-white mb-6">MyFTs Bundler</h3>
          <p class="text-slate-400 text-lg leading-relaxed mb-8">
            Generasi baru dari build tools. Fokus pada eliminasi *overhead* sintaks dan optimasi aset otomatis yang membuat website Anda 5x lebih cepat dari standar industri.
          </p>
          <div class="flex gap-4 lg:justify-end">
            <span class="px-4 py-1 border border-white/10 text-xs text-slate-300 rounded-full">Go</span>
            <span class="px-4 py-1 border border-white/10 text-xs text-slate-300 rounded-full">WebAssembly</span>
            <span class="px-4 py-1 border border-white/10 text-xs text-slate-300 rounded-full">Vite Plugin</span>
          </div>
        </div>
        <div class="lg:col-span-7 order-1 lg:order-2 overflow-hidden rounded-2xl aspect-video bg-slate-900 relative">
          <div class="project-image absolute inset-0 bg-gradient-to-tl from-blue-900/40 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="MyFTs Bundler" 
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectSection = ref(null);
const headerText = ref(null);

onMounted(() => {
  // 1. Header Reveal
  gsap.from(headerText.value, {
    scrollTrigger: {
      trigger: headerText.value,
      start: "top 80%",
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
  });

  // 2. Parallax & Reveal for Project Items
  const projects = gsap.utils.toArray(".project-item");
  
  projects.forEach((item) => {
    const image = item.querySelector("img");
    const info = item.querySelector(".project-info");

    // Efek Image Parallax
    gsap.to(image, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Efek Text Slide-in
    gsap.from(info, {
      scrollTrigger: {
        trigger: item,
        start: "top 70%",
      },
      x: info.classList.contains('lg:text-right') ? 100 : -100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out"
    });
  });
});
</script>

<style scoped>
.stroke-text {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
}

.project-item {
  will-change: transform;
}

/* Transisi halus untuk gambar */
img {
  transition: filter 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>