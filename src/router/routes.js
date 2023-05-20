
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: '/about', component: () => import('pages/AboutPage.vue') },
      // { path: '/help', component: () => import('pages/HelpPage.vue') },
      // { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/curriculum', component: () => import('pages/CurriculumPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
