
import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPage from '../views/AppPage.vue'

const TestHome = () => import("../views/test/TestHome.vue")

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: "test"
    },
    {
        path: "",
        component: AppPage,
        children: [
            {
                path: "test",
                component: TestHome,
            }
        ]
    }
]
const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})
export default router
  
