<template>
    <nav class="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
        <h1 class="text-lg font-bold">E-commerce</h1>
        <ul class="flex gap-6">
            <li>
                <router-link to="/" class="hover:no-underline">Início</router-link>
            </li>
            <li>
                <router-link to="/catalogo" class="hover:no-underline">Catálogo</router-link>
            </li>
            <li>
                <router-link to="/carrinho" class="bg-blue-200 text-black py-2 px-4 rounded hover:no-underline relative"> 🛒 Carrinho 
                    <span v-if="quantidade > 0" class="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {{ quantidade }}
                    </span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { computed } from 'vue'
import { carrinho } from '../store/cart.js'

const quantidade = computed(() =>
  carrinho.value.reduce((soma, item) => soma + item.quantidade, 0)
)
</script>