<template>
  <div>
    <div class="home flex">
      <div class="flex-coluna center">
        <h1>Ademick</h1>
        <hr>
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
        <router-link to="/grafico"
          ><i class="fas fa-chart-bar"></i> Gráficos</router-link
        >
        <router-link to="/login"
          ><i class="fas fa-sign-in-alt"></i> Sair</router-link
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
h1 {
 margin: 20px 0;
 padding: 20px 0;
  font-size: 25px;
  color: #fff;
  background-color: #4c4c4d;
}
.center{
  text-align: center;
  margin: 0 auto
}
a {
  color: rgb(0, 0, 0);
  padding: 7px 15px;
  font-size: 20px;
  margin: 15px 0px;
  font-weight: 700;
}
.router-link-exact-active {
  background-color: #5151f1;
  width: 100%;
  border-radius: 25px;
  color: #ffff;
}
</style>
