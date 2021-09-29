<template>
  <div class="flex">
    <Menu />
    <Home />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Home from "@/views/Home.vue";
export default {
  name: "App",
  components: { Menu, Home },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: rgb(230, 230, 230);
  font-family: "Gemunu Libre", sans-serif;
}
.flex {
  display: flex;
}
.flex-container {
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
}
.flex-coluna {
  display: flex;
  flex-direction: column;
}
a {
  text-decoration: none;
}
</style>
