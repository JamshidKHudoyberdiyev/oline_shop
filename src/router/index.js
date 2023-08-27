import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: 'dashboard',
            component: () =>
                import ('../views/Dashboard.vue'),
            children: [{
                path: '/',
                name: 'home',
                component: () =>
                    import ('../views/Home/Home.vue')
            }, {
                path: '/products',
                name: "products",
                component: () =>
                    import ('../views/Products/Products.vue')
            }, {
                path: '/category',
                name: 'category',
                component: () =>
                    import ('../views/Category/Category.vue')
            }]

        },
        {
            path: "/:pathMatch(.*)*",
            name: "errror",
            component: () =>
                import ('../views/Error/Error.vue')
        }, {
            path: '/login',
            name: 'login',
            component: () =>
                import ('../views/Login/Login.vue')

        }
    ]
})

export default router