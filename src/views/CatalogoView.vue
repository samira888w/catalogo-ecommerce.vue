<template>
  <div class="flex gap-8">
    <MenuComponent :categorias="categorias" @selecionar-categoria="selecionarCategoria" />

    <div class="flex-1">
      <PesquisaComponent @buscar="buscarProdutos" />
      <ProductGridComponent :produtos="produtos" />
      <PaginationComponent
          v-if="!emBusca"
          :paginaAtual="paginaAtual"
          :totalPaginas="totalPaginas"
          @anterior="anterior"
          @proximo="proximo"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

import ProductGridComponent from '../components/ProductGridComponent.vue'
import PesquisaComponent from '../components/PesquisaComponent.vue'
import PaginationComponent from '../components/PaginationComponent.vue'
import MenuComponent from '../components/MenuComponent.vue'

const produtos = ref([])
const categorias = ref([])
const categoriaSelecionada = ref('')
const termoBusca = ref('')
const skip = ref(0)
const limit = 28

const fetchProdutos = async () => {
  const url = categoriaSelecionada.value
    ? `https://dummyjson.com/products/category/${categoriaSelecionada.value}?limit=${limit}&skip=${skip.value}`
    : `https://dummyjson.com/products?limit=${limit}&skip=${skip.value}`

  const response = await axios.get(url)
  produtos.value = response.data.products
}

const fetchCategorias = async () => {
  const response = await axios.get('https://dummyjson.com/products/categories')
  categorias.value = response.data.map(c => typeof c === 'string' ? c : c.slug)
}

const emBusca = ref(false)

const buscarProdutos = async (busca) => {
  termoBusca.value = busca

  if (!busca) {
    emBusca.value = false
    fetchProdutos()
    return
  }

  emBusca.value = true

  const response = await axios.get(`https://dummyjson.com/products/search?q=${busca}`)
  produtos.value = response.data.products
  totalPaginas.value = 1
  paginaAtual.value = 1
}



const selecionarCategoria = (categoria) => {
  categoriaSelecionada.value = categoria
  skip.value = 0
  fetchProdutos()
}

const anterior = () => {
  if (skip.value > 0) {
    skip.value -= limit
    fetchProdutos()
  }
}

const proximo = () => {
  skip.value += limit
  fetchProdutos()
}

onMounted(() => {
  fetchProdutos()
  fetchCategorias()
})
</script>
