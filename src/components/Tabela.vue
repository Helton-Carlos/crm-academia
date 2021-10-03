<template>
  <div>
    <table>
      <th>
        <tr>
          <th>Entrada</th>
          <th>Saída</th>
          <th>Colaborador</th>
          <th>Stautus</th>
        </tr>
        <tr v-for="escalas in escala" :key="escalas.nome">
          <td>{{ escalas.entrada }}</td>
          <td>{{ escalas.saida }}</td>
          <td>{{ escalas.nome }}</td>
          <td>{{ escalas.status }}</td>
        </tr>
      </th>
    </table>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      escala: [
        { entrada: "05:30", saida: "13:00", nome: "Helton", status: "Ativo" },
        { entrada: " 13:00", saida: "18:00", nome: "Tayná", status: "Ativo" },
        { entrada: " 18:00", saida: "23:00", nome: "Wagner", status: "Ativo" },
      ],
    };
  },
};
</script>

<style scoped>
td, table {margin-right: 20px;
  max-width: 100%;
  background-color: none;
  border: 2px solid #000000;
  font-size: 20px;
  color: #000000;
  padding: 8px 20px;
}
.alinhar-center {
  display: flex;
  align-items: center;
}
</style>
