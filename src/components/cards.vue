<template>
  <div class="gerente__cards">
    <div class="gerente__card" v-for="venda in vendas" :key="venda.id">
      <q-card>
        <q-card-actions align="right">
          <q-btn
            label="Excluir"
            color="red"
            icon="delete"
            size="sm"
            @click="deleteVenda(venda.id)"
          />
          <q-btn label="Editar" color="orange-9" icon="edit" size="sm" />
        </q-card-actions>
        <q-card-section>
          <h2 class="gerente__cardTitle">Vendedor: {{ venda.str_vendedor }}</h2>
          <p>
            Medicamentos:
            <q-chip
              v-for="(medicamento, index) in venda.arr_medicamentos"
              size="sm"
              icon="shopping_bag"
              color="orange-8"
              text-color="white"
              :key="index"
            >
              {{ medicamento }}
            </q-chip>
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    vendas: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      deleteVenda: "vendas/deleteVenda"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "quasar/src/css/index.sass";

.gerente__cards {
  @extend .row, .q-col-gutter-md;

  .gerente__card {
    @extend .col-12, .col-sm-6, .col-md-4, .col-lg-3;
  }

  .gerente__cardTitle {
    @extend .text-grey-10, .text-h5;
  }
}
</style>
