<template>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar produtos, categorias ou marcas"
        @keyup.enter="handleSearch"
      />
      <button @click="handleSearch">Buscar</button>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'SearchBar',
    setup() {
      const searchQuery = ref('');

      const handleSearch = () => {
        // Lógica para lidar com a pesquisa
        console.log('Buscar:', searchQuery.value);
        // Aqui você pode emitir um evento ou chamar um método para fazer a pesquisa
      };

      return { searchQuery, handleSearch };
    },
  });
  </script>

  <style scoped>
  .search-bar {
    /* Adicione seu estilo aqui */
  }
  </style>
