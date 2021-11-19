<template>
  <div>
    <div v-if="grafico === 'grafico-pizza'">
      <h3 style="color:blueviolet;margin-left:10px">Gráficos</h3>
      <apexchart
        width="320"
        type="donut"
        :options="options"
        :series="serie"
      ></apexchart>
    </div>
    <div v-if="grafico === 'grafico-barra'">
      <h3 style="color:blueviolet;margin-left:10px">Matriculas</h3>
      <apexchart
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  props: ["grafico"],
  components: {
    apexchart: VueApexCharts,
  },
  data: function() {
    return {
      options: {},
      serie: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          id: "Matriculado",
        },
        xaxis: {
          categories: ["Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez", "Jan"],
        },
      },
      series: [
        {
          name: "Matriculado",
          data: [30, 40, 35, 50, 49, 60, 70, 41],
        },
      ],
    };
  },
};
</script>
