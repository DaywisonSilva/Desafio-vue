<template>
  <div class="gerente">
    <h1 class="gerente__title">
      <q-chip
        size="18px"
        icon="shopping_bag"
        color="orange-10"
        text-color="white"
      >
        Total de vendas: {{ totalVendas }}
      </q-chip>
    </h1>
    <ApexColumnRotatedLabels :vendas="vendas" />
    <Cards :vendas="vendas" />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="orange-10" @click="addVenda" />
    </q-page-sticky>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { useQuasar } from "quasar";
import ApexColumnRotatedLabels from "components/charts/ColumnRotatedLabels.vue";
import Dialog from "components/dialog.vue";
import Cards from "components/cards.vue";
export default {
  setup() {
    const $q = useQuasar();
    let addVenda = () => {
      $q.dialog({
        component: Dialog
      });
    };
    return {
      addVenda
    };
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      vendas: state => state.vendas.vendas
    }),
    totalVendas() {
      let totalVendas = 0;
      this.vendas.forEach(vendas => (totalVendas += vendas.nu_vendas));
      return totalVendas;
    }
  },
  components: {
    ApexColumnRotatedLabels,
    Cards
  }
};
</script>

<style lang="scss" scoped>
@import "quasar/src/css/index.sass";
.gerente {
  @extend .q-pa-md;
  .gerente__title {
    @extend .text-h5;
  }
}
</style>
