<template>
    <nav class="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
        <h1 class="text-lg font-bold">E-commerce</h1>
        <ul class="flex gap-6">
            <li>
                <router-link to="/" class="hover:underline">Início</router-link>
            </li>
            <li>
                <router-link to="/catalogo" class="hover:underline">Catálogo</router-link>
            </li>
        </ul>
    </nav>
</template>