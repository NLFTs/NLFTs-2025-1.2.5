<template>
  <footer ref="footerRef" class="relative w-full pt-20 pb-10 overflow-hidden border-t border-white/10">
    <div class="container mx-auto px-6">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
        <div class="space-y-6 footer-reveal">
          <h2 class="text-6xl font-black text-white tracking-tighter">NLFTs</h2>
          <p class="text-gray-400 text-xl max-w-lg leading-relaxed">
            Menciptakan pengalaman digital luar biasa melalui pengembangan web inovatif, aplikasi seluler, game, dan animasi yang memukau.
          </p>
          <div class="flex flex-col gap-4">
            <span class="text-white font-bold uppercase tracking-widest text-sm">Ikuti Kami</span>
            <div class="flex gap-6">
              <a v-for="s in ['IG', 'TW', 'LI', 'BE']" :key="s" href="#" class="text-gray-500 hover:text-indigo-500 transition-colors font-black text-lg">{{ s }}</a>
            </div>
          </div>
        </div>

        <div class="bg-white/5 p-10 rounded-[3rem] border border-white/10 footer-reveal relative overflow-hidden group">
          <div class="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] group-hover:bg-indigo-600/20 transition-all duration-700"></div>
          
          <h3 class="text-3xl font-bold text-white mb-2">Ikuti Update terbaru</h3>
          <p class="text-gray-500 mb-8">Dapatkan berita teknologi terbaru langsung di inbox Anda.</p>
          <div class="relative">
            <input type="email" placeholder="Email Anda" class="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-indigo-500 transition-all text-white px-2 placeholder:text-gray-700">
            <button class="absolute right-0 bottom-4 text-indigo-500 font-black hover:tracking-[0.2em] transition-all uppercase">Ikuti</button>
          </div>
        </div>
      </div>

      <div class="py-12 border-y border-white/5 mb-20 overflow-hidden rotate-[-1.5deg] bg-white/[0.02] backdrop-blur-sm">
        <div class="flex whitespace-nowrap gap-12 tech-marquee">
          <span v-for="(tech, i) in [...allTechs, ...allTechs]" :key="i" 
                class="text-3xl font-black text-white/10 hover:text-indigo-500 transition-colors cursor-default uppercase tracking-tighter">
            {{ tech }} <span class="mx-4 text-indigo-500/30">•</span>
          </span>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 footer-reveal">
        <div class="space-y-8">
          <h4 class="text-white font-black uppercase text-sm tracking-[0.3em] border-l-4 border-indigo-600 pl-4">Perusahaan</h4>
          <ul class="space-y-4 text-gray-500 font-bold">
            <li class="hover:text-white transition-all hover:translate-x-2 cursor-pointer">Tentang</li>
            <li class="hover:text-white transition-all hover:translate-x-2 cursor-pointer">Tim Kami</li>
            <li class="hover:text-white transition-all hover:translate-x-2 cursor-pointer">Proyek</li>
          </ul>
        </div>

        <div class="space-y-8">
          <h4 class="text-white font-black uppercase text-sm tracking-[0.3em] border-l-4 border-indigo-600 pl-4">Layanan</h4>
          <ul class="space-y-4 text-gray-500 font-bold">
            <li v-for="l in ['Web Development', 'Mobile Apps', 'Game Development', 'Animation Studio', 'UI/UX Design']" :key="l" 
                class="hover:text-white transition-all hover:translate-x-2 cursor-pointer">{{ l }}</li>
          </ul>
        </div>

        <div class="space-y-8">
          <h4 class="text-white font-black uppercase text-sm tracking-[0.3em] border-l-4 border-indigo-600 pl-4">Sumber</h4>
          <ul class="space-y-4 text-gray-500 font-bold">
            <li v-for="s in ['Documentation', 'FAQ', 'Bantuan', 'Privacy Policy', 'Terms of Service']" :key="s" 
                class="hover:text-white transition-all hover:translate-x-2 cursor-pointer">{{ s }}</li>
          </ul>
        </div>

        <div class="space-y-8">
          <h4 class="text-white font-black uppercase text-sm tracking-[0.3em] border-l-4 border-indigo-600 pl-4">Kontak</h4>
          <ul class="space-y-6 text-gray-500">
            <li>
              <span class="block text-[10px] text-indigo-500 font-black mb-1 uppercase tracking-widest">Email Resmi</span>
              <a href="mailto:nlfts.etc@gmail.com" class="text-lg text-white font-bold hover:text-indigo-400">nlfts.etc@gmail.com</a>
            </li>
            <li>
              <span class="block text-[10px] text-indigo-500 font-black mb-1 uppercase tracking-widest">Telepon</span>
              <p class="text-lg text-white font-bold">+62 882 0012 89177</p>
            </li>
            <li>
              <span class="block text-[10px] text-indigo-500 font-black mb-1 uppercase tracking-widest">Lokasi</span>
              <p class="text-lg text-white font-bold">Bandung, Indonesia</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex flex-col md:flex-row items-center gap-4">
          <p class="text-gray-600 text-sm font-bold tracking-tight">© 2026 NLFTs. All rights reserved.</p>
        </div>
        
        <div class="flex items-center gap-3 group">
          <span class="text-gray-600 text-xs font-bold italic tracking-widest">BUATAN</span>
          <div class="relative px-6 py-2 bg-white rounded-full overflow-hidden">
            <span class="relative z-10 text-black text-[10px] font-black uppercase tracking-tighter">FTs Project, Indonesia</span>
            <div class="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const footerRef = ref(null);

// Semua teknologi sesuai permintaan Anda
const allTechs = [
  'React', 'Node.js', 'Python', 'Next.js', 'Unreal Engine', 'Blender', 'After Effects', 'Flutter', 
  'Vue.js', 'AWS', 'Nuxt.js', 'Laravel 12', 'Kotlin', 'Electron.js', 'Debian', 'Ubuntu', 'Mint', 
  'Arch', 'KaliLinux', 'Tailwindcss', 'Boostrap', 'PyQt', 'Premier Pro', 'React Bits', 'Vue Bits', 
  'Express.js', 'Laragon', 'Xampp', 'Nginx', 'Apache', 'Mysql', 'Sqlite', 'MongoDB', 'Table Plus', 
  'GIT', 'GitHub', 'GitLab'
];

onMounted(() => {
  // Animasi Stagger Reveal saat footer terlihat
  gsap.from(".footer-reveal", {
    y: 100,
    opacity: 0,
    stagger: 0.15,
    duration: 1.5,
    ease: "expo.out",
    scrollTrigger: {
      trigger: footerRef.value,
      start: "top 90%",
    }
  });

  // Animasi Infinite Marquee untuk Tech Stack
  gsap.to(".tech-marquee", {
    xPercent: -50,
    ease: "none",
    duration: 40, 
    repeat: -1
  });
});
</script>

<style scoped>
.tech-marquee {
  display: flex;
  width: max-content;
}

/* Animasi sederhana untuk link list agar terasa premium */
li {
  display: flex;
  align-items: center;
}

footer {
  background: radial-gradient(circle at bottom left, rgba(79, 70, 229, 0.07) 0%, transparent 50%);
}

.outline-text {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
  color: transparent;
}
</style>