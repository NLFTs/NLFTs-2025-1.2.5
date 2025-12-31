<template>
  <button
    class="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono tracking-tighter transition-all duration-300 bg-transparent border border-blue-500/30 hover:border-blue-500"
  >
    <div class="absolute inset-0 w-0 transition-all duration-500 ease-out bg-blue-600 group-hover:w-full"></div>

    <div class="absolute top-0 left-0 w-full h-[1px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

    <span class="relative flex items-center gap-2 text-[11px] font-bold text-blue-500 uppercase tracking-[0.2em] group-hover:text-white">
      <slot />
      <svg 
        class="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </span>

    <div class="absolute top-0 left-0 w-1 h-1 bg-blue-500 opacity-0 group-hover:opacity-100"></div>
    <div class="absolute bottom-0 right-0 w-1 h-1 bg-blue-500 opacity-0 group-hover:opacity-100"></div>
  </button>
</template>