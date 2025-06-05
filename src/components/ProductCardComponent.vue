<template>
  <div class="rounded-lg p-4 text-black shadow-md bg-gray-300 hover:transform hover:scale-105">
    <img :src="produto.thumbnail" :alt="produto.title" class="mx-auto mb-2 h-32 object-cover">
    <h2 class="text-center font-bold">{{ produto.title }}</h2>
    <p class="text-center text-sm">R$ {{ produto.price }}</p>
    <router-link :to="`/product/${produto.id}`">
      <button class="btn text-sm mt-4 bg-blue-600 text-white py-2 px-6 shadow rounded-lg hover:bg-blue-700"> Ver detalhes </button>
    </router-link>

  </div>
  
</template>
<script setup>
defineProps({
  produto: Object
})
</script>
