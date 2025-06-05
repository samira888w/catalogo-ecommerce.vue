<template>
  <div>
    <h1 class="text-3xl font-bold text-center mb-8 mt-6 text-blue-700">Detalhes do Produto</h1>

    <div class="max-w-5xl mx-auto bg-gray-200 p-8 rounded-lg shadow flex flex-col md:flex-row gap-8">
      <div class="bg-gray-100 flex-1 flex items-center justify-center rounded-lg">
        <img :src="produto.thumbnail" :alt="produto.title" class="w-full max-w-sm rounded" />
      </div>

      <div class="flex-1 flex flex-col justify-between">
        <div>
          <h2 class="text-3xl font-bold mb-4 text-gray-800">{{ produto.title }}</h2>
          <p class="text-gray-800 text-lg font-semibold mb-6">Preço: R$ {{ produto.price }}</p>
          <p class="text-gray-700 text-base leading-relaxed mb-8">{{ produto.description }}</p>
        </div>

        <button 
          @click="adicionar"
          :disabled="jaAdicionado"
          :class="['bg-green-600 text-white py-3 px-6 rounded-lg shadow transition mb-4', jaAdicionado ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400' : 'hover:bg-green-700']">
          {{ jaAdicionado ? 'Adicionado' : '+ Carrinho' }}
        </button>

        <router-link to="/catalogo" class="self-start bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"> ← Voltar ao Catálogo </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { carrinho, adicionarAoCarrinho } from '../store/cart.js'

const route = useRoute()
const produto = ref({})

const fetchProduto = async () => {
  const response = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
  produto.value = response.data
  console.log('Produto carregado:', produto.value)
}

onMounted(fetchProduto)

const jaAdicionado = computed(() => {
  return produto.value.id && carrinho.value.some(item => item.id === produto.value.id)
})

function adicionar() {
  adicionarAoCarrinho(produto.value)
}
</script>

