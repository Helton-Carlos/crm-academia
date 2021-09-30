<template>
  <div class="planos">
    <div>
      <h2>Plano Básico</h2>
      <ul class="retangulo">
        <li>Adesão grátis</li>
        <li>Manuteção Anual 100,00</li>
        <li>Mesalidade 100,00</li>
        <button>Comprar</button>
      </ul>
    </div>
    <div>
      <h2>Plano Top</h2>
      <ul class="retangulo">
        <li>Adesão grátis</li>
        <li>Manuteção Anual 100,00</li>
        <li>Mesalidade 120,00</li>
        <li>Cadeira de massagem</li>
        <li>5 convites mensais</li>
        <button>Comprar</button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      escala: [
        { horario: "05:30 às 13:00", nome: "Helton", status: "Ativo" },
        { horario: " 13:00 às 18:00", nome: "Tayná", status: "Ativo" },
        { horario: " 18:00 às 23:00", nome: "Wagner", status: "Ativo" },
      ],
    };
  },
};
</script>

<style scoped>
.planos {
  width: 550px;
  background-color: none;
  border: 2px solid #000000;
  padding: 15px 15px;
  color: #000000;
  margin: 32px 0px;
}
.retangulo {
  padding: 10px 10px;
  background-color: none;
  border: 2px solid #000000;
}
li {
  margin: 2px 20px;
  font-size: 20px;
}
button {
  cursor: pointer;
  font-size: 12px;
  padding: 8px 20px;
  background-color: #000000;
  color:rgb(131, 113, 107);
  border: 2px solid #000000;
}
</style>
