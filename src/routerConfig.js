export default [
  {
    path: '/',
    component: resolve => require(['./views/index.vue'], resolve)
  },
  {
    path: '/register',
    component: resolve => require(['./views/register.vue'], resolve)
  },
  {
    path: '/login',
    component: resolve => require(['./views/login.vue'], resolve)
  }
]
