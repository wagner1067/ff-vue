import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import SearchResults from '@/views/SearchResults.vue';
import ProductDetail from '@/views/ProductDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/search', name: 'SearchResults', component: SearchResults },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
