<template>
  <div class="bg-gray-200 shadow p-6 rounded-lg ">
    <aside class="w-48">
      <h2 class="text-lg font-bold mb-2 align-itens text-center">Categorias</h2>
      <div>
        <button @click="$emit('selecionar-categoria', '')" class="bg-white shadow px-16 py-2 mt-6 rounded-lg text-blue-600 hover:underline capitalize">Todos</button>
      </div>
      <ul>
        <li v-for="categoria in categorias" :key="categoria">
          <div class="bg-white shadow px-4 py-2 mb-6 mt-6 rounded-lg align-itens">
          <button
            @click="$emit('selecionar-categoria', categoria)"
            class="text-blue-600 hover:underline capitalize"
          >
            {{ categoria.replace('-', ' ') }}
          </button>
          </div>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script setup>
defineProps({
  categorias: Array
})
</script>
