<template>
  <div v-for="(imgs, index) in img" :key="index"  style="width:200px" class="planos">
    <img :src="imgs.imagem" :alt="imgs.name" style=" width:100%" />
    <p>{{imgs.texto}}</p>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      img: [
        { name: "Masculino", imagem: require("../assets/Masculino.png"),texto:"Os benefícios da musculação são: eliminação da gordura, aumento da massa muscular, aumento da força muscular, melhora a atividade cardíaca, a postura e a auto-estima." },
        { name: "Feminino", imagem: require("../assets/Feminino.png"),texto:"A atividade emagrece, aumenta o bem-estar e melhora o humor de homens e mulheres. Mas alguns de seus benefícios são muito específicos para a mulher." },
        { name: "Musculação", imagem: require("../assets/Peso.png"),texto:"O que o Instrutor de Academia faz? Ministrar aulas teóricas e práticas de Educação Física conforme orientação e conteúdo previamente distribuído." },
        { name: "Judô", imagem: require("../assets/Judo.png"),texto:"Judô é uma arte marcial praticada como esporte, o judô é uma adaptação do jiu-jitsu, que tem por objetivo desenvolver técnicas de defesa pessoal." },
      ],
    };
  },
};
</script>
