import { LocalStorage } from 'quasar';

export default ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    let isRequiredAuth = to.meta.requireAuth;
    let currentUser = LocalStorage.getItem('currentUser')
    if (isRequiredAuth) {
      if (currentUser) {
        if (to.fullPath === `/${currentUser.str_type}`) {
          next();
        } else if (to.fullPath === '/') {
          next(`/${currentUser.str_type}`)
        } else {
          next(false)
        }
        store.commit("auth/setUser", currentUser);
      } else {
        next("/auth")
      }
    } else {
      if (currentUser) {
        next(false);
      } else {
        next()
      }
    }
  })
}