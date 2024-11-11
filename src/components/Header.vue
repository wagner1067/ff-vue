<template>
    <header>
      <!-- Navegação para Desktop -->
      <nav class="navbar navbar-light bg-white fixed-top border-bottom d-none d-md-flex">
        <div class="menu" @click="toggleSidebar" aria-label="Menu">
          <span class="icon icon-nav">
            <i class="bi bi-list"></i> <!-- Ícone de menu (hamburguer) -->
          </span>
        </div>

        <!-- Campo de busca -->
        <form class="d-flex mx-2" @submit.prevent="performSearch">
          <div class="input-group">
            <input
              class="form-control"
              type="search"
              placeholder="O que deseja procurar ?"
              aria-label="Search"
              v-model="searchQuery"
            />
            <button class="btn btn-outline-secondary" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </form>

        <!-- Logo da empresa -->
        <a class="navbar-brand mx-auto" href="#">
          <img src="../assets/images/logo.png" alt="Logo da Empresa" height="40" />
        </a>

        <ul class="navbar-nav ms-auto d-flex flex-row">
          <li class="nav-item mx-2">
            <a class="nav-link" href="#"><i class="bi bi-person"></i></a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#"><i class="bi bi-cart"></i></a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#"><i class="bi bi-heart"></i></a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#"><i class="bi bi-globe"></i></a>
          </li>
        </ul>
      </nav>

      <!-- Navegação para Mobile -->
      <nav class="navbar navbar-light bg-white fixed-top border-bottom d-md-none">
        <!-- Logo da empresa -->
        <div class="col-12">
          <div class="d-flex justify-content-center">
            <a class="navbar-brand" href="#">
              <img src="../assets/images/logo.png" alt="Logo da Empresa" height="40" />
            </a>
          </div>
        </div>
        <div class="col-12">
          <!-- Linha inferior com hamburguer e busca -->
          <div class="d-flex align-items-center" style="margin-left: 10px;">
            <div class="menu" @click="toggleSidebar" aria-label="Menu">
              <span class="icon icon-nav">
                <i class="bi bi-list"></i> <!-- Ícone de menu (hamburguer) -->
              </span>
            </div>

            <!-- Campo de busca -->
            <form class="ml-2 d-flex w-100" @submit.prevent="performSearch" style="margin-left: 10px;padding-right: 13px;">
              <div class="input-group flex-grow-1">
                <input
                  class="form-control"
                  type="search"
                  placeholder="O que deseja procurar ?"
                  aria-label="Search"
                  v-model="searchQuery"
                />
                <button class="btn btn-outline-secondary" type="submit">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <!-- Sidebar -->
      <div :class="['sidebar', { 'active': sidebarOpen }]" v-if="sidebarOpen">
        <div class="sidebar-content">
          <h3>Menu</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      </div>
    </header>
  </template>

  <script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'Header',
    setup() {
      const sidebarOpen = ref(false);
      const searchQuery = ref('');

      const toggleSidebar = () => {
        sidebarOpen.value = !sidebarOpen.value;
      };

      const performSearch = () => {
        console.log('Buscando por:', searchQuery.value);
      };

      return { sidebarOpen, toggleSidebar, searchQuery, performSearch };
    },
  });
  </script>

<style scoped>
.menu {
  cursor: pointer; /* Para mostrar que é clicável */
}

.icon {
  font-size: 24px; /* Tamanho do ícone */
}

/* Remover a margem e padding do header */
header {
  margin: 0; /* Garantir que não há margens ao redor do header */
  padding: 0; /* Remover qualquer preenchimento padrão */
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -250px; /* Inicialmente fora da tela */
  width: 250px;
  height: 100%;
  background-color: #ffffff; /* Fundo branco para o menu */
  color: #000; /* Cor do texto */
  transition: left 0.3s ease;
  padding: 20px;
  z-index: 1000;
}

.sidebar.active {
  left: 0; /* Ação ao abrir o menu */
}

.sidebar-content ul {
  list-style: none;
  padding: 0;
}

.sidebar-content a {
  color: #000; /* Cor do texto dos links */
  text-decoration: none;
  padding: 10px 20px;
  display: block;
  transition: background-color 0.3s; /* Transição suave para o hover */
}

.sidebar-content a:hover {
  background-color: #f8f9fa; /* Efeito hover claro */
}

/* Estilos adicionais para o navbar */
.navbar {
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1); /* Sombra leve para o navbar */
  margin-bottom: 0; /* Remove a margem inferior */
}

.navbar-brand img {
  height: 40px; /* Ajusta a altura da logo */
}

/* Estilos do input e botão de busca */
.input-group {
  position: relative; /* Para posicionar os elementos corretamente */
}

.input-group input {
  padding-right: 40px; /* Espaço para o botão da lupa */
  border-radius: 0.375rem 0 0 0.375rem; /* Bordas arredondadas apenas do lado esquerdo */
}

.input-group button {
  position: absolute;
  right: 0; /* Posiciona o botão à direita do input */
  top: 0;
  bottom: 0;
  height: 100%; /* Para que o botão tenha a mesma altura do input */
  border: none; /* Remove todas as bordas */
  background-color: transparent; /* Fundo transparente para combinar com o input */
  border-left: none; /* Remove a borda esquerda do botão */
  border-radius: 0 0.375rem 0.375rem 0; /* Bordas arredondadas apenas do lado direito */
  cursor: pointer; /* Muda o cursor para indicar que é clicável */
}
</style>
