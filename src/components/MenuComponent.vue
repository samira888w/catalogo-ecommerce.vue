<template>
  <div>
    <button @click="aberto = !aberto" class="block lg:hidden mb-4 bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      Categorias
    </button>
    
    <div :class="['bg-gray-200 shadow p-4 rounded-lg', aberto ? 'block' : 'hidden', 'lg:block']">
      <h2 class="text-lg font-bold mb-4 text-center">Categorias</h2>

      <div class="bg-white shadow px-6 py-3 mt-4 rounded-lg hover:bg-blue-50 cursor-pointer w-full">
        <button @click="$emit('selecionar-categoria', '')" class="flex justify-between items-center w-full text-blue-600 hover:no-underline capitalize">
          Todos <span> → </span>
        </button>
      </div>

      <ul>
        <li v-for="categoria in categorias" :key="categoria">
          <div class="bg-white shadow px-6 py-3 mt-4 rounded-lg hover:bg-blue-50 cursor-pointer w-full">
            <button
              @click="$emit('selecionar-categoria', categoria); aberto = false"
              class="flex justify-between items-center w-full text-blue-600 hover:no-underline capitalize">
              {{ categoria.replace('-', ' ') }}
              <span> → </span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  categorias: Array
})

const aberto = ref(false)
</script>