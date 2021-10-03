<template>
  <div class="planos flex">
    <div v-for="plano in planos" :key="plano">
      <h2>{{plano.titulo}}</h2>
      <ul class="retangulo">
        <li v-for="planos in plano['plano']" :key="planos">{{planos}}</li>
        <button>Comprar</button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      planos: [
        {
          titulo:"Plano Básico",
          plano:['Adesão grátis','Manuteção Anual 100,00','Mesalidade 100,00']
        },
         {
          titulo:"Plano Top",
          plano:[ "Adesão grátis","Manuteção Anual 100,00","Mesalidade 120,00","Cadeira de massagem","5 convites mensais"]
        },
         {
          titulo:"Plano Premium",
          plano:[ "Adesão grátis","Manuteção Anual 150,00","Mesalidade 150,00","Cadeira de massagem","5 convites mensais","Não precisa agendar","Treino de judô"]
        }
     
      ],
    };
  },
};
</script>

<style scoped>

.retangulo {
  padding: 10px 10px;
  margin-right: 20px;
  background-color: none;
  border: 2px solid #000000;
}
li {
  margin: 2px 20px;
  font-size: 20px;
}
button {
  margin:10px 0;
  cursor: pointer;
  font-size: 12px;
  padding: 8px 20px;
  background-color: #000000;
  color:rgb(131, 113, 107);
  border: 2px solid #000000;
}
</style>
