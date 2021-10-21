import { createRouter, createWebHistory } from 'vue-router'
import AddCurrency from '../views/AddCurrency.vue';
import CurrencyTable from '../views/CurrencyTable.vue';
import CurrencyConverter from '../views/CurrencyConverter.vue';

const routes = [
  {
    path: '/',
    redirect: '/table'
  },
  {
    path: '/add',
    name: 'AddCurrency',
    component: AddCurrency
  },
  {
    path: '/table',
    name: 'CurrencyTable',
    component: CurrencyTable
  },
  {
    path: '/converter',
    name: 'CurrencyConverter',
    component: CurrencyConverter
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/table'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
