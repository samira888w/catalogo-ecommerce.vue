<template>
  <div class="flex justify-center gap-6 mt-8">
    <button @click="$emit('anterior')" class="btn px-4 py-2 rounded-lg bg-black text-white shadow hover:bg-blue-700 transition">← Anterior</button>
    <button @click="$emit('proximo')" class="btn px-4 py-2 rounded-lg bg-black text-white shadow hover:bg-blue-700 transition">Próximo →</button>
  </div>
</template>
