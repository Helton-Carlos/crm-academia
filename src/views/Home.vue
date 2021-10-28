<template>
  <div class="space-area">
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
  background-color:#e0e0e0;
  border-radius: 20px;
  padding: 15px 15px;
  box-shadow: rgba(0, 0, 0, 0.5);
}
</style>
