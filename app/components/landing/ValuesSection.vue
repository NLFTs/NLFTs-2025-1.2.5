<template>
  <section ref="scrollContainer" class="relative overflow-hidden bg-transparent">
    <div ref="pinWrapper" class="flex h-screen w-[300vw] items-center">
      
      <div class="slide w-screen h-full flex flex-col justify-center px-6 md:px-24">
        <div class="max-w-4xl">
          <span class="text-[#38bdf8] font-mono mb-4 block tracking-[0.5em]">— PHASE 01</span>
          <h2 class="text-5xl md:text-8xl font-black text-white leading-none uppercase mb-8">
            Kenapa Harus <br/> <span class="text-transparent stroke-text">NLFTs?.</span>
          </h2>
          <p class="text-slate-400 text-xl md:text-2xl max-w-2xl leading-relaxed">
            Kami bukan hanya sekadar perusahaan, tetapi ekosistem yang didukung oleh Member Aktif dan Mentor Hebat yang berdedikasi tinggi terhadap inovasi dan kualitas. Komitmen kami adalah memberikan ide teknologi mutakhir yang mendorong pertumbuhan bisnis dan visi klien.
          </p>
        </div>
      </div>

      <div class="slide w-screen h-full flex flex-col justify-center px-6 md:px-24 bg-sky-950/10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-[#38bdf8] font-mono mb-4 block tracking-[0.5em]">— PHASE 02</span>
            <h2 class="text-5xl md:text-7xl font-bold text-white mb-6">Jaminan <br/> Untuk Developer.</h2>
            <p class="text-slate-400 text-lg">
              Kami percaya pada Seorang Developer kecil yang memiliki visi besar adalah mereka yang dapat membawa nama baik ke dalam perusahaan.
            </p>
          </div>
          <div class="relative">
             <div class="w-full h-64 border border-[#38bdf8]/20 rounded-xl flex items-center justify-center group overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p class="text-[#38bdf8] font-mono animate-pulse">SYSTEM_CHECK: OPTIMIZED</p>
             </div>
          </div>
        </div>
      </div>

      <div class="slide w-screen h-full flex flex-col justify-center px-6 md:px-24">
        <div class="text-center">
          <span class="text-[#38bdf8] font-mono mb-8 block tracking-[0.5em]">— PHASE 03</span>
          <h2 class="text-6xl md:text-9xl font-black text-white mb-12 uppercase tracking-tighter">
            Bagaimana <span class="text-[#38bdf8]">Tertarik?</span>
          </h2>
          <button class="px-12 py-4 border border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-navy-950 transition-all duration-500 font-bold tracking-widest uppercase">
            Start Your Journey
          </button>
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

const scrollContainer = ref(null);
const pinWrapper = ref(null);

onMounted(() => {
  const sections = gsap.utils.toArray(".slide");

  // 1. Buat tween utama untuk horizontal scroll dan simpan dalam variabel
  const scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // Penting: harus 'none' agar sinkron dengan scroll
    scrollTrigger: {
      trigger: scrollContainer.value,
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + pinWrapper.value.offsetWidth,
    }
  });

  // 2. Gunakan scrollTween sebagai referensi containerAnimation
  sections.forEach((section) => {
    const targets = section.querySelectorAll("h2, p, button, .relative");
    
    gsap.from(targets, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        containerAnimation: scrollTween, // PAKAI VARIABEL TWEEN DI SINI
        start: "left 70%", // Animasi mulai saat slide masuk 70% dari kanan
      }
    });
  });
});
</script>

<style scoped>
.stroke-text {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}

.slide {
  flex-shrink: 0;
}
</style>