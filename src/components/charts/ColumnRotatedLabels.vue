<template>
  <div>
    <apexchart
      type="bar"
      height="230"
      :options="chartOptions"
      :series="series"
      class="apexchart"
    />
  </div>
</template>

<script>
export default {
  props: {
    vendas: {
      type: Array,
      required: true
    }
  },
  computed: {
    vendedores() {
      return this.vendas.map(venda => venda.str_vendedor);
    },
    chartOptions() {
      return {
        colors: ["#F44336"],
        chart: {
          height: 150,
          type: "bar"
        },
        plotOptions: {
          bar: {
            borderRadius: 20,
            columnWidth: "50%"
          }
        },
        stroke: {
          width: 2
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: this.vendedores
          // tickPlacement: "on"
        },
        yaxis: {
          title: {
            text: "Qtd. Vendas"
          }
        },
        fill: {
          type: "gradient",
          colors: ["#E65100"],
          gradient: {
            shade: "light",
            type: "horizontal",
            inverseColors: true,
            opacityFrom: 0.75,
            opacityTo: 1,
            stops: [50, 0, 100]
          }
        }
      };
    },
    series() {
      let qtdVendas = this.vendas.map(venda => venda.nu_vendas);
      return [
        {
          name: "Vendas",
          data: qtdVendas
        }
      ];
    }
  }
};
</script>

<style scoped>
.apexchart {
  max-width: 800px;
  margin: 0 auto;
}
</style>
