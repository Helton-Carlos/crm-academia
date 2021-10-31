<template>
  <div class="space-area">
    <CardBase />
    <div class="flex">
      <Slide />
    </div>
  </div>
</template>

<script>
import CardBase from "@/components/CardBase.vue";
import Slide from "@/components/Slide.vue";
export default {
  name: "Home",
  components: { CardBase, Slide },
};
</script>
