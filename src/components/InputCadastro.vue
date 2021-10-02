<template>
  <div class="base flex-coluna">
    <input
      type="text"
      name="text"
      id="text"
      v-model="text"
      placeholder="Nome Completo"
    />
    <input type="text" name="cpf" id="cpf" v-model="cpf" placeholder="C.P.F" />
    <input
      type="number"
      name="idade"
      id="idade"
      v-model="idade"
      placeholder="Idade"
    />
    <h4>Possui doenças cardiovasculares?</h4>
    <div>
      <input type="checkbox" name="sim" id="sim" />Sim
      <input type="checkbox" name="nao" id="nao" />Não
    </div>
    <input type="submit" value="Enviar" />
  </div>
</template>

<script>
export default {
  setup() {
    return {
      text: "",
    };
  },
};
</script>

<style>
input {
  width: 750px;
  padding: 10px;
  margin: 5px;
}
h4 {
  margin: 5px;
}
</style>
