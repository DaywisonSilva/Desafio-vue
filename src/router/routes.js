const routes = [
  {
    path: "/auth",
    component: () => import("layouts/Auth.vue"),
    redirect: "/auth/vendedor",
    children: [
      {
        path: "vendedor",
        component: () => import("src/pages/auth/Vendedor.vue")
      },
      {
        path: "gerente",
        component: () => import("src/pages/auth/Gerente.vue")
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "vendedor", component: () => import("src/pages/Vendedor.vue") },
      { path: "gerente", component: () => import("src/pages/Gerente.vue") }],
    meta: {
      requireAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
