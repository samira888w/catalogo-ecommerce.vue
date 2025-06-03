<template>
  <div class="rounded-lg p-4 text-black shadow-md bg-gray-300 hover:bg-gray-400 hover:shadow-lg">
    <img :src="produto.thumbnail" :alt="produto.title" class="mx-auto mb-2 h-32 object-cover">
    <h2 class="text-center font-bold">{{ produto.title }}</h2>
    <p class="text-center text-sm">R$ {{ produto.price }}</p>
  </div>
</template>

<script setup>
defineProps({
  produto: Object
})
</script>
