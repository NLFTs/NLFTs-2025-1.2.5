<template>
  <section ref="containerRef" class="relative py-32 overflow-hidden">
    <div class="container mx-auto px-6">
      
      <div class="relative mb-40">
        <div class="overflow-hidden mb-4">
          <h2 ref="head1" class="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none text-[#38bdf8]">
            The Silent
          </h2>
        </div>
        <div class="overflow-hidden flex justify-end">
          <h2 ref="head2" class="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none text-white opacity-20">
            Revolution
          </h2>
        </div>
        <p ref="headDesc" class="mt-8 text-xl md:text-3xl font-light text-slate-400 max-w-xl">
          Coding is easy. <span class="text-white font-medium">Building a presence is an art.</span>
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-12 items-start mb-60">
        <div class="lg:col-span-4 sticky top-24">
          <div class="flex items-center gap-4 group">
            <span class="w-12 h-[1px] bg-[#38bdf8] origin-left group-hover:scale-x-150 transition-transform duration-500"></span>
            <span class="text-xs tracking-[0.4em] uppercase font-bold text-[#38bdf8]">Our Manifest</span>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-24">
          <div ref="story1" class="story-block">
            <p class="text-3xl md:text-5xl font-medium leading-tight text-slate-200">
              Kami tidak hadir untuk menambah draft panjang <span class="text-[#38bdf8]"> jadwal temu untuk bisnis anda</span> katakan apa yang anda butuhkan.
            </p>
          </div>
          
          <div ref="story2" class="story-block pl-0 md:pl-20 border-l border-white/5">
            <p class="text-xl text-slate-400 leading-relaxed">
              Di NLFTs, kami melihat celah besar di antara pembangunan dan peningkatan bisnis. Kami adalah rumah bagi mereka yang percaya bahwa sebuah platform harus memiliki <span class="text-white italic underline decoration-[#38bdf8]">jiwa</span>—mulai dari SEO hingga komponen desain yang intuitif.
            </p>
          </div>
        </div>
      </div>

      <div class="relative grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
        <div ref="tech1" class="group relative p-12 bg-[#0f172a]/40 backdrop-blur-xl hover:bg-[#38bdf8]/5 transition-colors duration-700">
          <div class="absolute top-8 right-8 text-6xl font-black text-white/5 group-hover:text-[#38bdf8]/20 transition-colors">01</div>
          <h4 class="text-4xl font-bold text-white mb-6">Ryn Verse</h4>
          <p class="text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
            ide dan kreatifitas yang membawa kompetitor Anda terasa seperti menggunakan dial-up internet. ribuan tenaga dalam satu tempat
          </p>
        </div>

        <div ref="tech2" class="group relative p-12 bg-[#0f172a]/40 backdrop-blur-xl hover:bg-[#38bdf8]/5 transition-colors duration-700">
          <div class="absolute top-8 right-8 text-6xl font-black text-white/5 group-hover:text-[#38bdf8]/20 transition-colors">02</div>
          <h4 class="text-4xl font-bold text-white mb-6">Project FTs 2024</h4>
          <p class="text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
            Kepercayaan anda kami sejak tahun 2024 membawa kami untuk bergerak maju menciptakan platfrom terbaik
          </p>
        </div>
      </div>

      <div ref="footerRef" class="mt-60 text-center">
        <h3 class="text-5xl md:text-8xl font-black text-white mb-12 opacity-10 tracking-widest uppercase">Explorers Only</h3>
        <p class="text-[#38bdf8] text-sm tracking-[0.8em] font-bold uppercase mb-4">Not for the lazy</p>
        <div class="h-20 w-[1px] bg-gradient-to-b from-[#38bdf8] to-transparent mx-auto"></div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const containerRef = ref(null);
const head1 = ref(null);
const head2 = ref(null);
const headDesc = ref(null);
const story1 = ref(null);
const story2 = ref(null);
const tech1 = ref(null);
const tech2 = ref(null);
const footerRef = ref(null);

onMounted(() => {
  // 1. Kinetic Headline Animation
  gsap.from(head1.value, {
    scrollTrigger: {
      trigger: head1.value,
      start: "top 90%",
      end: "top 20%",
      scrub: 1,
    },
    x: -200,
    opacity: 0,
  });

  gsap.from(head2.value, {
    scrollTrigger: {
      trigger: head2.value,
      start: "top 90%",
      end: "top 20%",
      scrub: 1,
    },
    x: 200,
    opacity: 0,
  });

  // 2. Story Reveal (Text Masking Effect)
  [story1.value, story2.value].forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out"
    });
  });

  // 3. Tech Cards (Parallax Tilt)
  gsap.from([tech1.value, tech2.value], {
    scrollTrigger: {
      trigger: tech1.value,
      start: "top 85%",
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    ease: "expo.out"
  });

  // 4. Footer Big Text Scrub
  gsap.to(footerRef.value.querySelector('h3'), {
    scrollTrigger: {
      trigger: footerRef.value,
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    },
    opacity: 1,
    letterSpacing: "0.1em",
  });
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>