import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FlashCardsList from '../components/FlashCardsList.vue'
// import FlashCardDetail from '../components/FlashCardDetail.vue'
const flashCardDetail=()=> import('../components/FlashCardDetail.vue');
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: FlashCardsList
  },
  {
    path: '/flashcard/:id',
    name: 'FlashCardDetail',
    component: flashCardDetail,
    // Convert the route parameter to a number and pass it as a prop.
    props: route => ({ id: Number(route.params.id) })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
