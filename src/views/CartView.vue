<template>
  <div class="bg-gray-200 p-8 rounded-lg shadow">
    <h1 class="text-3xl font-bold mb-6 text-blue-700 text-center">Seu Carrinho</h1>
    <div v-if="carrinho.length > 0" class="flex justify-end mb-6">
      <router-link to="/catalogo" class="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"> ← Voltar ao Catálogo </router-link>
    </div>
    <div v-if="carrinho.length === 0" class="text-center text-gray-600"> O carrinho está vazio. </div>
    <div v-else class="space-y-4 mt-10">
      <div v-for="item in carrinho" :key="item.id" class="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white shadow p-4 rounded-lg">
        <div class="flex items-center gap-4">
          <img :src="item.thumbnail" class="w-20 h-20 object-cover rounded-lg">
          <div>
            <h2 class="font-semibold">{{ item.title }}</h2>
            <p class="text-sm text-gray-600">R$ {{ item.price }} cada</p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button @click="diminuir(item)" class="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400">-</button>
          <span class="font-bold">{{ item.quantidade }}</span>
          <button @click="aumentar(item)" class="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400">+</button>
          <button @click="remover(item.id)" class="text-red-600 hover:no-underline ml-4">Remover</button>
        </div>
      </div>

      <div class="gap-4 text-xl font-bold">
        Total: R$ {{ total }}
      </div>
      <div>
        <router-link to="#" class="inline-block bg-green-600 text-white py-3 px-6 rounded-lg shadow hover:bg-green-700 transition"> Finalizar Compra </router-link>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue'
import { carrinho } from '../store/cart.js'

function aumentar(item) {
  item.quantidade++
}

function diminuir(item) {
  if (item.quantidade > 1) item.quantidade--
}

function remover(id) {
  const index = carrinho.value.findIndex(p => p.id === id)
  if (index !== -1) carrinho.value.splice(index, 1)
}

const total = computed(() =>
  carrinho.value.reduce((soma, item) => soma + item.price * item.quantidade, 0).toFixed(2)
)
</script>