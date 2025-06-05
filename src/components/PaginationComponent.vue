<template>
  <div class="flex justify-center gap-4 mt-8">
    <button @click="$emit('anterior')" :disabled="desabilitarAnterior" :class="['px-6 py-2 rounded-lg shadow transition', desabilitarAnterior ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700']"> ← Anterior </button>

    <button @click="$emit('proximo')" :disabled="desabilitarProximo" :class="['px-6 py-2 rounded-lg shadow transition', desabilitarProximo ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700']"> Próximo → </button>
  </div>
</template>

<script setup>
defineProps({
  paginaAtual: Number,
  totalPaginas: Number,
  desabilitarAnterior: Boolean,
  desabilitarProximo: Boolean
})
</script>