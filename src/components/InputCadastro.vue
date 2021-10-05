<template>
  <div class="base">
    <form @submit.prevent="enviar" class="flex-coluna">
      <label>Nome</label>
      <input
        type="text"
        name="text"
        id="text"
        v-model="inputs.text"
        placeholder="Nome Completo"
      />
      <label>C.P.F</label>
      <input
        type="text"
        name="cpf"
        id="cpf"
        maxlength="12"
        v-model="inputs.cpf"
        placeholder="C.P.F"
      />
      <label>Idade</label>
      <input
        type="number"
        name="idade"
        id="idade"
        maxlength="3"
        v-model="inputs.idade"
        placeholder="Idade"
      />
      <h4>Possui doenças cardiovasculares?</h4>
      <div>
        <input type="radio" id="sim" value="sim" v-model="inputs.cardio" />
        <label for="sim">Sim</label>
        <input type="radio" id="nao" value="nao" v-model="inputs.cardio" />
        <label for="nao">Não</label>
      </div>
      <h4>Possui problemas de diabetes?</h4>
      <div>
        <input type="radio" id="sim" value="sim" v-model="inputs.cardio" />
        <label for="sim">Sim</label>
        <input type="radio" id="nao" value="nao" v-model="inputs.cardio" />
        <label for="nao">Não</label>
      </div>
      <input type="submit" value="Enviar" />
    </form>
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
        cardio: "",
      },
      result: [],
    };
  },
  methods: {
    enviar() {
      this.result.push({
        inputs: this.inputs,
      });
     console.log(this.result);
    },
  },
};
</script>

<style>
input {
  padding: 10px;
  margin: 5px;
  outline: none;
}
input[type="text"] {
  width: 350px;
}
input[type="submit"]{
background-color: blue;
color:#fff;
border:none;
border-radius: 20px;
}
input[type="submit"]:hover{
background-color: rgb(0, 0, 22);}
h4 {
  margin: 5px;
}
</style>
