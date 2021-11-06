<template>
  <div class="space-area">
    <h1>Cadastro</h1>
    <div class="flex">
      <InputCadastro />
      <TabelaCadastro />
    </div>
  </div>
</template>

<script>
import InputCadastro from "@/components/InputCadastro.vue";
import TabelaCadastro from "@/components/TabelaCadastro.vue";

export default {
  components: { InputCadastro, TabelaCadastro },
  setup() {},
};
</script>

<style></style>
