import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ReferencePage from '../views/ReferencePage.vue'
import Workbook from '../views/Workbook.vue'
import Contact from '../views/Contact.vue'

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
    path: '/workbook/array',
    component: () => import('../views/workbook/Array.vue'),
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
