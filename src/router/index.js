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
import Algorithm1 from '../views/workbook/Algorithm/1.vue'
import Algorithm2 from '../views/workbook/Algorithm/2.vue'
import Algorithm3 from '../views/workbook/Algorithm/3.vue'
import Algorithm4 from '../views/workbook/Algorithm/4.vue'
import Algorithm5 from '../views/workbook/Algorithm/5.vue'
import Algorithm6 from '../views/workbook/Algorithm/6.vue'
import Algorithm7 from '../views/workbook/Algorithm/7.vue'
import Algorithm8 from '../views/workbook/Algorithm/8.vue'
import Algorithm9 from '../views/workbook/Algorithm/9.vue'
import Algorithm10 from '../views/workbook/Algorithm/10.vue'
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
import AlgorithmComplexity1 from '../views/workbook/AlgorithmComplexity/1.vue'
import AlgorithmComplexity2 from '../views/workbook/AlgorithmComplexity/2.vue'
import AlgorithmComplexity3 from '../views/workbook/AlgorithmComplexity/3.vue'
import AlgorithmComplexity4 from '../views/workbook/AlgorithmComplexity/4.vue'
import AlgorithmComplexity5 from '../views/workbook/AlgorithmComplexity/5.vue'
import AlgorithmComplexity6 from '../views/workbook/AlgorithmComplexity/6.vue'
import AlgorithmComplexity7 from '../views/workbook/AlgorithmComplexity/7.vue'
import AlgorithmComplexity8 from '../views/workbook/AlgorithmComplexity/8.vue'
import AlgorithmComplexity9 from '../views/workbook/AlgorithmComplexity/9.vue'
import AlgorithmComplexity10 from '../views/workbook/AlgorithmComplexity/10.vue'
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
import DataSorting1 from '../views/workbook/DataSorting/1.vue'
import DataSorting2 from '../views/workbook/DataSorting/2.vue'
import DataSorting3 from '../views/workbook/DataSorting/3.vue'
import DataSorting4 from '../views/workbook/DataSorting/4.vue'
import DataSorting5 from '../views/workbook/DataSorting/5.vue'
import DataSorting6 from '../views/workbook/DataSorting/6.vue'
import DataSorting7 from '../views/workbook/DataSorting/7.vue'
import DataSorting8 from '../views/workbook/DataSorting/8.vue'
import DataSorting9 from '../views/workbook/DataSorting/9.vue'
import DataSorting10 from '../views/workbook/DataSorting/10.vue'
import DataSearching1 from '../views/workbook/DataSearching/1.vue'
import DataSearching2 from '../views/workbook/DataSearching/2.vue'
import DataSearching3 from '../views/workbook/DataSearching/3.vue'
import DataSearching4 from '../views/workbook/DataSearching/4.vue'
import DataSearching5 from '../views/workbook/DataSearching/5.vue'
import DataSearching6 from '../views/workbook/DataSearching/6.vue'
import DataSearching7 from '../views/workbook/DataSearching/7.vue'
import DataSearching8 from '../views/workbook/DataSearching/8.vue'
import DataSearching9 from '../views/workbook/DataSearching/9.vue'
import DataSearching10 from '../views/workbook/DataSearching/10.vue'
import ProgramAttributes1 from '../views/workbook/ProgramAttributes/1.vue'
import ProgramAttributes2 from '../views/workbook/ProgramAttributes/2.vue'
import ProgramAttributes3 from '../views/workbook/ProgramAttributes/3.vue'
import ProgramAttributes4 from '../views/workbook/ProgramAttributes/4.vue'
import ProgramAttributes5 from '../views/workbook/ProgramAttributes/5.vue'
import ProgramAttributes6 from '../views/workbook/ProgramAttributes/6.vue'
import ProgramAttributes7 from '../views/workbook/ProgramAttributes/7.vue'
import ProgramAttributes8 from '../views/workbook/ProgramAttributes/8.vue'
import ProgramAttributes9 from '../views/workbook/ProgramAttributes/9.vue'
import ProgramAttributes10 from '../views/workbook/ProgramAttributes/10.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/reference', component: ReferencePage },
  { path: '/workbook', component: Workbook },
  { path: '/contact', component: Contact },

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
  { path: '/workbook/algorithm1', component: Algorithm1 },
  { path: '/workbook/algorithm2', component: Algorithm2 },
  { path: '/workbook/algorithm3', component: Algorithm3 },
  { path: '/workbook/algorithm4', component: Algorithm4 },
  { path: '/workbook/algorithm5', component: Algorithm5 },
  { path: '/workbook/algorithm6', component: Algorithm6 },
  { path: '/workbook/algorithm7', component: Algorithm7 },
  { path: '/workbook/algorithm8', component: Algorithm8 },
  { path: '/workbook/algorithm9', component: Algorithm9 },
  { path: '/workbook/algorithm10', component: Algorithm10 },
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
  { path: '/workbook/complexity1', component: AlgorithmComplexity1 },
  { path: '/workbook/complexity2', component: AlgorithmComplexity2 },
  { path: '/workbook/complexity3', component: AlgorithmComplexity3 },
  { path: '/workbook/complexity4', component: AlgorithmComplexity4 },
  { path: '/workbook/complexity5', component: AlgorithmComplexity5 },
  { path: '/workbook/complexity6', component: AlgorithmComplexity6 },
  { path: '/workbook/complexity7', component: AlgorithmComplexity7 },
  { path: '/workbook/complexity8', component: AlgorithmComplexity8 },
  { path: '/workbook/complexity9', component: AlgorithmComplexity9 },
  { path: '/workbook/complexity10', component: AlgorithmComplexity10 },
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
  { path: '/workbook/data-sorting1', component: DataSorting1 },
  { path: '/workbook/data-sorting2', component: DataSorting2 },
  { path: '/workbook/data-sorting3', component: DataSorting3 },
  { path: '/workbook/data-sorting4', component: DataSorting4 },
  { path: '/workbook/data-sorting5', component: DataSorting5 },
  { path: '/workbook/data-sorting6', component: DataSorting6 },
  { path: '/workbook/data-sorting7', component: DataSorting7 },
  { path: '/workbook/data-sorting8', component: DataSorting8 },
  { path: '/workbook/data-sorting9', component: DataSorting9 },
  { path: '/workbook/data-sorting10', component: DataSorting10 },
  { path: '/workbook/data-searching1', component: DataSearching1 },
  { path: '/workbook/data-searching2', component: DataSearching2 },
  { path: '/workbook/data-searching3', component: DataSearching3 },
  { path: '/workbook/data-searching4', component: DataSearching4 },
  { path: '/workbook/data-searching5', component: DataSearching5 },
  { path: '/workbook/data-searching6', component: DataSearching6 },
  { path: '/workbook/data-searching7', component: DataSearching7 },
  { path: '/workbook/data-searching8', component: DataSearching8 },
  { path: '/workbook/data-searching9', component: DataSearching9 },
  { path: '/workbook/data-searching10', component: DataSearching10 },
  { path: '/workbook/program-attributes1', component: ProgramAttributes1 },
  { path: '/workbook/program-attributes2', component: ProgramAttributes2 },
  { path: '/workbook/program-attributes3', component: ProgramAttributes3 },
  { path: '/workbook/program-attributes4', component: ProgramAttributes4 },
  { path: '/workbook/program-attributes5', component: ProgramAttributes5 },
  { path: '/workbook/program-attributes6', component: ProgramAttributes6 },
  { path: '/workbook/program-attributes7', component: ProgramAttributes7 },
  { path: '/workbook/program-attributes8', component: ProgramAttributes8 },
  { path: '/workbook/program-attributes9', component: ProgramAttributes9 },
  { path: '/workbook/program-attributes10', component: ProgramAttributes10 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
