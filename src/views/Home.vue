<template>
  <div class="home ">
    <div class="center flex-coluna">
      <h1>AdemCRM</h1>
      <router-link to="/">Início</router-link>
      <router-link to="/cadastro">Cadastro</router-link>
      <router-link to="/Agendamento">Agendamento</router-link>
      <router-link to="/sobre">Sobre</router-link>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  background-color: #fff;
  height: 100vh;
  width: 250px;
}
.center {
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
}
h1{
  padding-bottom: 50px;
}
a{
  padding: 10px;
  font-size: 20px;
}
</style>
