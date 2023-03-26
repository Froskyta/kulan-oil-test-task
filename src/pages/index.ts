import Routing from './index.vue'

export const routes = [
    {
        name: 'main',
        path: '/',
        component: () => import('./main')
    }
]

export {
    Routing
}
