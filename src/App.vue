<template>
  <div>
    <!-- Inclui o header fixo -->
    <Header />
    <!-- Exibe o conteúdo da página atual -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue'; // Importa o componente de header

export default defineComponent({
  name: 'App',
  components: {
    Header, // Adiciona o header aos componentes disponíveis
  },
});
</script>

<style>
/* Estilos globais */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  padding-top: 80px; /* Compensa a altura do header fixo */
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
</style>
