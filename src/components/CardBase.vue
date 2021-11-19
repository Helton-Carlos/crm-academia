<template>
  <div>
    <h2>Controlador:</h2>
    <div class="flex">
      <CardGraficos class="card-base" grafico="grafico-pizza" />
      <div>
        <CardIcon agrupamento="cardio" />
        <CardIcon agrupamento="aero" />
        <CardIcon agrupamento="musculacao" />
      </div>
      <CardGraficos class="card-base" grafico="grafico-barra" />
    </div>
    <h2>Dicas:</h2>
    <div class="flex">
      <CardDicas />
    </div>
  </div>
</template>

<script>
import CardGraficos from "@/components/CardGraficos.vue";
import CardIcon from "@/components/CardIcon.vue";
import CardDicas from "@/components/CardDicas.vue";
export default {
  components: { CardGraficos, CardIcon, CardDicas },
  data() {
    return {};
  },
};
</script>

<style>
.card-base {
  padding: 10px 30px;
  background-color: #e0e0e0;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.5);
  margin: 15px;
}

h2 {
  margin-left: 20px;
}
</style>
