<template>
  <nav class="bg-blue-600 text-white py-4 px-6">
    <div class="flex justify-between items-center flex-wrap gap-4">
      <h1 class="text-lg font-bold whitespace-nowrap">
        E-commerce
      </h1>
      <ul class="flex items-center gap-4 flex-wrap">
        <li>
          <router-link to="/" class="hover:no-underline whitespace-nowrap">Início</router-link>
        </li>
        <li>
          <router-link to="/catalogo" class="hover:no-underline whitespace-nowrap">Catálogo</router-link>
        </li>
        <li>
          <router-link to="/carrinho" class="bg-blue-200 text-black py-2 px-4 rounded relative whitespace-nowrap">
            🛒 Carrinho
            <span
              v-if="quantidade > 0"
              class="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {{ quantidade }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script setup>
import { computed } from 'vue'
import { carrinho } from '../store/cart.js'

const quantidade = computed(() =>
  carrinho.value.reduce((soma, item) => soma + item.quantidade, 0)
)
</script>
