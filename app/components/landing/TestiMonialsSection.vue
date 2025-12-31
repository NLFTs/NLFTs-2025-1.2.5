<template>
  <section ref="sectionRef" class="relative h-screen w-full flex items-center justify-center overflow-hidden">
    
    <div class="title-wrapper pointer-events-none absolute top-10 left-0 w-full flex justify-center overflow-hidden">
      <h2 class="parallax-text text-[18vw] font-black uppercase text-white/[0.04] whitespace-nowrap leading-none select-none">
        THEY TALK ABOUT US • THEY TALK ABOUT US •
      </h2>
    </div>

    <div class="container mx-auto px-4 relative h-full flex items-center justify-center">
      <div class="relative w-full max-w-5xl h-[600px] md:h-[700px] flex items-center justify-center">
        
        <div 
          v-for="(item, index) in testimonials" 
          :key="index"
          :class="[item.bgColor, 'testimonial-card shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]']"
          class="absolute w-full p-8 md:p-14 rounded-[3rem] border border-white/20 flex flex-col justify-between opacity-0 overflow-hidden"
          style="top: 50%; transform: translateY(-50%);"
        >
          <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-6">
              <div v-for="star in 5" :key="star" class="text-yellow-400">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              </div>
            </div>
            <p class="text-2xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-10">
              "{{ item.message }}"
            </p>
          </div>
          
          <div class="relative z-10 flex items-center gap-6">
            <div class="w-20 h-20 md:w-24 md:h-24 rounded-3xl overflow-hidden border-4 border-white/30 shadow-xl">
              <img :src="item.avatar" :alt="item.name" class="w-full h-full object-cover">
            </div>
            
            <div class="flex flex-col">
              <h4 class="text-2xl md:text-3xl font-black text-white italic tracking-tighter">{{ item.name }}</h4>
              <p class="text-white/80 font-bold uppercase text-xs md:text-sm tracking-[0.2em]">{{ item.role }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const sectionRef = ref(null);

const testimonials = [
  { 
    name: 'Hiatsam Haidar', 
    role: 'Backend Dev', 
    avatar: 'https://avatars.githubusercontent.com/u/232498781?v=4',
    message: 'Saya Melihat Langusng Bagaimana Ekosistem ini berkembang dengan arah yang jelas, NLFTs bukan hanya ruang belajar tapi tempat bertumbuh bagi talenta dan motivasi!',
    bgColor: 'bg-[#4F46E5]' // Indigo
  },
  { 
    name: 'Nafis', 
    role: 'Frontend Begginer', 
    avatar: 'https://avatars.githubusercontent.com/u/182593937?v=4',
    message: 'Hari Hari yang sungguh Berpengalaman. Di NLFTs saya memiliki Beberapa Tim yang jauh lebih kompeten dari pada di sekolah good Luck..',
    bgColor: 'bg-[#E11D48]' // Rose
  },
  { 
    name: 'Erga Praditya', 
    role: 'Sekertaris NLFTs', 
    avatar: 'https://avatars.githubusercontent.com/u/237564897?v=4',
    message: 'Luas Biasa Hebat!. Saya sanggat Tersinpirasi Untuk terus mengeluarkan ide ide Jenius.Saya bukan hanya Belajar tapi tempat berkembang.',
    bgColor: 'bg-[#D97706]' // Amber
  }
];

onMounted(() => {
  const cards = gsap.utils.toArray('.testimonial-card');
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top top",
      end: "+=3000", 
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    }
  });

  cards.forEach((card, index) => {
    // Setup awal: Kartu di bawah layar dan miring
    gsap.set(card, { 
      yPercent: 100, // Mulai dari bawah container
      opacity: 0,
      scale: 0.9,
      rotationX: -20, // Efek 3D miring sedikit
      zIndex: index 
    });

    // Animasi Masuk: Kartu naik ke tengah
    tl.to(card, {
      yPercent: -50, // Naik tepat ke tengah (karena top: 50%)
      opacity: 1,
      scale: 1,
      rotationX: 0,
      duration: 1.5,
      ease: "expo.out",
    }, index * 2);

    // Animasi Saat Kartu Berikutnya Masuk (Stacking Effect)
    if (index < cards.length - 1) {
      tl.to(card, {
        yPercent: -65, // Sedikit lebih naik agar terlihat menumpuk
        scale: 0.9,
        filter: "brightness(0.5)",
        duration: 1.5,
      }, (index + 1) * 2);
    }
  });

  // Background Text Parallax
  gsap.to(".parallax-text", {
    scrollTrigger: {
      trigger: sectionRef.value,
      scrub: 2,
      start: "top bottom",
      end: "bottom top",
    },
    xPercent: -30,
    ease: "none"
  });
});
</script>

<style scoped>
.testimonial-card {
  will-change: transform, opacity, filter;
  /* Tambahkan perspective untuk efek 3D yang lebih terasa */
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

/* Memastikan teks tidak pecah saat scaling */
p {
  -webkit-font-smoothing: antialiased;
}
</style>