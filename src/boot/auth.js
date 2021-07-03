import { LocalStorage } from 'quasar';

export default ({ router, store }) => {

  router.beforeEach((to, from, next) => {
    let isRequiredAuth = to.meta.requireAuth;
    let currentUser = LocalStorage.getItem('currentUser')
    if (isRequiredAuth) {
      if (currentUser) {
        next();
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