<template>
  <div class="flex">
    <div>
      <Menu />
    </div>
    <div class="space-area">
      <h1>Academia</h1>
      <Tabela />
    </div>
  </div>
</template>

<script>
import Tabela from "@/components/Tabela.vue";
import Menu from "@/components/Menu.vue";
export default {
  components: { Tabela , Menu},
  setup() {},
};
</script>

<style></style>
