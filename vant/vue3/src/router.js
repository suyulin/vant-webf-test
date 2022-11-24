import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: '/',
    path: '/',
    redirect: {
      name: 'button',
    },
    meta: {
      title: 'Home',
    },
  },
  {
    name: 'button',
    path: '/button',
    component: () => import('./view/components/button'),
    meta: {
      title: 'Button',
    },
  },
  {
    name: 'icon',
    path: '/icon',
    component: () => import('./view/components/icon'),
    meta: {
      title: 'Icon',
    },
  },
  {
    name: 'cell',
    path: '/cell',
    component: () => import('./view/components/cell'),
    meta: {
      title: 'Cell',
    },
  },
  {
    name: 'image',
    path: '/image',
    component: () => import('./view/components/image'),
    meta: {
      title: 'Image',
    },
  },
   {
    name: 'layout',
    path: '/layout',
    component: () => import('./view/components/layout'),
    meta: {
      title: 'Layout',
    },
  },
   {
    name: 'popup',
    path: '/popup',
    component: () => import('./view/components/popup'),
    meta: {
      title: 'Popup',
    },
  },
   {
    name: 'space',
    path: '/space',
    component: () => import('./view/components/space'),
    meta: {
      title: 'Space',
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };
