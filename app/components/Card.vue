<script setup>
// Ini tempat menaruh data (Props) agar kartu bisa menerima nama & harga yang berbeda
defineProps(['name', 'price', 'image'])
</script>

<template>
  <div class="card">
    <div class="image-placeholder"></div>
    <h3>{{ name }}</h3>
    <p>Harga: <span>{{ price }}</span></p>
    <button>Beli Sekarang</button>
  </div>
</template>

<style scoped>
.card { border: 1px solid #333; padding: 15px; border-radius: 12px; transition: 0.3s; }
.card:hover { border-color: cyan; transform: translateY(-5px); }
.image-placeholder { background: #222; height: 150px; border-radius: 8px; margin-bottom: 10px; }
button { background: cyan; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold; width: 100%; }
</style>