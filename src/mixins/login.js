import users from "../accounts.json";
export const login = {
  methods: {
    submit(type) {
      let hasUser = users.some(user => {
        if (
          user.str_email === this.email &&
          user.str_password === this.password &&
          user.str_type === type
        ) {
          this.$q.localStorage.set("currentUser", user);
          return true;
        }
      });
      if (hasUser) {
        let currentUser = this.$q.localStorage.getItem('currentUser')
        this.$router.push(`/${currentUser.str_type}`);
        this.$q.notify({
          type: "positive",
          message: "Usuário logado"
        });
      } else {
        this.$q.notify({
          type: "negative",
          message: "Usuário não encontrado"
        });
      }
    }
  }
};