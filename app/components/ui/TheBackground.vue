<template>
  <div class="fixed inset-0 z-[-1] overflow-hidden bg-[#010409]">
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

    <div 
      ref="gridRef"
      class="absolute inset-0 opacity-[0.15]" 
      style="background-image: 
        linear-gradient(to right, #1e40af 1px, transparent 1px), 
        linear-gradient(to bottom, #1e40af 1px, transparent 1px);
        background-size: 80px 80px;"
    ></div>

    <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[100px] rounded-full"></div>

    <div class="absolute inset-0 bg-gradient-to-b from-[#010409] via-transparent to-[#010409] opacity-80"></div>
  </div>
</template>

<script setup>
const gridRef = ref(null)

onMounted(async () => {
  const { default: gsap } = await import('gsap')
  
  // Animasi grid bergerak lambat (seperti sistem yang sedang 'bernapas')
  gsap.to(gridRef.value, {
    backgroundPosition: '80px 80px',
    duration: 20,
    repeat: -1,
    ease: 'none'
  })

  // Reaksi halus terhadap pergerakan mouse
  window.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 15
    const moveY = (e.clientY / window.innerHeight - 0.5) * 15
    gsap.to(gridRef.value, {
      x: moveX,
      y: moveY,
      duration: 2,
      ease: 'power2.out'
    })
  })
})
</script>