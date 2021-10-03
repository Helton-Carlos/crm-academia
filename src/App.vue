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
  background-color: rgb(136, 131, 130);
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
.base {
  background-color: none;
  border: 2px solid #000000;
  padding: 15px 15px;
  color: #000000;
}
.space-area{
  margin: 20px 20px;
}
.flex-wrap{
  display: flex;
  flex-wrap: wrap;
}

</style>
