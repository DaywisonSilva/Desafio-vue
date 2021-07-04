<template>
  <q-dialog ref="dialog" persistent>
    <q-card class="q-dialog-plugin">
      <q-form @submit.prevent="submit">
        <q-card-section class="q-col-gutter-sm">
          <q-input
            label="Vendedor"
            v-model="str_vendedor"
            color="orange-10"
            filled
            :rules="[val => !!val || 'Campo Obrigatório']"
          />
          <q-select
            v-model="arr_medicamentos"
            label="Medicamentos"
            multiple
            color="orange-10"
            filled
            :options="['dexametasona', 'paracetamol', 'morfina']"
            :rules="[val => val.length > 0 || 'Campo Obrigatório']"
          />
          <q-input
            label="Total de vendas"
            v-model.number="nu_vendas"
            color="orange-10"
            filled
            :rules="[
              val => !!val || 'Campo Obrigatório',
              val => !!Number(val) || 'Digite um número'
            ]"
          />
          <q-input
            label="Valor"
            v-model.number="nu_valor"
            color="orange-10"
            filled
            :rules="[
              val => !!val || 'Campo Obrigatório',
              val => !!Number(val) || 'Digite um número'
            ]"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            color="orange-8"
            label="Adicionar"
            type="submit"
            icon="add"
            size="sm"
          />
          <q-btn color="red" label="Fechar" @click="onCancelClick" size="sm" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  emits: ["hide"],
  data() {
    return {
      str_vendedor: "",
      arr_medicamentos: [],
      nu_vendas: null,
      nu_valor: null
    };
  },
  computed: {
    ...mapState({
      vendas: state => state.vendas.vendas
    })
  },
  methods: {
    ...mapMutations({
      addVenda: "vendas/addVenda"
    }),
    show() {
      this.$refs.dialog.show();
    },
    hide() {
      this.$refs.dialog.hide();
    },
    submit() {
      this.addVenda({
        id: this.vendas.length,
        str_vendedor: this.str_vendedor,
        arr_medicamentos: this.arr_medicamentos,
        nu_vendas: this.nu_vendas,
        nu_valor: this.nu_valor
      });
      this.hide();
    },
    onCancelClick() {
      this.hide();
    }
  }
};
</script>
