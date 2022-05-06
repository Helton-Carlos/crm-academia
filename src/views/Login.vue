<template>
  <div>
    <form style="background-color: #ccc; padding: 20px 30px 50px 30px">
      <h2 style="padding: 5px 0">Sistema Ademick</h2>
      <hr />
      <div style="margin: 10px 0px" class="flex-coluna">
        <label>Login</label>
        <input type="text" v-model="usuario" placeholder="Digite seu login" />
        <label>Senha</label>
        <input type="password" v-model="senha" placeholder="Digite sua senha" />
      </div>
      <p style="color:red;padding-bottom: 5px;" v-show="negado"><strong>Acesso negado...</strong></p>
      <button @click.prevent="logar()">Logar</button>
    </form>
  </div>
</template>

<script>
import { senhaLogin } from "../commands/validacao";
export default {
  data() {
    return {
      usuario: "",
      senha: "",
      negado:false
    };
  },
  methods: {
    logar() {
      let objs = senhaLogin().login;
      for (let i = 0; i < objs.length; i++) {
        if (this.usuario === objs[i].usuario && this.senha === objs[i].senha) {
          let login = objs[i];
          localStorage.setItem("login", JSON.stringify(login));
          this.confirmacaoLogin();
        } else {
          this.negado=true
        }
      }
    },
    confirmacaoLogin() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
form {
  margin: 150px auto;
  width: 320px;
  border-radius: 8px;
  box-shadow: 0 0 0.4em rgb(207, 207, 207);
}

label {
  font-weight: 700;
  text-align: left;
  padding: 10px 0px 5px 0px;
}
input {
  margin-bottom: 10px;
  margin-top: 1px;
  padding: 8px;
  border: none;
  border-radius: 5px;
}

input:focus {
  outline: 0;
}

button {
  padding: 10px;
  background: rgb(64, 32, 178);
  font-size: 15px;
  border: none;
  color: #fff;
  border-radius: 5px;
}

button:hover {
  background: rgb(14, 42, 134);
}
</style>