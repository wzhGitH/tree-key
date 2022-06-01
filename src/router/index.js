
import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPage from '../views/AppPage.vue'

const TestHome = () => import("../views/test/TestHome.vue")
const Home = () => import("../views/Home.vue")

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: "home"
    },
    {
        path: "",
        component: AppPage,
        children: [
            {
                path: "home",
                component: Home,
            },
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
  
