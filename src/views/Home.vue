<template>
  <div class="flex">
    <div>
      <Menu />
    </div>
    <div class="space-area">
      <CardBase />
    </div>
  </div>
</template>

<script>
import CardBase from "@/components/CardBase.vue";
import Menu from "@/components/Menu.vue";
export default {
  name: "Home",
  components: { CardBase, Menu },
};
</script>
