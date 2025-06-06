<template>
  <select v-model="ordemSelecionada" @change="$emit('ordenar', ordemSelecionada)" class="bg-gray-100 border px-3 py-2 rounded mb-4">
    <option value="">Sem ordenação</option>
    <option value="asc">Preço: Menor para Maior</option>
    <option value="desc">Preço: Maior para Menor</option>
    <option value="az">Nome: A-Z</option>
    <option value="za">Nome: Z-A</option>
  </select>
</template>

<script setup>
import { ref } from 'vue'
const ordemSelecionada = ref('')
</script>