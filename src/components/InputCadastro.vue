<template>
  <div class="card-base">
    <form @submit.prevent="enviar" class="flex-coluna">
      <label>Nome</label>
      <input
        type="nome"
        name="nome"
        id="nome"
        v-model="nome"
        placeholder="Nome Completo"
      />
      <label>C.P.F</label>
      <input
        type="nome"
        name="cpf"
        id="cpf"
        maxlength="12"
        v-model="cpf"
        placeholder="C.P.F"
      />
      <label>Idade</label>
      <input
        type="number"
        name="idade"
        id="idade"
        maxlength="3"
        v-model="idade"
        placeholder="Idade"
      />
      <h4>Possui doenças cardiovasculares?</h4>
      <div>
        <input type="radio" id="sim" value="sim" v-model="cardio" />
        <label for="sim">Sim</label>
        <input type="radio" id="nao" value="nao" v-model="cardio" />
        <label for="nao">Não</label>
      </div>
      <h4>Possui problemas de diabetes?</h4>
      <div>
        <input type="radio" id="sim" value="sim" v-model="diabetes" />
        <label for="sim1">Sim</label>
        <input type="radio" id="nao" value="nao" v-model="diabetes" />
        <label for="nao1">Não</label>
      </div>
      <input type="submit" value="Enviar" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      cpf: "",
      idade: "",
      cardio: "",
      diabetes: "",
      arrayInputs: [],
    };
  },
  methods: {
    enviar() {
      if (this.nome === "") {
        alert("Preencha os campos!");
      } else {
        this.arrayInputs.unshift({
          nome: this.nome,
          cpf: this.cpf,
          idade: this.idade,
          cardio: this.cardio,
          diabetes: this.diabetes,
        });
        this.$store.commit("pegarCadastro", this.arrayInputs);
        (this.nome = ""),
          (this.cpf = ""),
          (this.idade = ""),
          (this.cardio = ""),
          (this.diabetes = "");
      }
    },
  },
};
</script>

<style scoped>
label {
  font-size: 20px;
  padding-left: 10px;
}

input {
  padding: 10px;
  border-radius: 4px;
  font-size: 15px;
  border: none;
  margin: 7px;
  outline: none;
  background-color: #f3f3f3;
  color: #000000;
}

input[type="nome"] {
  width: 400px;
}
input[type="nome"]:focus,
input[type="number"]:focus,
input[type="radio"]:focus {
  border: 2px solid rgb(147, 12, 209);
}

input[type="submit"] {
  margin: 10px 0;
  background-color: blueviolet;
  color: #fff;
  border: none;
  border-radius: 20px;
}

input[type="submit"]:hover {
  background-color: rgb(0, 0, 22);
}
h4 {
  margin: 5px;
}
</style>
