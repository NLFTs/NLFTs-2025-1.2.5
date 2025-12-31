<template>
  <section id="section-children" class="relative py-32 px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      
      <div class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="max-w-2xl">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-[1px] bg-blue-500"></div>
            <span class="font-mono text-[10px] tracking-[0.4em] text-blue-500 uppercase">System_Entities</span>
          </div>
          <h2 class="text-4xl md:text-6xl font-black italic text-white uppercase tracking-tighter leading-none">
            The Children <br> <span class="text-blue-600">of NLFTs</span>
          </h2>
        </div>
        <p class="text-slate-500 font-mono text-xs max-w-xs leading-relaxed italic border-r-2 border-blue-900 pr-4 text-right">
          Ekosistem yang terfragmentasi namun terintegrasi dalam satu protokol keamanan .fts
        </p>
      </div>

      <div class="grid grid-cols-12 gap-4 auto-rows-[300px]">
        
        <div class="col-span-12 lg:col-span-7 row-span-2 group relative overflow-hidden bg-slate-900 border border-white/5 hover:border-blue-500/50 transition-all duration-500">
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          
          <div class="relative h-full p-10 flex flex-col justify-between z-10">
            <div class="flex justify-between items-start">
              <div class="w-12 h-12 bg-blue-600 flex items-center justify-center font-black text-xl italic shadow-[0_0_20px_rgba(37,99,235,0.4)]">N</div>
              <span class="font-mono text-[10px] text-blue-400 border border-blue-400/30 px-2 py-1">Sejak_2024</span>
            </div>
            <div>
              <h3 class="text-3xl font-black text-white italic uppercase mb-2">Komunitas</h3>
              <p class="text-slate-400 text-sm max-w-md leading-relaxed">
                Pusat kolaborasi insinyur perangkat lunak Indonesia. Berbagi modul, optimasi C++, dan riset framework masa depan.
              </p>
              <div class="mt-6 flex gap-4">
                <div class="flex flex-col leading-none">
                  <span class="text-blue-500 font-bold text-xl uppercase italic">1.2k+</span>
                  <span class="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Active_Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 md:col-span-6 lg:col-span-5 row-span-1 group relative overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-cyan-500/50 transition-all duration-500">
          <div class="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <UIcon name="i-logos-react" class="w-64 h-64 grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div class="relative h-full p-8 flex flex-col justify-between z-10">
            <h3 class="text-2xl font-black text-white italic uppercase tracking-tighter flex items-center gap-3">
              React <span class="text-cyan-500">Pixel</span>
            </h3>
            <p class="text-slate-500 text-xs leading-relaxed italic">
              "UI Components dengan performa render 60fps tanpa kompromi."
            </p>
            <button class="mt-4 self-start text-[10px] font-mono text-cyan-500 border-b border-cyan-500/30 pb-1 hover:text-white transition-colors">
              VIEW_REPOSITORY.fts
            </button>
          </div>
        </div>

        <div class="col-span-12 md:col-span-6 lg:col-span-5 row-span-1 group relative overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-emerald-500/50 transition-all duration-500">
          <div class="absolute -left-10 -top-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <UIcon name="i-logos-vue" class="w-64 h-64 grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div class="relative h-full p-8 flex flex-col justify-between z-10 items-end text-right">
            <h3 class="text-2xl font-black text-white italic uppercase tracking-tighter">
              Vue <span class="text-emerald-500">Pixel</span>
            </h3>
            <p class="text-slate-500 text-xs leading-relaxed italic max-w-[200px]">
              "Sistem reaktif yang dioptimasi untuk arsitektur NLFTs OS."
            </p>
            <button class="mt-4 text-[10px] font-mono text-emerald-500 border-b border-emerald-500/30 pb-1 hover:text-white transition-colors">
              EXECUTE_MODULE.fts
            </button>
          </div>
        </div>

      </div>
    </div>

    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-blue-600/20 via-transparent to-transparent"></div>
  </section>
</template>