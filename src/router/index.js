import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ReferencePage from '../views/ReferencePage.vue'
import Workbook from '../views/Workbook.vue'
import Contact from '../views/Contact.vue'
import Array1 from '../views/workbook/Array/1.vue'
import Array2 from '../views/workbook/Array/2.vue'
import Array3 from '../views/workbook/Array/3.vue'
import Array4 from '../views/workbook/Array/4.vue'
import Array5 from '../views/workbook/Array/5.vue'
import Array6 from '../views/workbook/Array/6.vue'
import Array7 from '../views/workbook/Array/7.vue'
import Array8 from '../views/workbook/Array/8.vue'
import Array9 from '../views/workbook/Array/9.vue'
import Array10 from '../views/workbook/Array/10.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/reference', component: ReferencePage },
  { path: '/workbook', component: Workbook },
  { path: '/contact', component: Contact },
  {
    path: '/workbook/algorithm',
    component: () => import('../views/workbook/Algorithm.vue'),
  },
  {
    path: '/workbook/list',
    component: () => import('../views/workbook/List.vue'),
  },
  {
    path: '/workbook/queue-stack',
    component: () => import('../views/workbook/QueueStack.vue'),
  },
  {
    path: '/workbook/tree',
    component: () => import('../views/workbook/TreeStructure.vue'),
  },
  {
    path: '/workbook/sort',
    component: () => import('../views/workbook/DataSorting.vue'),
  },
  {
    path: '/workbook/search',
    component: () => import('../views/workbook/DataSearching.vue'),
  },
  {
    path: '/workbook/complexity',
    component: () => import('../views/workbook/AlgorithmComplexity.vue'),
  },
  {
    path: '/workbook/attribute',
    component: () => import('../views/workbook/ProgramAttributes.vue'),
  },
  {
    path: '/reference/algorithm',
    component: () => import('../views/reference/Algorithm.vue'),
  },
  {
    path: '/reference/array',
    component: () => import('../views/reference/Array.vue'),
  },
  {
    path: '/reference/list',
    component: () => import('../views/reference/List.vue'),
  },
  {
    path: '/reference/queue-stack',
    component: () => import('../views/reference/QueueStack.vue'),
  },
  {
    path: '/reference/tree',
    component: () => import('../views/reference/TreeStructure.vue'),
  },
  {
    path: '/reference/sort',
    component: () => import('../views/reference/DataSorting.vue'),
  },
  {
    path: '/reference/search',
    component: () => import('../views/reference/DataSearching.vue'),
  },
  {
    path: '/reference/complexity',
    component: () => import('../views/reference/AlgorithmComplexity.vue'),
  },
  {
    path: '/reference/attribute',
    component: () => import('../views/reference/ProgramAttributes.vue'),
  },
  { path: '/workbook/array1', component: Array1 },
  { path: '/workbook/array2', component: Array2 },
  { path: '/workbook/array3', component: Array3 },
  { path: '/workbook/array4', component: Array4 },
  { path: '/workbook/array5', component: Array5 },
  { path: '/workbook/array6', component: Array6 },
  { path: '/workbook/array7', component: Array7 },
  { path: '/workbook/array8', component: Array8 },
  { path: '/workbook/array9', component: Array9 },
  { path: '/workbook/array10', component: Array10 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
