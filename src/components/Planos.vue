<template>
  <div class="planos flex">
    <div v-for="plano in planos" :key="plano">
      <h2>{{plano.titulo}}</h2>
      <ul>
        <li v-for="planos in plano['plano']" :key="planos">{{planos}};</li>
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

h2{
padding-bottom: 20px;
}
li {
  margin: 2px 20px;
  font-size: 20px;
}
button {
  margin:5px 0;
  cursor: pointer;
  font-size: 12px;
  font-size: 16px;
  padding: 5px 20px;
  background-color: #4410fd;
  color:rgb(224, 224, 224);
  border:none;
  border-radius: 15px;
}
button:hover{
  background-color: rgb(97, 97, 97);
}

</style>
