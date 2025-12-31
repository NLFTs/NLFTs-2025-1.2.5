<template>
  <section ref="contactSection" class="relative min-h-[120vh] w-full flex items-center justify-center py-32 overflow-hidden">
    
    <div class="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-[0.07] select-none">
      <div class="marquee-text text-[20vw] font-black leading-none whitespace-nowrap text-white">
        LET'S CREATE • LET'S CREATE • LET'S CREATE •
      </div>
      <div class="marquee-text-reverse text-[20vw] font-black leading-none whitespace-nowrap text-white">
        TOGETHER • TOGETHER • TOGETHER • TOGETHER •
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-end justify-between gap-20">
        
        <div class="lg:w-1/3 space-y-12">
          <div class="space-y-4">
            <h3 class="text-indigo-500 font-bold tracking-[0.3em] uppercase text-sm reveal-text">Available for Projects</h3>
            <h2 class="text-6xl md:text-7xl font-black text-white leading-tight reveal-text">
              PUNYA <br> IDE <br> <span class="outline-text">GILA?</span>
            </h2>
          </div>

          <div class="social-links flex gap-8">
            <a v-for="link in ['IG', 'TW', 'LI', 'BE']" :key="link" href="#" 
               class="text-white/40 hover:text-white font-bold transition-colors duration-500 text-xl hover-lift">
              {{ link }}
            </a>
          </div>
        </div>

        <div class="lg:w-2/3 w-full">
          <div class="form-wrapper bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 md:p-16 rounded-[4rem] shadow-2xl relative">
            
            <div class="absolute -top-10 -left-10 w-32 h-32 bg-indigo-600/20 rounded-full blur-[80px]"></div>

            <form @submit.prevent class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="input-group relative">
                <input type="text" required class="contact-input" placeholder=" ">
                <label class="floating-label">Siapa namamu?</label>
                <div class="line-effect"></div>
              </div>

              <div class="input-group relative">
                <input type="email" required class="contact-input" placeholder=" ">
                <label class="floating-label">Alamat Email</label>
                <div class="line-effect"></div>
              </div>

              <div class="input-group relative md:col-span-2">
                <textarea rows="3" required class="contact-input" placeholder=" "></textarea>
                <label class="floating-label">Apa yang bisa kita bantu?</label>
                <div class="line-effect"></div>
              </div>

              <div class="md:col-span-2 flex justify-end pt-6">
                <button ref="sendBtn" class="group relative px-16 py-6 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:pr-20">
                  <span class="relative z-10 uppercase tracking-widest">Kirim Sekarang</span>
                  <div class="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </button>
              </div>
            </form>
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

const contactSection = ref(null);

onMounted(() => {
  // 1. Marquee Animation (Teks berjalan otomatis di background)
  gsap.to(".marquee-text", {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: contactSection.value,
      scrub: 1,
      start: "top bottom",
      end: "bottom top",
    }
  });

  gsap.to(".marquee-text-reverse", {
    xPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: contactSection.value,
      scrub: 1,
      start: "top bottom",
      end: "bottom top",
    }
  });

  // 2. Entrance Animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: contactSection.value,
      start: "top 60%",
    }
  });

  tl.from(".reveal-text", {
    y: 80,
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    ease: "expo.out"
  })
  .from(".form-wrapper", {
    scale: 0.8,
    opacity: 0,
    rotateX: 15,
    duration: 1.5,
    ease: "elastic.out(1, 0.75)"
  }, "-=1")
  .from(".input-group", {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8
  }, "-=0.5");
});
</script>

<style scoped>
.outline-text {
  color: transparent;
  -webkit-text-stroke: 1.5px white;
}

.input-group {
  position: relative;
}

.contact-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0.5rem 0.5rem;
  color: white;
  font-size: 1.1rem;
  outline: none;
  transition: all 0.4s ease;
}

.floating-label {
  position: absolute;
  left: 0.5rem;
  top: 1.5rem;
  color: rgba(255, 255, 255, 0.4);
  pointer-events: none;
  transition: all 0.4s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
}

/* Logic Label Melayang */
.contact-input:focus ~ .floating-label,
.contact-input:not(:placeholder-shown) ~ .floating-label {
  top: -0.5rem;
  font-size: 0.7rem;
  color: #6366f1;
}

.line-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #6366f1;
  transition: width 0.4s ease;
}

.contact-input:focus ~ .line-effect {
  width: 100%;
}

.form-wrapper {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.hover-lift:hover {
  transform: translateY(-5px);
  color: #6366f1;
}
</style>