import { createRouter, createWebHistory } from 'vue-router'
import PHome from '@/components/pages/PHome.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PHome,
        },
    ],
})

export default router
