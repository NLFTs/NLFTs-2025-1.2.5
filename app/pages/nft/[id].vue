<script setup>
// 1. Ambil parameter dari URL
const route = useRoute()
const nftId = route.params.id

// 2. Simulasi Data (Nantinya ini bisa dari API/Database)
const nftData = {
  '1': { name: 'Cyber Punk #001', price: '2.5 ETH', owner: 'Davin', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=500' },
  '2': { name: 'Ape Universe #99', price: '1.8 ETH', owner: 'Gahisan', image: 'https://images.unsplash.com/photo-1643101809754-43a91784611a?q=80&w=500' }
}

// 3. Cari NFT yang sesuai ID
const detail = nftData[nftId]
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white p-8">
    <NuxtLink to="/" class="text-blue-500 hover:text-blue-400 font-bold mb-8 inline-block italic">
      ← Back to Gallery
    </NuxtLink>

    <div v-if="detail" class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mt-10">
      <div class="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
        <img :src="detail.image" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
      </div>

      <div class="flex flex-col justify-center">
        <span class="text-blue-500 font-black tracking-widest uppercase text-xs">NFT Detail #{{ nftId }}</span>
        <h1 class="text-5xl font-black mt-4 italic uppercase tracking-tighter">{{ detail.name }}</h1>
        
        <div class="mt-8 p-6 bg-white/5 rounded-3xl border border-white/5">
          <p class="text-slate-400 text-sm">Current Price</p>
          <p class="text-3xl font-bold text-cyan-400">{{ detail.price }}</p>
        </div>

        <div class="mt-6 flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600"></div>
          <div>
            <p class="text-[10px] text-slate-500 uppercase font-black">Owner</p>
            <p class="text-sm font-bold">{{ detail.owner }}</p>
          </div>
        </div>

        <button class="mt-10 w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-cyan-400 transition-colors uppercase italic">
          Place a Bid
        </button>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <h2 class="text-2xl font-bold">NFT Tidak Ditemukan</h2>
    </div>
  </div>
</template>