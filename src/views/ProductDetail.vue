<template>
    <div>
      <h1>Detalhes do Produto</h1>
      <!-- Exiba os detalhes do produto aqui -->
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ProductDetail',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
  });
  </script>

  <style scoped>
  /* Estilos específicos do ProductDetail */
  </style>
