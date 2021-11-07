<template>
  <div class="space-area">
    <h2>Cadastro</h2>
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
};
</script>

