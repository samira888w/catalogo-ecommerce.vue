<template>
  <input
    v-model="busca"
    @input="$emit('buscar', busca)"
    type="text"
    placeholder="Buscar produtos..."
    class="border px-3 py-2 rounded w-full mb-4"/>
</template>

<script setup>
import { ref } from 'vue'
const busca = ref('')
</script>
