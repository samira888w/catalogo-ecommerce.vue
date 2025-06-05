<template>
  <div class="flex flex-col lg:flex-row gap-8 items-start">
    <MenuComponent :categorias="categorias" @selecionar-categoria="selecionarCategoria" />

    <div class="flex-1">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <SearchComponent @buscar="buscarProdutos" />

        <OrderingComponent @ordenar="ordenarProdutos" />
      </div>

      <ProductGridComponent 
        :produtos="produtos"
        @selecionar-produto="verDetalhes"/>
  
      <PaginationComponent
        v-if="!emBusca && totalProdutos > limit"
        :paginaAtual="paginaAtual"
        :totalPaginas="totalPaginas"
        :desabilitarAnterior="desabilitarAnterior"
        :desabilitarProximo="desabilitarProximo"
        @anterior="anterior"
        @proximo="proximo"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

import ProductGridComponent from '../components/ProductGridComponent.vue'
import SearchComponent from '../components/SearchComponent.vue'
import PaginationComponent from '../components/PaginationComponent.vue'
import MenuComponent from '../components/MenuComponent.vue'
import OrderingComponent from '../components/OrderingComponent.vue'


const router = useRouter()
const produtos = ref([])
const categorias = ref([])
const categoriaSelecionada = ref('')
const termoBusca = ref('')
const skip = ref(0)
const limit = 20
const totalProdutos = ref(0)
const emBusca = ref(false)
const paginaAtual = ref(1)
const totalPaginas = ref(1)
const desabilitarAnterior = computed(() => paginaAtual.value <= 1)
const desabilitarProximo = computed(() => paginaAtual.value >= totalPaginas.value)


const fetchProdutos = async () => {
  let response
  if (categoriaSelecionada.value) {
    response = await axios.get(`https://dummyjson.com/products/category/${categoriaSelecionada.value}?limit=${limit}&skip=${skip.value}`)
    totalProdutos.value = response.data.total || response.data.products.length
  } else {
    response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip.value}`)
    totalProdutos.value = response.data.total
  }

  produtos.value = response.data.products
  totalPaginas.value = Math.ceil(totalProdutos.value / limit)
}

const fetchCategorias = async () => {
  const response = await axios.get('https://dummyjson.com/products/categories')
  categorias.value = response.data.map(c => typeof c === 'string' ? c : c.slug)
}

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

const ordenarProdutos = (ordem) => {
  if (ordem === 'asc') {
    produtos.value.sort((a, b) => a.price - b.price)
  } else if (ordem === 'desc') {
    produtos.value.sort((a, b) => b.price - a.price)
  } else if (ordem === 'az') {
    produtos.value.sort((a, b) => a.title.localeCompare(b.title))
  } else if (ordem === 'za') {
    produtos.value.sort((a, b) => b.title.localeCompare(a.title))
  } else {
    fetchProdutos()
  }
}


const selecionarCategoria = (categoria) => {
  categoriaSelecionada.value = categoria
  paginaAtual.value = 1
  skip.value = 0
  fetchProdutos()
}

const verDetalhes = (produto) => {
  router.push(`/product/${produto.id}`)
}

const anterior = () => {
  if (paginaAtual.value > 1) {
    paginaAtual.value--
    skip.value = (paginaAtual.value - 1) * limit
    fetchProdutos()
  }
}

const proximo = () => {
  if (paginaAtual.value < totalPaginas.value) {
    paginaAtual.value++
    skip.value = (paginaAtual.value - 1) * limit
    fetchProdutos()
  }
}

onMounted(() => {
  fetchProdutos()
  fetchCategorias()
})
</script>