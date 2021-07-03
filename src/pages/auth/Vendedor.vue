<template>
  <div class="container">
    <q-card class="card">
      <h1 class="card__title">Vendedor</h1>
      <q-img
        src="~/assets/img/leadbase-logo.png"
        class="card__img"
        spinner-color="orange-10"
      />
      <q-form class="card__form" @submit.prevent="submit('vendedor')">
        <div class="card__containerInput">
          <q-input
            v-model="email"
            label="Digite seu email"
            color="orange-10"
            filled
            :rules="[val => !!val || 'Preenchimento obrigatório']"
          />
        </div>
        <div class="card__containerInput">
          <q-input
            v-model="password"
            label="Digite sua senha"
            color="orange-10"
            filled
            autocomplete="on"
            :type="isPwd ? 'password' : 'text'"
            :rules="[val => !!val || 'Preenchimento obrigatório']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div class="card__containerBtn">
          <q-btn
            type="submit"
            color="orange-10"
            class="card__btn"
            label="Entrar"
            size="lg"
          />
        </div>
      </q-form>
      <p class="card__register">
        É gerente?
        <router-link class="card__register--orange" to="gerente" tag="span"
          >Faça login como Gerente</router-link
        >
      </p>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { login } from "../../mixins/login.js";
export default {
  mixins: [login],
  setup() {
    let email = ref("");
    let password = ref("");

    return {
      email,
      password,
      isPwd: ref(true)
    };
  }
};
</script>

<style lang="scss" scoped>
@import "quasar/src/css/index.sass";
.container {
  @extend .row, .justify-center;
  .card {
    @extend .q-pa-lg, .col-12;
    max-width: 500px;
    margin-top: calc(50vh - 250px);
    .card__title {
      @extend .text-h4, .text-grey-8;
    }

    .card__img {
      @extend .q-mx-auto;
      display: block;
      width: 250px;
    }

    .card__form {
      @extend .row, .q-col-gutter-md, .items-center, .q-mt-md;
    }
    .card__containerInput {
      @extend .col-12;
    }

    .card__containerBtn {
      @extend .col-12, .row, .justify-center;
    }
    .card__btn {
      @extend .text-capitalize, .col-12;
    }

    .card__register {
      @extend .text-right, .q-mt-md, .text-grey-9;
    }

    .card__register--orange {
      @extend .text-orange-10, .text-weight-medium, .cursor-pointer;
      text-decoration: none;
    }
  }
}
</style>
