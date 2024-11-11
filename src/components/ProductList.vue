<template>
    <div>
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </template>

  <script>
  import ProductCard from './ProductCard.vue';

  export default {
    components: { ProductCard },
    props: {
      products: Array,
    },
  };
  </script>
