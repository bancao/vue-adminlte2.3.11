import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

const routes = [{
        path: '',
        name: 'Layout',
        component: Layout,
        meta: {
                // 添加该字段，表示进入这个路由是需要登录的
                 requireAuth: true,  
                },
        children: [
            {
                path: '/hello',
                meta: {
                // 添加该字段，表示进入这个路由是需要登录的
                 requireAuth: true,  
                },
                component: Hello
            },
            {
                path: '/test',
                meta: {
                // 添加该字段，表示进入这个路由是需要登录的
                 requireAuth: true,  
                },
                component: Test
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
    ]

export default new Router({
	mode: 'history',
    routes: routes
})
