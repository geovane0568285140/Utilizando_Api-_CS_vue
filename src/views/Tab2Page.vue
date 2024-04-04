<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Pesquisa de skins</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Busca</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="inputbut">
        <IonSearchbar placeholder="Escreve uma skin" v-model="busca"></IonSearchbar>
        <IonButton @click=" filtro()">Buscar</IonButton>
      </div>

      <div class="p" v-if="resposta[0] == null">
      <p style="animation: animate 2s linear infinite;">Nada Encontrado no banco</p>
      <p>Exemplo de pesquisa "Chamas"</p>
    </div>
      <div v-else v-for="Resp in resposta">
        <IonCard>
          <IonCardHeader style="text-align: center;">
            <div style="border: 0.1em solid white;">
              <img :src="Resp.image" :alt="Resp.name">
            </div>
            <IonCardTitle>{{ Resp.name }}</IonCardTitle>
            <IonCardSubtitle>{{ Resp.description }}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <div>

            </div>
            <div class="infoCaRa">
              <p id="cate">Categoria: {{ Resp.category.name }}</p>
              <p v-if="Resp.rarity.name == 'Nível Industrial'" style="color:#5e98d9 ;">Raridade: {{
                Resp.rarity.name }}</p>
              <p v-else-if="Resp.rarity.name == 'Restrito'" style="color: #8847ff;">Raridade: {{
                Resp.rarity.name }}</p>
              <p v-else-if="Resp.rarity.name == 'Secreto'" style="color: #d32ce6;">Raridade: {{
                Resp.rarity.name }}</p>
              <p v-else-if="Resp.rarity.name == 'Oculto'" style="color: #eb4b4b;">Raridade: {{
                Resp.rarity.name }}</p>
              <p v-else-if="Resp.rarity.name == 'Nível Militar'" style="color: #4b69ff ;">Raridade: {{
                Resp.rarity.name }}</p>
              <p v-else-if="Resp.rarity.name == 'Nível Consumidor'" style="color: #b0c3d9;">Raridade: {{
                Resp.rarity.name }}</p>
              <!-- <p v-if="Resp.rarity.color == '#5e98d9'" {{ nomeClass = "Cor5e98d9" }} :class="nomeClass" >Raridade: {{ Resp.rarity.name }}</p> -->
            </div>
          </IonCardContent>
        </IonCard>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonSearchbar, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/vue';
export default {
  name: "Buscar",
  data() {
    return {
      listaCS: [] as MyCsGoSkin[],
      busca: "",
      resposta: [],
      nomeClass: ""
    }
  },
  components: {
    IonButton, IonSearchbar, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle
  },
  methods: {
    async getListCS() {
      const data = await fetch("https://bymykel.github.io/CSGO-API/api/pt-BR/skins.json");
      this.listaCS = await data.json();
      console.log(this.listaCS);
    },
    filtro() {
      this.resposta = this.listaCS.filter((resp) => {
        // return bus.name.includes(this.busca);
        return resp.name.includes(this.busca);
      })
      // console.log("Nome: " + this.resp.name + " Foi: " + this.resp + " NomeListaCS: " + this.listaCS.name + " ListaCS: " + this.listaCS);
    }
  },

  mounted() {
    this.getListCS()
  }
}
</script>

<style>

.infoCaRa{
  display: flex;
  justify-content: space-around;
}

.p{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inputbut {
  display: flex;
}

/* .pe {
  animation: animate 1.5s linear infinite;
} */


@keyframes animate {
  40% {
    opacity: 0;
  }

  70% {
    opacity: 0.7;
  }

  100% {
    opacity: 0;
  }
}
</style>