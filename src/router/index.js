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
import Grammar1 from '../views/workbook/Grammar/1.vue'
import Grammar2 from '../views/workbook/Grammar/2.vue'
import Grammar3 from '../views/workbook/Grammar/3.vue'
import Grammar4 from '../views/workbook/Grammar/4.vue'
import Grammar5 from '../views/workbook/Grammar/5.vue'
import Grammar6 from '../views/workbook/Grammar/6.vue'
import Grammar7 from '../views/workbook/Grammar/7.vue'
import Grammar8 from '../views/workbook/Grammar/8.vue'
import Grammar9 from '../views/workbook/Grammar/9.vue'
import Grammar10 from '../views/workbook/Grammar/10.vue'
import List1 from '../views/workbook/List/1.vue'
import List2 from '../views/workbook/List/2.vue'
import List3 from '../views/workbook/List/3.vue'
import List4 from '../views/workbook/List/4.vue'
import List5 from '../views/workbook/List/5.vue'
import List6 from '../views/workbook/List/6.vue'
import List7 from '../views/workbook/List/7.vue'
import List8 from '../views/workbook/List/8.vue'
import List9 from '../views/workbook/List/9.vue'
import List10 from '../views/workbook/List/10.vue'
import QueueStack1 from '../views/workbook/QueueStack/1.vue'
import QueueStack2 from '../views/workbook/QueueStack/2.vue'
import QueueStack3 from '../views/workbook/QueueStack/3.vue'
import QueueStack4 from '../views/workbook/QueueStack/4.vue'
import QueueStack5 from '../views/workbook/QueueStack/5.vue'
import QueueStack6 from '../views/workbook/QueueStack/6.vue'
import QueueStack7 from '../views/workbook/QueueStack/7.vue'
import QueueStack8 from '../views/workbook/QueueStack/8.vue'
import QueueStack9 from '../views/workbook/QueueStack/9.vue'
import QueueStack10 from '../views/workbook/QueueStack/10.vue'
import TreeStructure1 from '../views/workbook/TreeStructure/1.vue'
import TreeStructure2 from '../views/workbook/TreeStructure/2.vue'
import TreeStructure3 from '../views/workbook/TreeStructure/3.vue'
import TreeStructure4 from '../views/workbook/TreeStructure/4.vue'
import TreeStructure5 from '../views/workbook/TreeStructure/5.vue'
import TreeStructure6 from '../views/workbook/TreeStructure/6.vue'
import TreeStructure7 from '../views/workbook/TreeStructure/7.vue'
import TreeStructure8 from '../views/workbook/TreeStructure/8.vue'
import TreeStructure9 from '../views/workbook/TreeStructure/9.vue'
import TreeStructure10 from '../views/workbook/TreeStructure/10.vue'
import Recursion1 from '../views/workbook/Recursion/1.vue'
import Recursion2 from '../views/workbook/Recursion/2.vue'
import Recursion3 from '../views/workbook/Recursion/3.vue'
import Recursion4 from '../views/workbook/Recursion/4.vue'
import Recursion5 from '../views/workbook/Recursion/5.vue'
import Recursion6 from '../views/workbook/Recursion/6.vue'
import Recursion7 from '../views/workbook/Recursion/7.vue'
import Recursion8 from '../views/workbook/Recursion/8.vue'
import Recursion9 from '../views/workbook/Recursion/9.vue'
import Recursion10 from '../views/workbook/Recursion/10.vue'
import Object1 from '../views/workbook/Object/1.vue'
import Object2 from '../views/workbook/Object/2.vue'
import Object3 from '../views/workbook/Object/3.vue'
import Object4 from '../views/workbook/Object/4.vue'
import Object5 from '../views/workbook/Object/5.vue'
import Object6 from '../views/workbook/Object/6.vue'
import Object7 from '../views/workbook/Object/7.vue'
import Object8 from '../views/workbook/Object/8.vue'
import Object9 from '../views/workbook/Object/9.vue'
import Object10 from '../views/workbook/Object/10.vue'
import Bit1 from '../views/workbook/Bit/1.vue'
import Bit2 from '../views/workbook/Bit/2.vue'
import Bit3 from '../views/workbook/Bit/3.vue'
import Bit4 from '../views/workbook/Bit/4.vue'
import Bit5 from '../views/workbook/Bit/5.vue'
import Bit6 from '../views/workbook/Bit/6.vue'
import Bit7 from '../views/workbook/Bit/7.vue'
import Bit8 from '../views/workbook/Bit/8.vue'
import Bit9 from '../views/workbook/Bit/9.vue'
import Bit10 from '../views/workbook/Bit/10.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/reference', component: ReferencePage },
  { path: '/workbook', component: Workbook },
  { path: '/contact', component: Contact },

  {
    path: '/reference/grammar',
    component: () => import('../views/reference/Grammar.vue'),
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
    path: '/reference/recursion',
    component: () => import('../views/reference/Recursion.vue'),
  },
  {
    path: '/reference/object',
    component: () => import('../views/reference/Object.vue'),
  },
  {
    path: '/reference/bit',
    component: () => import('../views/reference/Bit.vue'),
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
  { path: '/workbook/grammar1', component: Grammar1 },
  { path: '/workbook/grammar2', component: Grammar2 },
  { path: '/workbook/grammar3', component: Grammar3 },
  { path: '/workbook/grammar4', component: Grammar4 },
  { path: '/workbook/grammar5', component: Grammar5 },
  { path: '/workbook/grammar6', component: Grammar6 },
  { path: '/workbook/grammar7', component: Grammar7 },
  { path: '/workbook/grammar8', component: Grammar8 },
  { path: '/workbook/grammar9', component: Grammar9 },
  { path: '/workbook/grammar10', component: Grammar10 },
  { path: '/workbook/list1', component: List1 },
  { path: '/workbook/list2', component: List2 },
  { path: '/workbook/list3', component: List3 },
  { path: '/workbook/list4', component: List4 },
  { path: '/workbook/list5', component: List5 },
  { path: '/workbook/list6', component: List6 },
  { path: '/workbook/list7', component: List7 },
  { path: '/workbook/list8', component: List8 },
  { path: '/workbook/list9', component: List9 },
  { path: '/workbook/list10', component: List10 },

  { path: '/workbook/queue-stack1', component: QueueStack1 },
  { path: '/workbook/queue-stack2', component: QueueStack2 },
  { path: '/workbook/queue-stack3', component: QueueStack3 },
  { path: '/workbook/queue-stack4', component: QueueStack4 },
  { path: '/workbook/queue-stack5', component: QueueStack5 },
  { path: '/workbook/queue-stack6', component: QueueStack6 },
  { path: '/workbook/queue-stack7', component: QueueStack7 },
  { path: '/workbook/queue-stack8', component: QueueStack8 },
  { path: '/workbook/queue-stack9', component: QueueStack9 },
  { path: '/workbook/queue-stack10', component: QueueStack10 },
  { path: '/workbook/tree-structure1', component: TreeStructure1 },
  { path: '/workbook/tree-structure2', component: TreeStructure2 },
  { path: '/workbook/tree-structure3', component: TreeStructure3 },
  { path: '/workbook/tree-structure4', component: TreeStructure4 },
  { path: '/workbook/tree-structure5', component: TreeStructure5 },
  { path: '/workbook/tree-structure6', component: TreeStructure6 },
  { path: '/workbook/tree-structure7', component: TreeStructure7 },
  { path: '/workbook/tree-structure8', component: TreeStructure8 },
  { path: '/workbook/tree-structure9', component: TreeStructure9 },
  { path: '/workbook/tree-structure10', component: TreeStructure10 },
  { path: '/workbook/recursion1', component: Recursion1 },
  { path: '/workbook/recursion2', component: Recursion2 },
  { path: '/workbook/recursion3', component: Recursion3 },
  { path: '/workbook/recursion4', component: Recursion4 },
  { path: '/workbook/recursion5', component: Recursion5 },
  { path: '/workbook/recursion6', component: Recursion6 },
  { path: '/workbook/recursion7', component: Recursion7 },
  { path: '/workbook/recursion8', component: Recursion8 },
  { path: '/workbook/recursion9', component: Recursion9 },
  { path: '/workbook/recursion10', component: Recursion10 },
  { path: '/workbook/object1', component: Object1 },
  { path: '/workbook/object2', component: Object2 },
  { path: '/workbook/object3', component: Object3 },
  { path: '/workbook/object4', component: Object4 },
  { path: '/workbook/object5', component: Object5 },
  { path: '/workbook/object6', component: Object6 },
  { path: '/workbook/object7', component: Object7 },
  { path: '/workbook/object8', component: Object8 },
  { path: '/workbook/object9', component: Object9 },
  { path: '/workbook/object10', component: Object10 },
  { path: '/workbook/bit1', component: Bit1 },
  { path: '/workbook/bit2', component: Bit2 },
  { path: '/workbook/bit3', component: Bit3 },
  { path: '/workbook/bit4', component: Bit4 },
  { path: '/workbook/bit5', component: Bit5 },
  { path: '/workbook/bit6', component: Bit6 },
  { path: '/workbook/bit7', component: Bit7 },
  { path: '/workbook/bit8', component: Bit8 },
  { path: '/workbook/bit9', component: Bit9 },
  { path: '/workbook/bit10', component: Bit10 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
