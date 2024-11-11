<template>
    <div class="banner">
      <img :src="computedBannerImage" :alt="bannerAltText" class="banner-image" />
    </div>
  </template>

  <script lang="ts">
  import { defineComponent, PropType, computed } from 'vue';

  export default defineComponent({
    name: 'Banner',
    props: {
      bannerAltText: {
        type: String as PropType<string>,
        required: true,
      },
    },
    setup() {
      const isMobile = computed(() => {
        return window.innerWidth < 768; // Ou qualquer largura que você considerar como limite para mobile
      });

      const computedBannerImage = computed(() => {
        return isMobile.value
          ? require('@/assets/images/mobile.jpg')
          : require('@/assets/images/desktop.jpg');
      });

      return { computedBannerImage };
    },
  });
  </script>

  <style scoped>
  .banner {
    /* Adicione seu estilo aqui */
  }
  .banner-image {
    width: 100%; /* Ajusta a largura da imagem para ocupar toda a largura do contêiner */
    height: auto; /* Mantém a proporção da imagem */
  }
  </style>
