<template>
  <nav 
    class="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
    :class="{ 'bg-[#050505] border-b border-white/10 py-4 shadow-2xl': isScrolled, 'py-8 bg-transparent': !isScrolled }"
  >
    <div class="container mx-auto px-6 flex justify-between items-center relative">
      
      <NuxtLink to="/" class="text-3xl font-black text-white tracking-tighter shrink-0 z-[110]">
        NLFTs<span class="text-indigo-500">.</span>
      </NuxtLink>

      <div class="hidden lg:flex items-center gap-2">
        
        <div v-for="(menu, index) in navigation" :key="index" class="relative group">
          
          <button class="flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-all duration-300">
            {{ menu.name }}
            <Icon icon="lucide:chevron-down" class="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
          </button>

          <div class="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible translate-y-5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] w-[800px] z-[120]">
            
            <div class="bg-[#0c0c0c] border border-white/10 rounded-[3rem] p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] overflow-hidden relative">
              <div class="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>

              <div class="grid grid-cols-12 gap-10 relative z-10">
                <div class="col-span-4 border-r border-white/5 pr-10">
                  <div class="text-indigo-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4">{{ menu.name }}</div>
                  <h3 class="text-white text-2xl font-bold leading-tight mb-6 tracking-tight">Eksplorasi Ekosistem Digital.</h3>
                  <div class="p-5 bg-white/[0.03] rounded-3xl border border-white/5">
                    <p class="text-gray-500 text-[11px] leading-relaxed uppercase tracking-widest font-bold">Inovasi tanpa henti untuk hasil yang revolusioner.</p>
                  </div>
                </div>

                <div class="col-span-8 grid grid-cols-2 gap-4">
                  <NuxtLink 
                    v-for="child in menu.children" 
                    :key="child.title" 
                    :to="child.path"
                    class="group/item flex items-center gap-5 p-5 rounded-[2rem] hover:bg-indigo-600 transition-all duration-500 border border-transparent hover:border-white/10"
                  >
                    <div class="w-12 h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center group-hover/item:bg-white/20 transition-all duration-500 group-hover/item:rotate-[15deg]">
                      <Icon :icon="child.icon" class="text-2xl text-white" />
                    </div>
                    <div>
                      <h4 class="text-white font-bold group-hover/item:text-white">{{ child.title }}</h4>
                      <p class="text-white/30 text-[9px] uppercase tracking-[0.2em] mt-1 group-hover/item:text-white/70">{{ child.desc }}</p>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink to="/projects" class="px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-all">Proyek</NuxtLink>
      </div>

      <div class="hidden lg:flex items-center gap-6 shrink-0">
        <div 
          @click="openSearch"
          class="flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:border-indigo-500 transition-all group/search"
        >
          <Icon icon="lucide:search" class="text-lg text-white/40 group-hover/search:text-indigo-500 transition-colors" />
          <span class="text-[10px] font-black text-white/30 tracking-[0.2em] uppercase">Search</span>
          <kbd class="px-2 py-0.5 bg-white/10 rounded text-[9px] font-black text-white/50 border border-white/10">CTRL K</kbd>
        </div>

        <NuxtLink to="/contact" class="px-8 py-3.5 bg-white text-black text-[10px] font-black uppercase rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-500 tracking-[0.2em]">
          Mulai Proyek
        </NuxtLink>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const isScrolled = ref(false);

const navigation = [
  {
    name: 'Layanan',
    children: [
      { title: 'Web Development', desc: 'Web Moderen', icon: 'lucide:monitor', path: '/services/web' },
      { title: 'Mobile Apps', desc: 'Mobile Native', icon: 'lucide:smartphone', path: '/services/mobile' },
      { title: 'React Pixel', desc: 'Template React Components dan Fragments', icon: 'logos:react', path: '/react_pixel' },
      { title: 'Vue Pixel', desc: 'Template Vue Components dan Fragments', icon: 'logos:vue', path: '/vue_pixel' }, 
    ]
  },
  {
    name: 'Ekosistem',
    children: [
      { title: 'Showcase', desc: 'Hasil Karya Kami', icon: 'lucide:layout-grid', path: '/showcase' },
      { title: 'Dokumentasi', desc: 'Standard Tech', icon: 'lucide:book-open', path: '/docs' },
      { title: 'Karir', desc: 'Bergabunglah', icon: 'lucide:users', path: '/careers' },
      { title: 'Support', desc: 'Pusat Bantuan', icon: 'lucide:help-circle', path: '/help' }
    ]
  }
];

const openSearch = () => {
  console.log("Search modal aktif...");
};

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 30;
  });

  // Shortcut Ctrl + K
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
  });
});
</script>

<style scoped>
/* Transisi Smooth untuk pergerakan */
.group:hover button {
  transform: translateY(-2px);
}
</style>