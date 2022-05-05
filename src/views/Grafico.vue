<template>
  <div class="flex">
   <div>
      <Menu />
   </div>
    <div style="margin-top: 50px" class="flex">
      <apexchart
        width="400"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexchart>
      <div>
        <apexchart
          width="380"
          type="donut"
          :options="options"
          :series="serie"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import Menu from "@/components/Menu.vue";
export default {
  components: {
    Menu,
    apexchart: VueApexCharts,
  },
  data: function () {
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

<style></style>
