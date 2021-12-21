import Vue from 'vue'
import VueRouter from 'vue-router'
import TableData from '../views/TableData.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'TableData',
        component: TableData
    }
]

const router = new VueRouter({
    routes
})

export default router