<template>
  <div class="base flex-coluna">
    <input
      type="text"
      name="text"
      id="text"
      v-model="inputs.text"
      placeholder="Nome Completo"
    />
    <input
      type="text"
      name="cpf"
      id="cpf"
      v-model="inputs.cpf"
      placeholder="C.P.F"
    />
    <input
      type="number"
      name="idade"
      id="idade"
      v-model="inputs.idade"
      placeholder="Idade"
    />
    <h4>Possui doenças cardiovasculares?</h4>
    <div style="width:250px">
      <input type="checkbox" name="sim" id="sim" />
      <p>Sim</p>
      <input type="checkbox" name="nao" id="nao" />
      <p>Não</p>
    </div>
    <input type="submit" value="Enviar" />
  </div>
</template>

<script>
export default {
  setup() {
    return {
      inputs: {
        text: "",
        cpf: "",
        idade: "",
      },
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
