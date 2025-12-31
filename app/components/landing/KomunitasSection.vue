<template>
  <section ref="communitySection" class="relative py-40 px-6 overflow-hidden bg-transparent">
    
    <div class="absolute top-10 left-6 md:left-12 z-20 flex items-center gap-2">
      <span class="text-red-600 font-mono text-xs tracking-[0.3em] uppercase font-black animate-pulse">
        Komunitas &lt;/&gt;
      </span>
      <div class="h-px w-8 bg-red-600/30"></div>
    </div>

    <div class="container mx-auto relative z-10">
      <div class="grid lg:grid-cols-12 gap-12">
        
        <div class="lg:col-span-5 hidden lg:block">
          <div class="sticky top-40 space-y-8">
            <div ref="terminalRef" class="bg-black/60 border border-red-900/20 p-6 rounded-2xl backdrop-blur-xl shadow-2xl">
              <div class="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                <div class="flex gap-1.5">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-600/50"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-orange-600/50"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-green-600/50"></div>
                </div>
                <span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-auto">FORGE_CORE_v1.0</span>
              </div>
              <div class="space-y-3 font-mono text-[11px] leading-relaxed">
                <div class="text-red-500/80 tracking-tighter">[SYSTEM] Monitoring member pulse...</div>
                <div class="text-slate-400 opacity-60">> Syncing Dabyan nodes (124 active)</div>
                <div class="text-sky-400">> @Architect_X: "New SEO Logic applied"</div>
                <div class="text-slate-500">> Waiting for next initiation packet...</div>
                <div class="text-green-500 animate-pulse">> STATUS: OPTIMIZED</div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="p-6 bg-white/5 border border-white/5 rounded-2xl">
                <div class="text-2xl font-black text-white">12+</div>
                <div class="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Exclusive Artifacts</div>
              </div>
              <div class="p-6 bg-white/5 border border-white/5 rounded-2xl">
                <div class="text-2xl font-black text-red-600">0%</div>
                <div class="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Tolerance for Lazy</div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-32">
          
          <div class="pillar-item">
            <h2 class="text-white text-5xl md:text-7xl font-black leading-none mb-8 tracking-tighter uppercase">
              The <span class="text-transparent stroke-text italic">Collective.</span>
            </h2>
            <p class="text-slate-400 text-xl leading-relaxed mb-8">
              Mari Berhabung ke Komunitas. Kami berdiskusi tentang <span class="text-white font-bold italic">mengapa</span> komunitas tersebut harus ada. Bergabunglah dengan jaringan developer yang mengerti bahwa dunia IT adalah aset strategi, bukan beban biaya.
            </p>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="p-6 border-l border-red-600/50 bg-red-950/5">
                <h4 class="text-white font-bold mb-2 uppercase text-sm">Peer Review</h4>
                <p class="text-slate-500 text-sm">Kode Anda akan "disiksa" oleh standar kami hingga mencapai performa maksimal.</p>
              </div>
              <div class="p-6 border-l border-sky-600/50 bg-sky-950/5">
                <h4 class="text-white font-bold mb-2 uppercase text-sm">Vanish Sessions</h4>
                <p class="text-slate-500 text-sm">Sesi live 24 jam. Strategi rahasia yang hanya dimiliki mereka yang hadir.</p>
              </div>
            </div>
          </div>

          <div class="pillar-item">
            <h3 class="text-4xl font-bold text-white mb-6 uppercase tracking-tight italic">Exclusive Resources &lt;/&gt;</h3>
            <p class="text-slate-400 text-lg mb-8">
              Akses ke perpustakaan komponen internal yang kami gunakan untuk membangun paltfrom seperti React Pixel dan Vue Pixel. Tidak ada UI Kit murahan; hanya kode yang dioptimasi untuk kecepatan ekstrem.
            </p>
            <div class="space-y-4">
              <div v-for="i in 3" :key="i" class="flex items-center justify-between p-4 border border-white/5 rounded-xl group hover:bg-white/5 transition-colors">
                <span class="text-slate-300 font-mono text-sm uppercase italic">Artifact_Package_0{{ i }}.fts</span>
                <span class="text-red-600 font-black text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity tracking-widest">Members Only</span>
              </div>
            </div>
          </div>

          <div class="pillar-item pb-20">
            <div class="p-10 border border-red-600/20 bg-gradient-to-br from-red-950/20 to-transparent rounded-[2.5rem] relative overflow-hidden">
              <div class="relative z-10">
                <h4 class="text-3xl font-bold text-white mb-4">Siap Masuk Inisiasi?</h4>
                <p class="text-slate-400 mb-8">Kami tidak mencari ribuan member. Kami mencari Anda yang berani melampaui standar rata-rata.</p>
                <button class="px-10 py-4 bg-red-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                  Apply for Access
                </button>
              </div>
              <span class="absolute -right-10 -bottom-10 text-8xl font-black text-white/[0.03] italic uppercase select-none">Forge</span>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent"></div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const communitySection = ref(null);
const terminalRef = ref(null);

onMounted(() => {
  // Animasi Pillar Reveal
  const pillars = gsap.utils.toArray(".pillar-item");
  
  pillars.forEach((pillar) => {
    gsap.from(pillar, {
      scrollTrigger: {
        trigger: pillar,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out"
    });
  });

  // Animasi Terminal Floating
  gsap.to(terminalRef.value, {
    y: "-=20",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});
</script>

<style scoped>
.stroke-text {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}

.pillar-item {
  position: relative;
}
</style>