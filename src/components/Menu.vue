<template>
  <div>
    <div class="home flex">
      <div class="center flex-coluna">
        <h1>AdemCRM</h1>
        <router-link to="/">Início</router-link>
        <router-link to="/cadastro">Cadastro</router-link>
        <router-link to="/agendamento">Agendamento</router-link>
        <router-link to="/academia">Academia</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  background-color: rgb(65, 65, 65);
  color: #fff;
  height: 100vh;
  width: 250px;
}
.center {
  margin: 0 auto;
  text-align: center;
}
h1 {
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 40px;
}
a {
  color: #fff;
  padding: 15px 0px;
  font-size: 20px;
  font-weight: 700;
}
.router-link-exact-active {
  color: rgb(0, 0, 0);
}
</style>
