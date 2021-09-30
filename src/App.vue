<template>
  <div class="flex">
    <div><Menu /></div>
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  components: { Menu },
  name: "App",
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: rgb(131, 113, 107);
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
