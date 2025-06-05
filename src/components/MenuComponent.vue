<template>
  <div class="bg-gray-200 shadow p-6 rounded-lg w-[300px] ">
    <aside>
      <h2 class="text-lg font-bold mb-4 text-center">Categorias</h2>
      <div class="bg-white shadow px-6 py-3 mt-4 rounded-lg hover:bg-blue-50 cursor-pointer w-[260px]">
        <button @click="$emit('selecionar-categoria', '')" class="flex justify-between items-center w-full text-blue-600 hover:no-underline capitalize whitespace-nowrap">
          Todos 
          <span> → </span>
        </button>
      </div>
      <ul>
        <li v-for="categoria in categorias" :key="categoria">
          <div class="bg-white shadow px-6 py-3 mt-4 rounded-lg hover:bg-blue-50 cursor-pointer w-[260px]">
            <button @click="$emit('selecionar-categoria', categoria)" class="flex justify-between items-center w-full text-blue-600 hover:no-underline capitalize whitespace-nowrap">
              {{ categoria.replace('-', ' ') }}
              <span> → </span>
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
