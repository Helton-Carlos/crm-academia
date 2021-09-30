<template>
  <div>
    <div class="flex-container">
      <Tabela />
      <Planos />
    </div>
  </div>
</template>

<script>
import Tabela from "@/components/Tabela.vue";
import Planos from "@/components/Planos.vue";
export default {
  name: "Home",
  components: { Tabela, Planos },
};
</script>

<style scoped>

</style>
