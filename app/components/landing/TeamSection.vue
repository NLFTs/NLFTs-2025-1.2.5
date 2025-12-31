<template>
  <section 
    ref="sectionRef" 
    class="relative py-20 px-6 overflow-hidden flex flex-col justify-center min-h-[90vh]"
  >
    <div class="container mx-auto">
      
      <div class="mb-12 overflow-hidden">
        <h2 class="team-title text-white text-5xl md:text-7xl font-black uppercase tracking-tighter opacity-0 translate-y-10">
          THE <span class="text-[#38bdf8]">CORE</span> ARCHITECTS
        </h2>
        <div class="team-line h-1 bg-[#38bdf8] w-0 mt-4"></div>
      </div>

      <div class="flex flex-col md:flex-row h-[550px] gap-4 w-full">
        <div 
          v-for="(member, index) in team" 
          :key="index"
          class="team-member relative flex-1 overflow-hidden rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group hover:flex-[2.5] bg-slate-900 border border-white/5 opacity-0 translate-y-20"
        >
          <div class="absolute inset-0 z-0">
            <img 
              :src="member.photo" 
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-40 group-hover:opacity-100"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
          </div>

          <div class="absolute inset-0 z-10 p-8 flex flex-col justify-end">
            <div class="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span class="bg-[#38bdf8] text-[#0f172a] text-[10px] font-black uppercase px-3 py-1 tracking-widest">
                {{ member.role }}
              </span>
            </div>

            <h3 class="text-3xl font-bold text-white mb-2 leading-none uppercase">
              {{ member.name }}
            </h3>
            
            <div class="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 opacity-0 group-hover:opacity-100">
              <p class="text-slate-300 text-sm mb-6 max-w-xs leading-relaxed">
                "{{ member.bio }}"
              </p>
              
              <div class="flex gap-4 mb-2">
                <a :href="member.github" class="text-white/60 hover:text-[#38bdf8] transition-colors font-mono text-[10px] uppercase">Github</a>
                <a :href="`mailto:${member.site}`" class="text-[#38bdf8] hover:text-white transition-colors font-bold text-[10px] uppercase tracking-widest">Vist site</a>
              </div>
            </div>
          </div>

          <div class="absolute top-8 right-8 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
            <span class="text-white/10 font-black text-4xl uppercase [writing-mode:vertical-lr] tracking-tighter">
              {{ member.name.split(' ')[0] }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

const team = [
  {
    name: "Nairha Shaffa",
    role: "Frontend Designer",
    photo: "https://avatars.githubusercontent.com/u/204519754?v=4",
    bio: "Visioner FTs Project 2024. Fokus pada kecepatan build-time dan kualitas UI Moderen.",
    github: "https://github.com/nairhacan", site: "https://nairha.vercel.app"
  },
  {
    name: "Raditiya pratama",
    role: "Beckend Holder",
    photo: "https://avatars.githubusercontent.com/u/226198461?v=4",
    bio: "Pakar Backend Development. Menerjemahkan kerumitan sistem menjadi maknisme yang berjiwa.",
    github: "https://github.com/Radiedtya", site: "https://radiedtya.github.io/My-Portfolio"
  },
  {
    name: "Miftah aufar",
    role: "Server Engineer",
    photo: "https://avatars.githubusercontent.com/u/232498018?v=4",
    bio: "Optimasi Server dan Mencegah 56& DDOS 24 jam nonstop.",
    github: "https://github.com/miftahaja", site: "miftah.vercel.app"
  }
];

onMounted(async () => {
  // Tunggu Nuxt selesai merender DOM
  await nextTick();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 95%", // ANIMASI JALAN BEGITU SECTION MUNCUL SEDIKIT
      toggleActions: "play none none none"
    }
  });

  tl.to(".team-title", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power4.out"
  })
  .to(".team-line", {
    width: "120px",
    duration: 0.8,
    ease: "expo.inOut"
  }, "-=0.6")
  .to(".team-member", {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.2,
    ease: "expo.out"
  }, "-=0.4");

  // Refresh ScrollTrigger untuk hitung ulang posisi
  ScrollTrigger.refresh();
});
</script>

<style scoped>
/* Transisi kolom dikendalikan oleh class hover:flex-[2.5] di Tailwind */
.team-member {
  will-change: flex, transform;
}
</style>