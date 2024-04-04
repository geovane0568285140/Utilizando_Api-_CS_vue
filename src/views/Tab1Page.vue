<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Colecionaveis</ion-title>
      </ion-toolbar>
    </ion-header>





    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Lista de colecionáveis</ion-title>
        </ion-toolbar>
      </ion-header>

      <div v-for="CsGo in listaCS">
        <ion-card>
          <div class="Card">
            <ion-card-subtitle class="Nomi">Colecionavel:</ion-card-subtitle>
            <p>{{ CsGo.name }}</p>
          <ion-card-content>
            <ion-button @click="Detalhes(CsGo)">Detalhes</ion-button>
          </ion-card-content>
        </div>
        </ion-card>

      </div>


      <ion-modal :is-open="isOpen">
        <ion-header>
          <ion-toolbar>
            <ion-title>Detalhes da coleção</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="setOpen()">Fechar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-card  >
          <div class="Perfi">
            <ion-card-subtitle>Nome: {{ csSelecionado.name }}</ion-card-subtitle>
          </div>
          <ion-card-content>
            <img alt="Silhouette of mountains" :src="csSelecionado.image" />
            <p>Descrição: {{ csSelecionado.description }}</p>
            <p>Raridade: {{ csSelecionado.rarity.name }}</p>
            <p>Tipo: {{ csSelecionado.type }}</p>
          </ion-card-content>
        </ion-card>
        </ion-content>
      </ion-modal>


    </ion-content>
  </ion-page>
</template>

<script  lang="ts">
import { IonModal, IonPage, IonHeader, IonButton, IonButtons, IonToolbar, IonTitle, IonContent, IonCardContent, IonCard } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import MyCsGo from '@/Classes/MyCsGo';

export default {
  name: "ListagemCs-Go",
  components: {
    IonModal, IonPage, IonHeader, IonButton, IonButtons, IonToolbar, IonTitle, IonContent, IonCardContent, IonCard
  },
  data() {
    return {
      isOpen: false,
      listaCS: [] as MyCsGo[],
      csSelecionado: {}
    }
  },
  methods: {
    async getListCS() {
      const data = await fetch("https://bymykel.github.io/CSGO-API/api/pt-BR/collectibles.json");
      this.listaCS = await data.json();
    },
    Detalhes(CsGo) {
      this.csSelecionado = CsGo;
        this.isOpen = true;
    },
    setOpen() {
      this.isOpen = false
    }

  },
  mounted() {
    this.getListCS();
  }
}
</script>

<style scoped>

.Card{
  display: block;
  text-align: center;
  justify-content: center;
}

.Perfi{
  display: flex;
  justify-content: center;
}

ion-icon {
  font-size: 1.5em;
  margin: 20px 10px 20px 0;
}
</style>