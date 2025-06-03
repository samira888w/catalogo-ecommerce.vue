<template>
  <div>
    <h1 class="text-3xl font-bold text-center mb-6 mt-6">Detalhes do Produto</h1>

    <div class="max-w-lg mx-auto bg-gray-200 p-6 rounded shadow">
      <img :src="produto.thumbnail" :alt="produto.title" class="w-full mb-4 rounded">
      <h2 class="text-2xl font-bold mb-2">{{ produto.title }}</h2>
      <p class="text-gray-800 mb-2">Preço: R$ {{ produto.price }}</p>
      <p class="text-gray-700 mb-4">{{ produto.description }}</p>
      <router-link to="/catalog" class="text-blue-600 hover:underline">← Voltar ao Catálogo</router-link>
    </div>
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
