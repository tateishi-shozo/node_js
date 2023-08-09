import { createRouter, createWebHistory } from 'vue-router';
import Free from '../Free.vue'
import Hello from '../components/HelloWorld.vue'
import TicTacToe from '../Tic-tac-toe.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        component: Hello,
      },
    {
      path: '/free',
      component: Free,
    },
    {
        path: '/tic-tac-toe',
        component: TicTacToe,
      },
  ],
});

export default router;