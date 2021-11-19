<template>
  <div class="flex flex-alinhar card-base" v-if="agrupamento === 'aero'">
    <div class="icon">
      <i class="fas fa-biking"></i>
    </div>
    <div>
      <h3>Aeróbico</h3>
    </div>
  </div>
  <div class="flex flex-alinhar card-base" v-if="agrupamento === 'cardio'">
    <div class="icon">
      <i class="fas fa-heartbeat"></i>
    </div>
    <div>
      <h3>Cardio</h3>
    </div>
  </div>
    <div class="flex flex-alinhar card-base" v-if="agrupamento === 'musculacao'">
    <div class="icon">
      <i class="fas fa-running"></i>
    </div>
    <div>
      <h3>Musculação</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["agrupamento"],
  setup() {
    return {};
  },
};
</script>

<style>
.icon {
  padding: 12px;
  background-color: blueviolet;
  border-radius: 50px;
  color: #fff;
  margin: 5px;
}
</style>
