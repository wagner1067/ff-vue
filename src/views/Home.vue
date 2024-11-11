<template>
    <div class="home mt-4 mt-md-0">
      <!-- Primeira seção de banners -->
    <div class="banner-section">
      <div class="row">
        <div class="col-12 col-md-9">
          <Carousel :items-to-show="1" :wrap-around="true" :mouse-drag="true">
            <Slide v-for="(banner, index) in banners1" :key="index">
              <img :src="getBannerImage(banner)" :alt="banner.title" class="banner-image img-fluid" />
            </Slide>
          </Carousel>
        </div>
        <div class="col-3 d-none d-md-block">
          <img :src="getBannerImage(bannerD2[0])" :alt="bannerD2[0].title" class="banner-image static-banner img-fluid" />
        </div>
      </div>
      <div class="d-md-none">
        <div class="col-12">
          <img :src="getBannerImage(bannerD2[0])" :alt="bannerD2[0].title" class="banner-image static-banner img-fluid" />
        </div>
      </div>
    </div>

    <div class="home mt-4 mt-md-0">
    <!-- Primeira seção de produtos em destaque -->
    <div class="product-section mb-4">
      <h2 class="text-center mb-3">Produtos em Destaque</h2>
      <div v-if="isMobile">
        <!-- Exibir como carrossel em dispositivos móveis -->
        <Carousel :items-to-show="1" :wrap-around="true" :mouse-drag="true" :scroll-per-page="true">
          <Slide v-for="product in products1" :key="product.id">
            <ProductCard :product="product" />
          </Slide>
        </Carousel>
      </div>
      <div v-else class="d-flex flex-wrap justify-content-center">
        <!-- Exibir de forma estática em telas maiores -->
        <div v-for="product in products1" :key="product.id" class="col-12 col-sm-6 col-md-3 mb-3">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>

      <!-- Segunda seção de banners -->
      <div class="banner-section mb-4">
        <h2 class="text-center mb-3">Ofertas Especiais</h2>
        <Carousel :items-to-show="1" :wrap-around="true" :mouse-drag="true">
          <Slide v-for="(banner, index) in banners2" :key="index">
            <img :src="getBannerImage(banner)" :alt="banner.title" class="banner-image img-fluid" />
          </Slide>
        </Carousel>
      </div>

      <!-- Segunda seção de produtos -->
      <div class="product-section mb-4">
        <h2 class="text-center mb-3">Mais Vendidos</h2>
        <Carousel :items-to-show="4" :wrap-around="true" :mouse-drag="true">
          <Slide v-for="product in products2" :key="product.id">
            <ProductCard :product="product" />
          </Slide>
        </Carousel>
      </div>

      <!-- Terceira seção de banners -->
      <div class="banner-section mb-4">
        <h2 class="text-center mb-3">Lançamentos</h2>
        <Carousel :items-to-show="1" :wrap-around="true" :mouse-drag="true">
          <Slide v-for="(banner, index) in banners3" :key="index">
            <img :src="getBannerImage(banner)" :alt="banner.title" class="banner-image img-fluid" />
          </Slide>
        </Carousel>
      </div>

      <!-- Terceira seção de produtos -->
      <div class="product-section mb-4">
        <h2 class="text-center mb-3">Novidades</h2>
        <Carousel :items-to-show="4" :wrap-around="true" :mouse-drag="true">
          <Slide v-for="product in products3" :key="product.id">
            <ProductCard :product="product" />
          </Slide>
        </Carousel>
      </div>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
  import { Carousel, Slide } from 'vue3-carousel';
  import ProductCard from '@/components/ProductCard.vue';
  import 'vue3-carousel/dist/carousel.css';

  // Importe suas imagens aqui
  import bannerD from '@/assets/images/desktop.png';
  import bannerM from '@/assets/images/mobile.png';
  import maraisaM from '@/assets/images/maraisa-m.jpeg';
  import maraisaD from '@/assets/images/maraisa-d.jpeg';
  import xbriM from '@/assets/images/xbri-m.jpg';
  import xbriD from '@/assets/images/xbri-d.jpg';
  import produto from '@/assets/images/produto.webp';


  export default defineComponent({
    name: 'Home',
    components: {
      Carousel,
      Slide,
      ProductCard,
    },
    setup() {
      const banners1 = ref([
        { desktopImage: xbriD, mobileImage: xbriM, title: 'Banner 1' },
        { desktopImage: xbriD, mobileImage: xbriM, title: 'Banner 2' },
        { desktopImage: xbriD, mobileImage: xbriM, title: 'Banner 3' },
      ]);

      const bannerD2 = ref([
        { desktopImage: maraisaD, mobileImage: maraisaM, title: 'Banner 1' },
      ]);

      const products1 = ref([
        { id: 1, name: 'Produto 1', price: 49.99, image: produto },
        { id: 2, name: 'Produto 2', price: 99.99, image: produto },
        { id: 3, name: 'Produto 3', price: 29.99, image: produto },
        { id: 4, name: 'Produto 4', price: 19.99, image: produto },
      ]);

      const banners2 = ref([
        { desktopImage: bannerD, mobileImage: bannerM, title: 'Banner 4' },
        { desktopImage: bannerD, mobileImage: bannerM, title: 'Banner 5' },
      ]);

      const products2 = ref([
        { id: 7, name: 'Produto 7', price: 69.99, image: produto },
        { id: 8, name: 'Produto 8', price: 89.99, image: produto },
        { id: 9, name: 'Produto 9', price: 99.99, image: produto },
        { id: 10, name: 'Produto 10', price: 79.99, image: produto },
        { id: 11, name: 'Produto 11', price: 109.99, image: produto },
        { id: 12, name: 'Produto 12', price: 129.99, image: produto },
      ]);

      const banners3 = ref([
        { desktopImage: bannerD, mobileImage: bannerM, title: 'Banner 6' },
      ]);

      const products3 = ref([
        { id: 13, name: 'Produto 13', price: 139.99, image: produto },
        { id: 14, name: 'Produto 14', price: 159.99, image: produto },
        { id: 15, name: 'Produto 15', price: 149.99, image: produto },
        { id: 16, name: 'Produto 16', price: 199.99, image: produto },
        { id: 17, name: 'Produto 17', price: 189.99, image: produto },
        { id: 18, name: 'Produto 18', price: 219.99, image: produto },
      ]);

      const isMobile = ref(window.innerWidth <= 768);

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

      const getBannerImage = (banner) => {
        return isMobile.value ? banner.mobileImage : banner.desktopImage;
      };

      return {
        banners1,
        bannerD2,
        banners2,
        banners3,
        products1,
        products2,
        products3,
        getBannerImage,
        produto,
        isMobile,
      };
    },
  });
  </script>

<style scoped>
.home {
  max-width: 1600px; /* Limitar a largura máxima */
  margin: auto; /* Centralizar horizontalmente */
}

.banner-section,
.product-section {
  margin-bottom: 40px; /* Espaçamento entre seções */
}

.product-card {
  margin-bottom: 20px; /* Espaçamento entre cards de produtos */
}

.banner-image {
  object-fit: contain; /* Mantém a proporção da imagem sem distorcer */
  width: 100%; /* Largura máxima para manter a responsividade */
}

.static-banner {
  height:auto;
  width: auto;
}

/* Ajuste a altura máxima conforme necessário */
</style>
