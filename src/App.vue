<template>
  <div >
    <router-view />
  </div>
</template>

<script>
export default {
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
  background-color: rgb(247, 244, 243);
  font-family: "Gemunu Libre", sans-serif;
}
.flex {
  display: flex;
}

.flex-alinhar{
  align-items: center;
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

.space-area{
  margin: 20px 20px;
}
.flex-wrap{
  display: flex;
  flex-wrap: wrap;
}

</style>
