<template>
  <div class="rounded-lg p-4 text-black shadow-md bg-gray-300 hover:transform hover:scale-105">
    <img :src="produto.thumbnail" :alt="produto.title" class="mx-auto mb-2 h-32 object-cover">
    <h2 class="text-center font-bold">{{ produto.title }}</h2>
    <p class="text-center text-sm">R$ {{ produto.price }}</p>
    <div class="flex justify-center gap-3 mt-4 flex-wrap">
      <router-link :to="`/product/${produto.id}`">
        <button class="btn text-sm bg-blue-600 text-white px-4 py-2 shadow rounded-lg hover:bg-blue-700 whitespace-nowrap"> Ver detalhes </button>
      </router-link>
      <button
        @click="adicionar(produto)"
        :disabled="jaAdicionado"
        :class="['btn text-sm px-4 py-2 shadow rounded-lg', jaAdicionado ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700']">
        {{ jaAdicionado ? 'Adicionado' : '+ Carrinho' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { carrinho, adicionarAoCarrinho } from '../store/cart.js'
import { computed } from 'vue'

const { produto } = defineProps({
  produto: Object
})

function adicionar(produto) {
  adicionarAoCarrinho(produto)
}

const jaAdicionado = computed(() => {
  return carrinho.value.some(item => item.id === produto.id)
})
</script>