<template>
  <div class="max-w-lg mx-auto bg-gray-200 p-6 shadow rounded-lg">
    <img :src="produto.thumbnail" :alt="produto.title" class="w-full mb-4 rounded">
    <h2 class="text-2xl font-bold mb-2">{{ produto.title }}</h2>
    <div class="bg-gray-100 shadow px-4 py-2 mt-6 mb-6 rounded-lg">
      <p class="text-gray-800 text-sm mb-2 mt-2">Preço: R$ {{ produto.price }}</p>
      <p class="text-gray-700 text-sm text-semibold mb-4 mt-4">{{ produto.description }}</p>
    </div>
    <router-link to="/catalogo" class="btn justify-center text-sm bg-blue-600 text-white py-2 px-6 shadow rounded-lg hover:bg-blue-700">← Voltar ao Catálogo</router-link>
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const produto = ref({})

const fetchProduto = async () => {
  const response = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
  produto.value = response.data
}

onMounted(fetchProduto)
</script>
