<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ProductCardComponent
      v-for="p in produtos"
      :key="p.id"
      :produto="p"
    />
  </div>
</template>

<script setup>
import ProductCardComponent from './ProductCardComponent.vue'
defineProps({
  produtos: Array
})
</script>
