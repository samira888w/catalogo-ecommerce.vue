import { createRouter, createWebHistory } from 'vue-router'
import CatalogoView from '../views/CatalogoView.vue'
import HomeView from '../views/HomeView.vue';
import DetailsView from '../components/ProductDetailsComponent.vue';

const routes = [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/catalogo",
      name: "catalogo",
      component: CatalogoView,
    },
    {
      path: "/details",
      name: "detils",
      component: DetailsView,
    },
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router
