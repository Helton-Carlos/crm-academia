<template>
  <div>
    <div class="home flex">
      <div class="center flex-coluna">
        <h1>AdemCRM</h1>
        <router-link to="/"
          ><i class="fas fa-chart-line"></i> Início</router-link
        >
        <router-link to="/cadastro"
          ><i class="fas fa-user"></i> Cadastro</router-link
        >
        <router-link to="/agendamento"
          ><i class="fas fa-calendar-week"></i> Agendamento</router-link
        >
        <router-link to="/academia"
          ><i class="fas fa-fire-alt"></i> Academia</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  background-color: #fff;
  color: rgb(10, 10, 78);
  height: 100vh;
  width: 200px;
  box-shadow: rgb(0, 0, 0.5);
}
.center {
  margin: 0 auto;
  text-align: center;
}
h1 {
  padding-top: 20px;
  padding-bottom: 40px;
  font-size: 30px;
}
a {
  color: rgb(0, 0, 0);
  padding: 7px 15px;
  font-size: 20px;
  margin: 10px 0;
  font-weight: 700;
}
.router-link-exact-active {
  background-color: #5151f1;
  border-radius: 20px;
  color: #ffff;
}
</style>
