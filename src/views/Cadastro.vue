<template>
  <div class="flex">
    <div>
      <Menu />
    </div>
    <div class="space-area">
      <h2>Cadastro</h2>
      <div class="flex">
        <InputCadastro />
        <TabelaCadastro />
      </div>
    </div>
  </div>
</template>

<script>
import InputCadastro from "@/components/InputCadastro.vue";
import TabelaCadastro from "@/components/TabelaCadastro.vue";
import Menu from "@/components/Menu.vue";
export default {
  components: { InputCadastro, TabelaCadastro,Menu },
};
</script>

