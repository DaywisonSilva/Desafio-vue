<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-orange-10">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-capitalize">
          {{ user.str_type }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="drawer bg-grey-1">
      <q-list class="bg-grey">
        <q-img
          class="absolute-top"
          src="https://cdn.quasar.dev/img/material.png"
          style="height: 150px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="text-weight-bold">{{ user.str_name }}</div>
            <div>{{ user.str_email }}</div>
          </div>
        </q-img>
        <q-btn label="Sair" color="red" class="drawer__btn" @click="signOut" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { mapState } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    const router = useRouter();

    const signOut = () => {
      $q.localStorage.set("currentUser", "");
      router.push("/auth");
    };

    return {
      leftDrawerOpen,
      signOut,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  }
});
</script>

<style lang="scss" scoped>
@import "quasar/src/css/index.sass";

.drawer__btn {
  @extend .q-mb-md;
  position: absolute;
  bottom: 0px;
  left: 10%;
  width: 80%;
}
</style>
