<template>
  <Transition name="fade">
    <div 
      v-if="isVisible" 
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <div class="bg-white dark:bg-gray-900 max-w-md w-full rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800 text-center">
        <div class="mb-4 inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
          <span class="text-3xl">🧪</span>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Beta Test
        </h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Site ini sedang dalam tahap Uji Coba. Beberapa fitur mungkin masih dalam pengembangan.
        </p>

        <div class="flex flex-col gap-3">
          <button 
            @click="closeOverlay"
            class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all active:scale-95"
          >
            Mengerti
          </button>

          <a 
            href="https://github.com/NLFTs/NLFTs-2025-1.2.5" 
            class="text-sm text-blue-500 hover:underline transition-colors"
          >
            Cek versi 1.2.5
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isVisible = ref(false)

onMounted(() => {
  // Mengecek apakah user sudah pernah melihat overlay ini
  const hasSeenOverlay = localStorage.getItem('hide_welcome_overlay')
  
  if (!hasSeenOverlay) {
    isVisible.value = true
  }
})

const closeOverlay = () => {
  isVisible.value = false
  // Simpan status di localStorage agar tidak muncul lagi
  localStorage.setItem('hide_welcome_overlay', 'true')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>