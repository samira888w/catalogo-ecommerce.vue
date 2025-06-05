<template>
  <section class="flex flex-col justify-center items-center text-center mt-40">
    <h1 class="text-4xl font-bold mb-6 text-blue-700">Bem-vindo ao E-commerce da Unimar</h1>
    <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
      Explore nosso catálogo com dezenas de produtos incríveis! Você pode navegar por categorias,
      buscar por nome, visualizar detalhes e muito mais.
    </p>
    <router-link
      to="/catalogo"
      class="inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
    >
      Ir para o Catálogo
    </router-link>

    <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white shadow p-6 rounded">
        <h2 class="text-xl font-semibold mb-2">📦 Catálogo</h2>
        <p class="text-gray-600">Visualize todos os nossos produtos com informações detalhadas.</p>
      </div>
      <div class="bg-white shadow p-6 rounded">
        <h2 class="text-xl font-semibold mb-2">🔍 Busca Inteligente</h2>
        <p class="text-gray-600">Encontre produtos rapidamente usando nossa busca em tempo real.</p>
      </div>
      <div class="bg-white shadow p-6 rounded">
        <h2 class="text-xl font-semibold mb-2">📁 Categorias</h2>
        <p class="text-gray-600">Navegue por categorias para encontrar produtos específicos.</p>
      </div>
    </div>
  </section>
</template>

