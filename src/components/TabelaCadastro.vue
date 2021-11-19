<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="tr">Nome</th>
          <th class="tr">C.P.F</th>
          <th class="tr">Idade</th>
          <th class="tr">Cardíaca</th>
          <th class="tr">Diabetes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cadastro in arrayCadastro" :key="cadastro.nome">
          <td>{{ cadastro.nome }}</td>
          <td>{{ cadastro.cpf }}</td>
          <td>{{ cadastro.idade }} anos</td>
          <td>{{ cadastro.cardio }}</td>
          <td>{{ cadastro.diabetes }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  computed: {
    arrayCadastro() {
      return this.$store.state.cadastro;
    },
  },
};
</script>

<style scoped>
th {
  color: blueviolet;
  font-size: 20px;
  padding: 0px 20px;
  text-align: center;
}
td {
  color: #222222;
  font-size: 20px;
  padding: 0px 20px;
  text-align: center;
}
.alinhar-center {
  display: flex;
  align-items: center;
}
</style>
