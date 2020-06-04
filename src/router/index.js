import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'
import UserProfile from '../views/user/UserProfile'
import UserList from '../views/user/UserList'
import NotFound from '../views/error/NotFound'

Vue.use(VueRouter)

const routes = [
    //登录页
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    //首页
    {
        path: '/main',
        name: 'Main',
        component: Main,
        children: [
            {
                path: '/user/profile/:id',
                name: 'UserProfile',
                component: UserProfile,
                props: true
            },
            {
                path: '/user/list',
                name: 'UserList',
                component: UserList
            }
        ]
    },
    // 重定向到首页
    // {
    //     path: '/goMain/:username',
    //     redirect: '/main/:username'
    // },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
