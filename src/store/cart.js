import { ref } from 'vue'

export const carrinho = ref([])

export function adicionarAoCarrinho(produto) {
  const itemExistente = carrinho.value.find(item => item.id === produto.id)
  if (itemExistente) {
    itemExistente.quantidade++
  } else {
    carrinho.value.push({ ...produto, quantidade: 1 })
  }
}

export function removerDoCarrinho(id) {
  carrinho.value = carrinho.value.filter(item => item.id !== id)
}

export function limparCarrinho() {
  carrinho.value = []
}