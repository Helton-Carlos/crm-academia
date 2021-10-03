<template>
  <div class="space-area">
    <h1>CRM</h1>
    <Planos />
    <div class="flex">
      <Slide />
    </div>
  </div>
</template>

<script>
import Planos from "@/components/Planos.vue";
import Slide from "@/components/Slide.vue";
export default {
  name: "Home",
  components: { Planos, Slide },
};
</script>

<style>
.planos {
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: none;
  border: 2px solid #000000;
  padding: 15px 15px;
  color: #000000;
}
</style>
